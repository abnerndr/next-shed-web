import { AppMain } from "@/components/app/PageMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acesso a plataforma - SHCD",
};

export default function Home() {
  return (
    <>
      {/* <ModeToggle /> */}
      <AppMain />
    </>
  );
}
