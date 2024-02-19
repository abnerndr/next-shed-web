"use client";
import { ReactNode } from "react";
import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { ThemeProvider } from "./common/ThemeProvider";
import { usePathname } from "next/navigation";
import { checkIsPublicRoute } from "@/utils/functions/check-route";
import PrivateRouteProvider from "./provider/PrivateRouteProvider";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ToastProvider } from "@radix-ui/react-toast";
import Provider from "@/app/provider";

interface ILayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

function Layout({ children }: ILayout) {
  const pathname = usePathname();
  const isPublic = checkIsPublicRoute(pathname);
  return (
    <>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Provider>
            {isPublic && children}
            {!isPublic && (
              <PrivateRouteProvider>{children}</PrivateRouteProvider>
            )}
          </Provider>
        </body>
      </html>
    </>
  );
}

export default Layout;
