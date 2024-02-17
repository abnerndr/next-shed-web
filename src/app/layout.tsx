import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Layout from "@/components/Layout";
import Provider from "./provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Layout>
          <Provider>{children}</Provider>
        </Layout>
      </body>
    </html>
  );
}
