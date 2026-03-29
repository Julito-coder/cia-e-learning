

## Plan : Voix naturelle avec ElevenLabs TTS

### Objectif
Remplacer la synthèse vocale robotique du navigateur (Web Speech API) par ElevenLabs TTS pour obtenir une voix française ultra-réaliste dans les cours audio.

### Étapes

#### 1. Connecter ElevenLabs au projet
Utiliser le connecteur ElevenLabs pour lier une clé API au projet (secret `ELEVENLABS_API_KEY`).

#### 2. Créer une edge function `elevenlabs-tts`
**Fichier : `supabase/functions/elevenlabs-tts/index.ts`**
- Reçoit `{ text: string }` du client
- Appelle l'API ElevenLabs TTS avec le modèle `eleven_multilingual_v2` et une voix française (ex: Laura `FGY2WhTYpPnrIDTdsKH5` ou une autre voix FR naturelle)
- Paramètres vocaux optimisés pour l'apprentissage : `rate: 0.9`, `stability: 0.6`, `similarity_boost: 0.75`
- Retourne l'audio MP3 en binaire

#### 3. Modifier `ListeningStep.tsx`
- Remplacer l'appel `speechSynthesis.speak()` par un `fetch` vers l'edge function `elevenlabs-tts`
- Lire l'audio retourné via `new Audio(URL.createObjectURL(blob))`
- Supprimer tout le code lié à `SpeechSynthesis` (getNaturalFrenchVoice, voicesReady, onvoiceschanged)
- Conserver le même UX (bouton play, état playing/hasListened, animation pulse)
- Ajouter un état `loading` pendant la génération audio avec indicateur visuel

### Fichiers modifiés / créés
- `supabase/functions/elevenlabs-tts/index.ts` — nouvelle edge function
- `src/components/course-player/ListeningStep.tsx` — remplacement Web Speech → ElevenLabs

