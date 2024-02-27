import { ThemeProvider } from "@/components/common/ThemeProvider";
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
          {children}
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
