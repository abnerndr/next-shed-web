import { Poppins as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Layout from "@/components/Layout";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "100",
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
