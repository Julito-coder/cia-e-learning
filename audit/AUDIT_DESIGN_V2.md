# CIA E-Learning — Audit Design v2

**Date** : 2026-06-03
**Branche auditée** : `main` (HEAD = `838c851`, Sprint 3 mergé via PR #16)
**Auditeur** : Claude (READ ONLY)

---

## ⛔ Étape 0 — ÉCHEC. Audit interrompu.

Le brief impose que `/design-reference/` contienne la **charte v2 (mai 2026)** et les **5 Lottie Spark à jour**. **Les deux conditions sont fausses sur `main`.** L'audit complet ne peut pas démarrer tant que la source de vérité n'est pas synchronisée.

### Constat 1 — Charte v2 absente de `/design-reference/`

```
$ ls design-reference/
lottie
```

Aucun fichier `CIA_Design_System.html` (ni `.md`, ni `.pdf`) n'est présent à la racine de `/design-reference/`. Or :

- Le **README.md** du repo (l.78-79) déclare explicitement :
  > « Sources de vérité dans `/design-reference/` :
  > - `CIA_Design_System.html` — charte v2 navigable »
- La charte v2 est donc **promise mais non livrée** dans le dossier de référence.

Une **représentation textuelle** de la charte est présente ailleurs dans le repo : `mem/style/design-direction.md` (1 page, 60 lignes, frontmatter « Charte CIA refondue Mai 2026 », palette HSL, 7 gradients, règles d'or-sur-or, animations Spark). Ce fichier est cohérent avec la spec attendue mais **n'est pas le HTML navigable** mentionné comme source officielle. À arbitrer par Jules : suffit-il, ou faut-il vraiment livrer le HTML ?

### Constat 2 — JSON Lottie Spark obsolètes vs spec charte v2

Les 5 JSON présents dans `/design-reference/lottie/` et `/src/assets/lottie/spark/` ont été extraits du ZIP livré au Sprint 3.

| Spec attendue (charte v2) | Spec réelle (mesure sur `spark-idle.json`) | OK / KO |
|---|---|---|
| viewBox **200 × 320** | **360 × 540** (ratio 2:3, pas 5:8) | ❌ |
| **60 fps** | 60 fps | ✅ |
| **5 couches** par animation | **4 layers** | ❌ |
| 5 fichiers (idle / talking / encouraging / celebrating / sad) | 5 fichiers présents, noms conformes | ✅ |

Les 5 fichiers font 5.8–6.4 KB chacun, ip/op 0/180 (3 s à 60 fps).

→ Les Lottie actuels respectent la nomenclature mais **pas les dimensions ni la profondeur de couches** prescrites par la charte v2. Le code Spark refactoré au Sprint 3 (`src/components/spark/Spark.tsx`) les charge correctement, mais l'écart de viewBox + le nombre réduit de couches signifient probablement que l'animation **n'est pas le rendu fidèle à la charte mai 2026** — c'est un rendu antérieur (ou intermédiaire).

---

## 🛑 Conséquence — STOP audit

Conformément au brief :

> « **Si l'un de ces points est faux ou si les fichiers semblent obsolètes → STOP. N'audite pas. Signale à Jules que `/design-reference/` doit être synchronisé avec la charte v2 + les nouveaux JSON avant de continuer.** »

Aucun audit des axes A (Spark), B (Gradients), C (Design global), D (a11y) n'est produit ici. Auditer maintenant produirait un backlog construit sur une référence partielle / obsolète, qui devra être refait au prochain envoi.

---

## ✅ Ce dont j'ai besoin pour reprendre

### Option 1 (canonique, recommandée)
- Pousser sur `main` (ou sur la branche d'audit) le fichier `/design-reference/CIA_Design_System.html` à jour (charte v2 mai 2026, navigable).
- Remplacer les 5 JSON `/design-reference/lottie/spark-*.json` + `/src/assets/lottie/spark/spark-*.json` par les versions **viewBox 200×320, 5 couches**.

### Option 2 (rapide, si pas de regen HTML possible)
- Acter `mem/style/design-direction.md` comme charte de référence canonique pour cet audit et **dire-le explicitement** (sinon je risque de me tromper sur ce qui fait foi).
- Mais regénérer quand même les Lottie (viewBox + 5 couches) — ce point est non-négociable car ils sont effectivement utilisés en runtime.

### Option 3 (si la charte v2 a évolué depuis mai 2026)
- Me redonner la charte cible mise à jour. Le brief s'appuie sur des points précis (viewBox 200×320, 5 couches, halo `g-spark`, mini SVG sous 48px sans bouche, mapping mood par écran, etc.) — si l'un d'eux a changé, l'audit doit s'aligner sur la nouvelle cible.

---

## 📋 Ce qui sera audité dès que la source est OK

Pour mémoire, voici la cartographie qui sera produite à la reprise :

- **Axe A — Spark** : câblage des 5 moods, tailles canoniques (40/80/120/200-280), version mini SVG sous 48px, halo `g-spark`, braises bleu clair (jamais dorées), speech bubble, fallback `prefers-reduced-motion`, mapping mood par écran clé.
- **Axe B — Gradients** : présence des 7 gradients en `tailwind.config.ts`, usage conforme par section (sun → XP, sea → cours, dawn → pricing, sunset → témoignages, spark → halo Spark, shine → mots-clés hero, mistral → fonds doux), chasse aux interdits (gradient flou en hero, spark mid en aplat plein écran, gold en aplat solide).
- **Axe C — Design global** : 5 principes (fond blanc, Spark omniprésent, 1 seul CTA majeur, radius 24–32px, springs), boutons signature 3D, cards radius 24/32, typo + `tabular-nums`, gamification (6 paliers StreakFlame, 4 états ModuleNode, hexagones CECR, confettis bleus), 7 pages clés vs §13.
- **Axe D — A11y** : contrastes WCAG AA, focus visible, touch ≥44px, `prefers-reduced-motion` + `prefers-color-scheme`, alt texts, `aria-hidden` sur déco.

Le backlog P0/P1/P2 + scorecard /5 par axe seront ajoutés à ce fichier dès la reprise.

---

## ❓ À arbitrer (en attendant ta réponse)

1. `mem/style/design-direction.md` fait-il foi pour cet audit, oui ou non ?
2. Si oui, accepte-t-on de produire l'audit **sans regen** des Lottie (en notant l'écart viewBox/5-couches comme « dette charte » à traiter à part) ?
3. Sinon, quand prévoit-on la livraison du HTML charte + des Lottie v2 ?
