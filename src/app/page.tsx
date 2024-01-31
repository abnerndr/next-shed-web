import AcessForm from "@/components/acessform/AcessForm";
import { ModeToggle } from "@/components/common/ModeToggle";
import RegisterForm from "@/components/registerform/RegisterForm";

export default function Home() {
  return (
    <>
      <ModeToggle />
      {/* <AcessForm /> */}
      <RegisterForm/>
    </>
  );
}
