import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    // Tags components with data-lov-* attributes in dev so Lovable can
    // render the visual preview / inline-edit overlay. No-op in production.
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    // Manual vendor chunks keep the per-route lazy chunks small and let
    // long-term caching work properly when only app code changes.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react-router-dom") ||
              id.includes("/react-dom/") ||
              id.includes("/react/")
            ) {
              return "react-vendor";
            }
            if (
              id.includes("@tanstack/react-query") ||
              id.includes("@supabase") ||
              id.includes("react-hook-form") ||
              id.includes("@hookform") ||
              id.includes("zod")
            ) {
              return "data-vendor";
            }
            if (
              id.includes("framer-motion") ||
              id.includes("lottie-react") ||
              id.includes("canvas-confetti")
            ) {
              return "motion-vendor";
            }
            if (
              id.includes("i18next") ||
              id.includes("date-fns")
            ) {
              return "i18n-vendor";
            }
            if (id.includes("@radix-ui")) {
              return "radix-vendor";
            }
          }
          // Pedagogical content (17 module files + course-content.ts) is
          // eagerly pulled in by useDailyChallenge via the Header.
          // Split into its own chunk so the main bundle stays lean.
          // Sprint 4 will migrate these to Supabase and drop the chunk.
          if (
            id.includes("/src/data/") &&
            (id.includes("-content") ||
              id.includes("curriculum") ||
              id.includes("course-content"))
          ) {
            return "pedago-content";
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
}));
