-- 1. Supprime la policy SELECT trop large qui exposait les PII des autres profils
DROP POLICY IF EXISTS "Authenticated can view active profiles" ON public.profiles;

-- 2. Restreint les UPDATE au seul propriétaire ET aux colonnes non-gameplay via GRANT
REVOKE UPDATE ON public.profiles FROM authenticated;
GRANT UPDATE (
  first_name,
  last_name,
  avatar_url,
  interface_language,
  phone,
  nationality,
  is_cia_student
) ON public.profiles TO authenticated;