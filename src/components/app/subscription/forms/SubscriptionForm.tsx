import { Step } from "@/components/common/Steps";
import { StepOptionsProps } from "@/components/common/Steps/steps.types";
import PlanPrice from "../../forms/PlanPrice";
import PaymentForm from "../../forms/PaymentForm";
import { AddressForm } from "../../forms/AddressForm";
import InputText from "@/components/common/InputText";
import { Controller } from "react-hook-form";

export function SubscriptionForm() {
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
      status: "complete",
    },
    {
      name: "Selecione sua assinature",
      description: "passo 3 - selecione as opções de sua assinatura",
      href: "/subscription/step2",
      status: "complete",
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
          <div className="bg-gray-50 p-6 rounded-xl w-full">
            <h3 className="text-md font-bold text-zinc-800">
            Selecione sua assinature"
            </h3>
            <p className="text-sm text-zinc-500">
            Selecione as opções de sua assinatura e faça o pagamento do plano 
            </p>
            <form>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                <div className="sm:col-span-3 mb-5">
                  <PaymentForm />
                </div>
                <div className="sm:col-span-3 mb-5">
                  <PlanPrice/>
                </div>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
