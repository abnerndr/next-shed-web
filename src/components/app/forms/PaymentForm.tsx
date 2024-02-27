import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import InputText from "@/components/common/InputText";
import { Controller, useForm } from "react-hook-form";
import { applyCreditCardMask } from "@/utils/helpers/masks/cardcredit";
import { applyCpfMask } from "@/utils/helpers/masks/document";
import Visa from "@/assets/images/visa.png"
import Master from "@/assets/images/master.png"
import PayPal from "@/assets/images/paypal.png"
import ButtonMain from "@/components/common/ButtonMain";
import Image from "next/image";
import DynamicSelect from "@/components/common/SelectForm";

export default function PaymentForm() {
  const { handleSubmit, control } = useForm({});

  const handleFormSubmit = (data: any) => {

    console.log(data);
  }

  const mouth = [
    { value: "janeiro", label: "janeiro" },
    { value: "fevereiro", label: "fevereiro" },
    { value: "março", label: "março" },
    { value: "abril", label: "abril" },
    { value: "maio", label: "maio" },
    { value: "junho", label: "junho" },
    { value: "julho", label: "julho" },
    { value: "agosto", label: "agosto" },
    { value: "setembro", label: "setembro" },
    { value: "outubro", label: "outubro" },
    { value: "novembro", label: "novembro" },
    { value: "dezembro", label: "dezembro" },
  ];

  const year = [
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
    { value: "2027", label: "2027" },
    { value: "2028", label: "2028" },
    { value: "2029", label: "2029" },
    { value: "2030", label: "2030" },
    { value: "2031", label: "2031" },
    { value: "2032", label: "2032" },
    { value: "2033", label: "2033" },
    { value: "2034", label: "2034" },
    { value: "2035", label: "2035" },
  ];

  return (
    <Card className="w-[340px] pt-6">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <CardHeader>
          <CardTitle>Pagamento</CardTitle>
          <CardDescription>Adicione uma nova forma de pagamento à sua conta.</CardDescription>
          <div className="flex grid-cols-2 gap-3 pt-2">
            <ButtonMain className="border-2 w-32 h-20" variant={"outline"} size={"icon"}>
              <Image src={Visa} alt={"VISA"} width={38} height={12} />
            </ButtonMain>
            <ButtonMain className="border-2 w-32 h-20" variant={"outline"} size={"icon"}>
              <Image src={Master} alt={"MASTER"} width={38} height={12} />
            </ButtonMain>
            <ButtonMain className="border-2 w-32 h-20" variant={"outline"} size={"icon"} disabled>
              <Image src={PayPal} alt={"PAYPAL"} width={28} height={12} />
            </ButtonMain>
          </div>
        </CardHeader>
        <CardContent>
          <div className="pt-2">
            <div className="sm:col-span-3">
              <Controller
                control={control}
                name="full_name"
                render={({ field: { onChange, ...rest } }) => (
                  <InputText
                    label="nome do titular"
                    onChange={onChange}
                    {...rest}
                    placeholder="joão alves"
                  />
                )}
              />
            </div>
            <div className="sm:col-span-3 pt-2">
              <Controller
                control={control}
                name="card_number"
                render={({ field: { onChange, ...rest } }) => (
                  <InputText
                    label="número do cartão"
                    onChange={(e) => { onChange(applyCreditCardMask(e.target.value)) }}
                    {...rest}
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                  />
                )}
              />
            </div>
            <div className="pt-1">
              <div className="flex flex-nowrap w-full items-center gap-2">
                <div className="flex flex-col space-y-1 pt-2">
                  <label className="text-xs font-semibold ">mês</label>
                  <DynamicSelect options={mouth} placeholder="selecione o mês" />
                </div>
                <div className="flex flex-nowrap w-full items-center gap-2">
                  <div className="flex flex-col space-y-1 pt-2">
                    <label className="text-xs font-semibold ">ano</label>
                    <DynamicSelect options={year} placeholder="selecione o ano" />
                  </div>
                </div>
                <div className="flex flex-nowrap items-center ">
                  <div className="flex flex-col space-y-1 pt-2 ">
                    <Controller
                      control={control}
                      name="cvv"
                      render={({ field: { onChange, ...rest } }) => (
                        <InputText
                          label="cvv"
                          onChange={onChange}
                          {...rest}
                          placeholder="000"
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-1">
          <Button type="submit" className="w-full bg-gray-950 text-gray-50">validar pagamento</Button>
        </CardFooter>
      </form>
    </Card>
  );
}