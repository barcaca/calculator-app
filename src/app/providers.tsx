"use client";

// Import necessary components and hooks
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

interface ProviderPros {
  children: ReactNode;
}

// Export the Providers component
export function Providers({ children }: ProviderPros) {
  // Manage client-side readiness state
  const [mounted, setMounted] = useState(false);
  // UseEffect to set mounted to true after component mounts on the client
  useEffect(() => {
    setMounted(true);
  }, []); // Empty dependency array ensures effect runs only once

  // Return null until mounted is true
  if (!mounted) {
    return null;
  }
  return <ThemeProvider>{children}</ThemeProvider>;
}
