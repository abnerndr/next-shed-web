import { Step } from "@/components/common/Steps";
import { StepOptionsProps } from "@/components/common/Steps/steps.types";

export function UserForm() {
  const steps: StepOptionsProps[] = [
    {
      name: "Crie sua empresa",
      description: "passo 1 - selecione as opções da empresa",
      href: "/subscription",
      status: "complete",
    },
    {
      name: "Crie seu administrador",
      description: "passo 2 - crie o seu usuário adiminstrador",
      href: "/subscription/step1",
      status: "current",
    },
    {
      name: "Selecione sua assinature",
      description: "passo 3 - selecione as opções de sua assinatura",
      href: "/subscription/step2",
      status: "upcoming",
    },
  ];
  return (
    <>
      <div className="max-w-7xl mx-auto mt-44">
        <div className="flex flex-row gap-x-5">
          <div className="bg-gray-50 p-6 rounded-xl">
            <Step.ModelTwo steps={steps} />
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <p>formulário de administrador</p>
          </div>
        </div>
      </div>
    </>
  );
}
