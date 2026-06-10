import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const BodySchema = z.object({
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(5).max(4000),
});

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) throw new Error("Unauthorized");

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const token = authHeader.replace("Bearer ", "");
    const { data: { user } } = await supabase.auth.getUser(token);
    if (!user || !user.email) throw new Error("Unauthorized");

    const json = await req.json();
    const parsed = BodySchema.safeParse(json);
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { subject, message } = parsed.data;

    const { data: profile } = await supabase
      .from("profiles")
      .select("first_name, last_name, phone")
      .eq("user_id", user.id)
      .maybeSingle();

    const firstName = (profile as any)?.first_name ?? "";
    const lastName = (profile as any)?.last_name ?? "";
    const phone = (profile as any)?.phone ?? "Non renseigné";
    const fullName = `${firstName} ${lastName}`.trim() || "Utilisateur";

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) throw new Error("Email service not configured");

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111; max-width: 600px;">
        <h2 style="color:#0F3460;margin-bottom:16px;">Nouveau message depuis CIA E-Learning</h2>
        <p><strong>De :</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email :</strong> <a href="mailto:${escapeHtml(user.email)}">${escapeHtml(user.email)}</a></p>
        <p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;"/>
        <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
        <div style="white-space:pre-wrap;background:#f7f7f9;padding:14px;border-radius:8px;margin-top:8px;">
          ${escapeHtml(message)}
        </div>
        <p style="margin-top:24px;font-size:12px;color:#666;">
          Message envoyé automatiquement depuis l'application CIA E-Learning.
          Répondez directement à ${escapeHtml(user.email)} pour contacter l'utilisateur.
        </p>
      </div>
    `;

    const resp = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "CIA E-Learning <onboarding@resend.dev>",
        to: ["direct@cia-france.com"],
        reply_to: user.email,
        subject: `[CIA E-Learning] ${subject}`,
        html,
      }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error("Resend error:", resp.status, text);
      throw new Error(`Email send failed: ${resp.status}`);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-contact-message error:", e);
    const msg = e instanceof Error ? e.message : "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});