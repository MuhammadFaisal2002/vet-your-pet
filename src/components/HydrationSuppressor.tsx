"use client";

import { useEffect } from "react";

export default function HydrationSuppressor() {
  useEffect(() => {
    // Suppress hydration warnings caused by browser extensions
    // injecting elements into the DOM before React hydrates
    const originalError = console.error;
    console.error = (...args: unknown[]) => {
      if (
        typeof args[0] === "string" &&
        (args[0].includes("Hydration failed") ||
          args[0].includes("did not expect server HTML") ||
          args[0].includes("Did not expect server HTML"))
      ) {
        return;
      }
      originalError.apply(console, args);
    };
    return () => {
      console.error = originalError;
    };
  }, []);

  return null;
}
