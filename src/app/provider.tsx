import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/context/AuthContext";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="ligth"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
