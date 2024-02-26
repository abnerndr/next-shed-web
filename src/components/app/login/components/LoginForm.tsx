"use client";

import { ButtonLoading } from "@/components/common/ButtonLoading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/context/AuthContext";
import { useCallback, useContext } from "react";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  email: string;
};

export default function LoginForm() {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col px- mt-auto justify-center text-center">
          <div className="pb-2">
            <h3 className="font-bold text-3xl text-black">Acesse sua conta</h3>
            <p className="text-gray-500 text-sm text-center pt-3 pb-6">
              Use o e-mail cadastrado para receber o token de acesso
            </p>
          </div>
          <div className="w-full">
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, ...rest } }) => (
                <Input
                  className="bg-gray-50"
                  inputMode="email"
                  type="email"
                  placeholder="name@example.com"
                  onChange={onChange}
                  {...rest}
                />
              )}
            />
          </div>
          <div className="pb-5 pt-2 ">
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
            Ao clicar em entrar, você concorda com nossos Termos de Serviço e
            Política de Privacidade.
          </p>
        </div>
      </form>
    </>
  );
}
