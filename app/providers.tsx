"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "sonner";

function AppToaster() {
  const { theme } = useTheme();
  return (
    <Toaster 
      theme={(theme as "light" | "dark" | "system") || "system"} 
      position="top-center" 
      toastOptions={{
        className: "bg-white border-gray-200 text-black dark:bg-[#18181b] dark:border-[#27272a] dark:text-zinc-100"
      }}
    />
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
      <AppToaster />
    </ThemeProvider>
  );
}
