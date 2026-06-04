import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./i18n";
import "./index.css";

const PREVIEW_RECOVERY_KEY = "__cia_preview_recovery__";
const chunkLoadErrorPatterns = [
  /Failed to fetch dynamically imported module/i,
  /Importing a module script failed/i,
  /error loading dynamically imported module/i,
  /Loading chunk [\w-]+ failed/i,
  /Unable to preload CSS/i,
];

const getErrorMessage = (value: unknown) => {
  if (typeof value === "string") return value;
  if (value instanceof Error) return value.message;
  if (value && typeof value === "object" && "message" in value) {
    const message = (value as { message?: unknown }).message;
    return typeof message === "string" ? message : "";
  }
  return "";
};

const isRecoverablePreviewError = (value: unknown) =>
  chunkLoadErrorPatterns.some((pattern) => pattern.test(getErrorMessage(value)));

const recoverPreview = (reason: string) => {
  try {
    if (window.sessionStorage.getItem(PREVIEW_RECOVERY_KEY) === reason) return;
    window.sessionStorage.setItem(PREVIEW_RECOVERY_KEY, reason);
  } catch {
    // Ignore sessionStorage access issues and still try a hard refresh.
  }

  window.location.reload();
};

window.addEventListener("vite:preloadError", (event) => {
  event.preventDefault();
  recoverPreview("vite:preloadError");
});

window.addEventListener(
  "error",
  (event) => {
    if (!isRecoverablePreviewError(event.error ?? event.message)) return;
    event.preventDefault();
    recoverPreview("window:error");
  },
  true,
);

window.addEventListener("unhandledrejection", (event) => {
  if (!isRecoverablePreviewError(event.reason)) return;
  event.preventDefault();
  recoverPreview("unhandledrejection");
});

createRoot(document.getElementById("root")!).render(<App />);

window.requestAnimationFrame(() => {
  try {
    window.sessionStorage.removeItem(PREVIEW_RECOVERY_KEY);
  } catch {
    // Ignore sessionStorage access issues.
  }
});
