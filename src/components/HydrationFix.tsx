"use client";

import { useEffect } from "react";

/**
 * Suppresses hydration mismatch errors caused by browser extensions
 * (Grammarly, LastPass, ad blockers, etc.) that inject DOM elements
 * before React can hydrate the page.
 */
export default function HydrationFix() {
  useEffect(() => {
    // Suppress Next.js dev overlay for hydration errors
    // by patching the error overlay's __NEXT_DATA__ error handler
    const handler = (event: ErrorEvent) => {
      if (
        event.message?.includes("Hydration") ||
        event.message?.includes("hydrat") ||
        event.message?.includes("did not expect") ||
        event.message?.includes("Did not expect")
      ) {
        event.stopImmediatePropagation();
        return false;
      }
    };
    window.addEventListener("error", handler, true);

    // Also patch unhandled rejection (React 18 throws as promise)
    const rejectionHandler = (event: PromiseRejectionEvent) => {
      const msg = String(event.reason?.message || event.reason || "");
      if (
        msg.includes("Hydration") ||
        msg.includes("hydrat") ||
        msg.includes("did not expect") ||
        msg.includes("Did not expect")
      ) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
    };
    window.addEventListener("unhandledrejection", rejectionHandler, true);

    return () => {
      window.removeEventListener("error", handler, true);
      window.removeEventListener("unhandledrejection", rejectionHandler, true);
    };
  }, []);

  return null;
}
