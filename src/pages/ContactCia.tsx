import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Loader2, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=33604590420&text=&source=&data=";

const schema = z.object({
  subject: z.string().trim().min(2, "Sujet trop court").max(150, "Maximum 150 caractères"),
  message: z.string().trim().min(5, "Message trop court").max(4000, "Maximum 4000 caractères"),
});

export default function ContactCia() {
  const { user } = useAuth();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ subject?: string; message?: string }>({});
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!user) {
      toast.error("Vous devez être connecté pour envoyer un message.");
      return;
    }
    const parsed = schema.safeParse({ subject, message });
    if (!parsed.success) {
      const e: typeof errors = {};
      parsed.error.issues.forEach((i) => { e[i.path[0] as "subject" | "message"] = i.message; });
      setErrors(e);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-message", {
        body: parsed.data,
      });
      if (error || data?.error) throw new Error(error?.message || data?.error || "Erreur d'envoi");
      toast.success("Message envoyé ! Le Centre vous contactera bientôt.");
      setSubject("");
      setMessage("");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erreur d'envoi");
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="container max-w-5xl py-8 pb-24 md:pb-12"
    >
      <header className="mb-6">
        <h1 className="font-display text-3xl mb-1">Le Centre International d'Antibes</h1>
        <p className="text-muted-foreground font-semibold">
          Une question, un projet de séjour ? Échangez directement avec notre équipe.
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Antibes, France</span>
          <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> +33 6 04 59 04 20</span>
          <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> direct@cia-france.com</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* WhatsApp */}
        <Card variant="elevated" className="flex flex-col">
          <CardHeader>
            <div className="h-12 w-12 rounded-2xl bg-[#25D366]/15 flex items-center justify-center mb-2">
              <MessageCircle className="h-6 w-6 text-[#25D366]" />
            </div>
            <CardTitle>Discuter sur WhatsApp</CardTitle>
            <CardDescription>
              La réponse la plus rapide. Échangez en direct avec notre équipe.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button asChild className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-none">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Ouvrir WhatsApp
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Vous serez redirigé vers WhatsApp.
            </p>
          </CardContent>
        </Card>

        {/* Direct message */}
        <Card variant="elevated" className="flex flex-col">
          <CardHeader>
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Envoyer un message</CardTitle>
            <CardDescription>
              Le Centre vous recontactera par email ou par téléphone.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="subject">Sujet</Label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                maxLength={150}
                placeholder="Ex : Information sur les séjours linguistiques"
                disabled={sending || !user}
              />
              {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={4000}
                rows={6}
                placeholder="Décrivez votre demande…"
                disabled={sending || !user}
                className="rounded-xl"
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              <p className="text-xs text-muted-foreground">
                Vos coordonnées (email et téléphone si renseigné) seront jointes automatiquement.
              </p>
            </div>
            <Button onClick={handleSend} disabled={sending || !user} className="w-full">
              {sending ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer le message
                </>
              )}
            </Button>
            {!user && (
              <p className="text-xs text-destructive text-center">
                Connectez-vous pour envoyer un message.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}