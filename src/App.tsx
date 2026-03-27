import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import { AppLayout } from "@/components/layout/AppLayout";
import { AdminLayout } from "@/components/layout/AdminLayout";
import Index from "./pages/Index";
import Catalogue from "./pages/Catalogue";
import Curriculum from "./pages/Curriculum";
import Glossaire from "./pages/Glossaire";
import Connexion from "./pages/Connexion";
import CourseDetail from "./pages/CourseDetail";
import TestNiveau from "./pages/TestNiveau";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminSubscriptions from "./pages/admin/AdminSubscriptions";
import AdminSettings from "./pages/admin/AdminSettings";
import NotFound from "./pages/NotFound";
import { SplashScreen } from "./components/SplashScreen";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const hideSplash = useCallback(() => setShowSplash(false), []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {showSplash && <SplashScreen onFinish={hideSplash} />}
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Front-office */}
            <Route element={<AppLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/programme" element={<Curriculum />} />
              <Route path="/glossaire" element={<Glossaire />} />
              <Route path="/cours/:id" element={<CourseDetail />} />
              <Route path="/test-niveau" element={<TestNiveau />} />
              <Route path="/connexion" element={<Connexion />} />
              <Route path="/favoris" element={<Catalogue />} />
            </Route>

            {/* Back-office admin */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="utilisateurs" element={<AdminUsers />} />
              <Route path="cours" element={<AdminCourses />} />
              <Route path="analytics" element={<AdminAnalytics />} />
              <Route path="abonnements" element={<AdminSubscriptions />} />
              <Route path="parametres" element={<AdminSettings />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
