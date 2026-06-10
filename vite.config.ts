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
    // No manual vendor chunking. A custom manualChunks split previously caused
    // React-dependent libraries (Radix, React Query, React Hook Form, framer-motion,
    // etc.) to load in a separate chunk before the React runtime was fully
    // initialised, producing production-only "createContext of undefined" /
    // "forwardRef of undefined" crashes. Letting Rollup compute the chunk
    // graph automatically guarantees correct module ordering.
    chunkSizeWarningLimit: 1200,
  },
}));
