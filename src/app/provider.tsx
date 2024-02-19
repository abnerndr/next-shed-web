import { ThemeProvider } from "@/components/common/ThemeProvider";
import AuthProvider from "@/context/AuthContext";
import { ToastProvider } from "@radix-ui/react-toast";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider swipeDirection="up" />
          {children}
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
