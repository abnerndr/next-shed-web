"use client";
import { Step } from "@/components/common/Steps";
import { StepOptionsProps } from "@/components/common/Steps/steps.types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { AddressForm } from "../../forms/AddressForm";

export function CompanyForm() {
  const { handleSubmit, register } = useForm({});

  const steps: StepOptionsProps[] = [
    {
      name: "Crie sua empresa",
      description: "passo 1 - selecione as opções da empresa",
      href: "/subscription",
      status: "current",
    },
    {
      name: "Crie seu administrador",
      description: "passo 2 - crie o seu usuário adiminstrador",
      href: "/subscription/step1",
      status: "upcoming",
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
          <div className="bg-gray-50 p-6 rounded-xl w-full">
            <h3 className="text-md font-bold text-zinc-800">
              Cadastre a sua empresa
            </h3>
            <p className="text-sm text-zinc-500">
              realize a baixo o cadastro completo da empresa para que possamos
              continuar
            </p>
            <form>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Label htmlFor="name">razão social</Label>
                  <Input {...register("name")} />
                </div>
                <div className="sm:col-span-3">
                  <Label htmlFor="document_number">cnpj</Label>
                  <Input {...register("document_number")} />
                </div>
                {/*  */}
                <div className="sm:col-span-3">
                  <Label htmlFor="phone">telefone/celular</Label>
                  <Input {...register("phone")} />
                </div>
                <div className="sm:col-span-3 mb-5">
                  <Label htmlFor="email">e-mail</Label>
                  <Input {...register("email")} />
                </div>
                <AddressForm register={register} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
