"use client";
import { Step } from "@/components/common/Steps";
import { Controller, useForm } from "react-hook-form";
import { AddressForm } from "../../forms/AddressForm";
import InputText from "@/components/common/InputText";
import ButtonMain from "@/components/common/ButtonMain";
import { ArrowRightIcon } from "lucide-react";
import { applyCnpjMask } from "@/utils/helpers/masks/document";
import { formatAllPhone, formatPhone } from "@/utils/helpers/masks/phone";

export function CompanyForm() {
  const { handleSubmit, control, setValue, register } = useForm({});

  return (
    <>
      <div className="max-w-7xl mx-auto mt-44">
        <div className="flex flex-row gap-x-5">
          <div className="bg-gray-50 p-6 rounded-xl w-1/2 ">
            <Step.ModelTwo id={1} />
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
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, ...rest } }) => (
                      <InputText
                        label="razão social"
                        onChange={onChange}
                        {...rest}
                        placeholder="minha empresa"
                      />
                    )}
                  />
                </div>
                <div className="sm:col-span-3">
                  <Controller
                    control={control}
                    name="document_number"
                    render={({ field: { onChange, ...rest } }) => (
                      <InputText
                        label="cnpj"
                        onChange={(e) => {
                          onChange(applyCnpjMask(e.target.value));
                        }}
                        placeholder="00.000.000/0001-00"
                        maxLength={18}
                        {...rest}
                      />
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
                        onChange={(e) => {
                          onChange(formatAllPhone(e.target.value));
                        }}
                        {...rest}
                        placeholder="(00) 0 0000-0000"
                        maxLength={15}
                      />
                    )}
                  />
                </div>
                <div className="sm:col-span-3 mb-5">
                  <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, ...rest } }) => (
                      <InputText
                        label="email"
                        type="email"
                        onChange={onChange}
                        {...rest}
                        placeholder="email@email.com.br"
                      />
                    )}
                  />
                </div>
                <AddressForm control={control} setValue={setValue} />
              </div>
              <div className="mt-12 justify-end items-center flex w-full">
                <div className="w-[18%]">
                  <ButtonMain className="text-sm pr-2" variant={"default"}>
                    próximo <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </ButtonMain>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
