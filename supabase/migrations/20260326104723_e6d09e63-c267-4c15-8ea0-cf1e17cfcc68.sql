
-- ============================
-- CIA E-LEARNING DATABASE SCHEMA
-- ============================

-- 1. Role enum and user_roles table (separate from profiles per security best practices)
CREATE TYPE public.app_role AS ENUM ('admin', 'manager', 'learner');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'learner',
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can view their own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all roles" ON public.user_roles
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage roles" ON public.user_roles
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- 2. Profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  nationality TEXT,
  cecr_level TEXT DEFAULT 'A1' CHECK (cecr_level IN ('A1','A2','B1','B2','C1','C2')),
  interface_language TEXT DEFAULT 'fr' CHECK (interface_language IN ('fr','en','es','de','it','ru')),
  avatar_url TEXT,
  is_cia_student BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage all profiles" ON public.profiles
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- 3. Courses table
CREATE TABLE public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  level TEXT NOT NULL CHECK (level IN ('A1','A2','B1','B2','C1','C2')),
  theme TEXT NOT NULL CHECK (theme IN ('Grammaire','Vocabulaire','Culture & Civilisation','Expression orale','Compréhension écrite','Compréhension orale')),
  duration_minutes INTEGER DEFAULT 0,
  image_url TEXT,
  is_published BOOLEAN DEFAULT false,
  is_free BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published courses are viewable by everyone" ON public.courses
  FOR SELECT USING (is_published = true);
CREATE POLICY "Admins can manage all courses" ON public.courses
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- 4. Course sections (ordered content blocks within a course)
CREATE TABLE public.course_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('text','audio','video','qcm','drag-drop','fill-blank','flashcard','voice','image')),
  content JSONB NOT NULL DEFAULT '{}',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.course_sections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Sections viewable with published courses" ON public.course_sections
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.courses WHERE id = course_id AND is_published = true)
  );
CREATE POLICY "Admins can manage sections" ON public.course_sections
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- 5. User progress
CREATE TABLE public.user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL,
  section_id UUID REFERENCES public.course_sections(id) ON DELETE SET NULL,
  progress_pct INTEGER DEFAULT 0 CHECK (progress_pct >= 0 AND progress_pct <= 100),
  score INTEGER CHECK (score >= 0 AND score <= 100),
  completed_at TIMESTAMPTZ,
  last_accessed_at TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, course_id)
);
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own progress" ON public.user_progress
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their own progress" ON public.user_progress
  FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all progress" ON public.user_progress
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

-- 6. User favorites
CREATE TABLE public.user_favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, course_id)
);
ALTER TABLE public.user_favorites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own favorites" ON public.user_favorites
  FOR ALL USING (auth.uid() = user_id);

-- 7. Glossary terms
CREATE TABLE public.glossary_terms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  term TEXT NOT NULL,
  definition TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('A1','A2','B1','B2','C1','C2')),
  related_course_ids UUID[] DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.glossary_terms ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Glossary terms are viewable by authenticated users" ON public.glossary_terms
  FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can manage glossary" ON public.glossary_terms
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- 8. Subscriptions
CREATE TABLE public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  plan TEXT NOT NULL CHECK (plan IN ('free','premium','school')),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','expired','cancelled')),
  starts_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ,
  promo_code TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own subscription" ON public.subscriptions
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage all subscriptions" ON public.subscriptions
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- 9. Timestamp update trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Apply timestamp triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON public.courses FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_course_sections_updated_at BEFORE UPDATE ON public.course_sections FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_user_progress_updated_at BEFORE UPDATE ON public.user_progress FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_glossary_terms_updated_at BEFORE UPDATE ON public.glossary_terms FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON public.subscriptions FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 10. Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', '')
  );
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'learner');
  INSERT INTO public.subscriptions (user_id, plan, status) VALUES (NEW.id, 'free', 'active');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 11. Indexes for performance
CREATE INDEX idx_courses_level ON public.courses(level);
CREATE INDEX idx_courses_theme ON public.courses(theme);
CREATE INDEX idx_courses_published ON public.courses(is_published);
CREATE INDEX idx_user_progress_user ON public.user_progress(user_id);
CREATE INDEX idx_user_progress_course ON public.user_progress(course_id);
CREATE INDEX idx_profiles_user ON public.profiles(user_id);
CREATE INDEX idx_glossary_level ON public.glossary_terms(level);

-- 12. Storage bucket for course media
INSERT INTO storage.buckets (id, name, public) VALUES ('course-media', 'course-media', true);

CREATE POLICY "Course media is publicly accessible" ON storage.objects
  FOR SELECT USING (bucket_id = 'course-media');
CREATE POLICY "Admins can upload course media" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'course-media' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update course media" ON storage.objects
  FOR UPDATE USING (bucket_id = 'course-media' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete course media" ON storage.objects
  FOR DELETE USING (bucket_id = 'course-media' AND public.has_role(auth.uid(), 'admin'));
