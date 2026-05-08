import { useState, useRef } from 'react';
import { Camera } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

interface AvatarUploadProps {
  currentUrl?: string | null;
  onUploaded: (url: string) => void;
  size?: number;
}

export function AvatarUpload({ currentUrl, onUploaded, size = 80 }: AvatarUploadProps) {
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const cropAndCompress = (file: File): Promise<Blob> =>
    new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        const side = Math.min(img.width, img.height);
        const canvas = document.createElement('canvas');
        const TARGET = 512;
        canvas.width = TARGET;
        canvas.height = TARGET;
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject(new Error('canvas'));
        const sx = (img.width  - side) / 2;
        const sy = (img.height - side) / 2;
        ctx.drawImage(img, sx, sy, side, side, 0, 0, TARGET, TARGET);
        canvas.toBlob((b) => b ? resolve(b) : reject(new Error('blob')), 'image/jpeg', 0.85);
      };
      img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('load')); };
      img.src = url;
    });

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Veuillez sélectionner une image');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error("L'image ne doit pas dépasser 10 Mo");
      return;
    }

    setUploading(true);

    let blob: Blob;
    try {
      blob = await cropAndCompress(file);
    } catch {
      toast.error("Image illisible");
      setUploading(false);
      return;
    }

    setPreview(URL.createObjectURL(blob));
    const path = `${user.id}/avatar-${Date.now()}.jpg`;

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(path, blob, { upsert: true, contentType: 'image/jpeg' });

    if (uploadError) {
      toast.error("Erreur lors de l'upload");
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(path);
    await supabase.from('profiles').update({ avatar_url: publicUrl }).eq('user_id', user.id);

    // Best-effort cleanup of old avatar files
    try {
      const { data: list } = await supabase.storage.from('avatars').list(user.id);
      const stale = (list ?? [])
        .map((o) => `${user.id}/${o.name}`)
        .filter((p) => p !== path);
      if (stale.length) await supabase.storage.from('avatars').remove(stale);
    } catch { /* noop */ }

    onUploaded(publicUrl);
    toast.success('Photo de profil mise à jour !');
    setUploading(false);
    if (e.target) e.target.value = '';
  };

  const displayUrl = preview || currentUrl;

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      className="relative group rounded-full overflow-hidden border-2 border-border hover:border-primary transition-colors"
      style={{ width: size, height: size }}
      disabled={uploading}
    >
      {displayUrl ? (
        <img src={displayUrl} alt="Avatar" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-2xl font-bold">
          {user?.email?.[0]?.toUpperCase() || '?'}
        </div>
      )}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <Camera className="h-5 w-5 text-white" />
      </div>
      {uploading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <input ref={inputRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" />
    </button>
  );
}
