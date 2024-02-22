"use client";
import { useCallback, useContext } from "react";
import { ButtonLoading } from "../../common/ButtonLoading";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import Image from "next/image";
import Logo from "@/assets/images/logo-w.svg";
import { Controller, useForm } from "react-hook-form";
import { AuthContext } from "@/context/AuthContext";

type FormValues = {
  email: string;
};

export default function AccessForm() {
  const { SendToken, authIsLoading } = useContext(AuthContext);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormValues>({});

  const onSubmit = useCallback(
    (formData: FormValues) => {
      SendToken({ email: formData.email });
    },
    [SendToken]
  );

  return (
    <>
      <div className="relative h-screen isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="w-full">
              <Image src={Logo.src} alt={"SCHD"} width={120} height={90} />
            </div>
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-zinc-900 ring-1 ring-gray-900/10 lg:w-1/2">
                <div className="py-96 mt-64 p-20">
                  <span className="text-gray-300">
                    “Aqui temos um serviço de agendamento personalisado para
                    você, onde você pode ter todos serviços que vamos
                    disponibilizar o melhores serviço para você a partir do seu
                    gosto.”
                  </span>
                </div>
              </div>
            </div>
          </div>
          <form
            className="pb-24 pt-20 sm:pb-32 lg:px-32 lg:py-48"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="ml-24 w-full max-w-xl lg:mr-0 lg:2-full">
              <div className="flex flex-col px- mt-auto justify-center text-center">
                <div className="pb-2">
                  <h3 className="font-bold text-3xl text-black">
                    Acesse sua conta
                  </h3>
                  <p className="text-gray-500 text-sm text-center py-10">
                    Use o e-mail cadastrado para receber o token de acesso
                  </p>
                </div>
                <div className="w-full pb-2 ">
                  <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, ...rest } }) => (
                      <Input
                        className="bg-gray-50"
                        type="email"
                        placeholder="name@example.com"
                        onChange={onChange}
                        {...rest}
                      />
                    )}
                  />
                </div>
                <div className="py-5 ">
                  {!authIsLoading ? (
                    <Button
                      className="w-full bg-gray-950 text-gray-50 hover:bg-gray-600"
                      type="submit"
                    >
                      Entrar
                    </Button>
                  ) : (
                    <ButtonLoading />
                  )}
                </div>
                <p className="text-gray-500 text-xs">
                  Ao clicar em entrar, você concorda com nossos Termos de
                  Serviço e Política de Privacidade.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
