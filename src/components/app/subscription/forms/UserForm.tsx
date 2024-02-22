import { Step } from "@/components/common/Steps";
import { StepOptionsProps } from "@/components/common/Steps/steps.types";
import { AddressForm } from "../../forms/AddressForm";
import InputText from "@/components/common/InputText";
import { Controller, useForm } from "react-hook-form";
import PaymentForm from "../../forms/PaymentForm";
import PlanPrice from "../../forms/PlanPrice";

export function UserForm() {
  const { handleSubmit, control, setValue, register } = useForm({});
  return (
    <>
      <div className="max-w-7xl mx-auto mt-44">
        <div className="flex flex-row gap-x-5">
          <div className="bg-gray-50 p-6 rounded-xl">
            <Step.ModelTwo id={2} />
          </div>
          <div className="bg-gray-50 p-6 rounded-xl w-full">
            <h3 className="text-md font-bold text-zinc-800">
              Cadastre o seu administrador
            </h3>
            <p className="text-sm text-zinc-500">
              realize a baixo o cadastro completo do seu administrador para que possamos
              continuar
            </p>
            <form>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Controller
                    control={control}
                    name="full_name"
                    render={({ field: { onChange, ...rest } }) => (
                      <InputText
                        label="nome completo"
                        onChange={onChange}
                        {...rest}
                      />
                    )}
                  />
                </div>
                <div className="sm:col-span-3">
                  <Controller
                    control={control}
                    name="document_number"
                    render={({ field: { onChange, ...rest } }) => (
                      <InputText label="cpf" onChange={onChange} {...rest} />
                    )}
                  />
                </div>
                {/*  */}
                <div className="sm:col-span-3">
                  <Controller
                    control={control}
                    name="phone"
                    render={({ field: { onChange, ...rest } }) => (
                      <InputText
                        label="telefone/celular"
                        onChange={onChange}
                        {...rest}
                      />
                    )}
                  />
                </div>
                <div className="sm:col-span-3 mb-5">
                  <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, ...rest } }) => (
                      <InputText label="email" onChange={onChange} {...rest} />
                    )}
                  />
                </div>
                <AddressForm control={control} setValue={setValue} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
