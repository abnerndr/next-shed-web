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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Logo from "@/assets/images/logo-svg.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard } from "lucide-react";
import { FaPix } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import InputText from "@/components/common/InputText";
import { Controller, useForm } from "react-hook-form";
import { applyCreditCardMask } from "@/utils/helpers/masks/cardcredit";
import { applyCpfMask } from "@/utils/helpers/masks/document";

export default function PaymentForm() {
  const { handleSubmit, control, setValue, register } = useForm({});
  return (
    <>
      <Card className="w-[350px] pt-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            src={Logo.src}
            alt={"SCHD"}
            width={120}
            height={90}
            className="pt-4 ml-28"
          />
        </div>
        <CardHeader>
          <CardTitle>Pagamento</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex w-full items-center gap-2 px-14">
            </div>
            <div>
              <Label htmlFor="Expires">plano</Label>
              <Select>
                <SelectTrigger id="Month">
                  <SelectValue placeholder="plano" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">plano basico</SelectItem>
                  <SelectItem value="sveltekit">plano pro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="pt-5">
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
              <div className="sm:col-span-3 pt-4">
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
              <div className="flex flex-col space-y-2 pt-4">
                <div className="sm:col-span-3">
                  <Controller
                    control={control}
                    name="document_number"
                    render={({ field: { onChange, ...rest } }) => (
                      <InputText label="cpf do titular" onChange={(e) => { onChange(applyCpfMask(e.target.value)) }} maxLength={14} {...rest} placeholder="000.000.000-00" />
                    )}
                  />
                </div>
              </div>
              <div className="py-2 ">
                <div className="flex flex-nowrap w-full items-center gap-2">
                  <div>
                    <Label htmlFor="Expires">mês</Label>
                    <Select>
                      <SelectTrigger id="Month">
                        <SelectValue placeholder="mês" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Janeiro</SelectItem>
                        <SelectItem value="sveltekit">Feveiro</SelectItem>
                        <SelectItem value="astro">Março</SelectItem>
                        <SelectItem value="nuxt">Abril</SelectItem>
                        <SelectItem value="nuxt">Maio</SelectItem>
                        <SelectItem value="nuxt">Junho</SelectItem>
                        <SelectItem value="nuxt">Julho</SelectItem>
                        <SelectItem value="nuxt">Agosto</SelectItem>
                        <SelectItem value="nuxt">Setembro</SelectItem>
                        <SelectItem value="nuxt">Otubro</SelectItem>
                        <SelectItem value="nuxt">Novembro</SelectItem>
                        <SelectItem value="nuxt">Dezembro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="Expires">ano</Label>
                    <Select>
                      <SelectTrigger id="Year">
                        <SelectValue placeholder="ano" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="1989">1989</SelectItem>
                        <SelectItem value="1990">1990</SelectItem>
                        <SelectItem value="1991">1991</SelectItem>
                        <SelectItem value="1992">1992</SelectItem>
                        <SelectItem value="1993">1993</SelectItem>
                        <SelectItem value="1994">1994</SelectItem>
                        <SelectItem value="1995">1995</SelectItem>
                        <SelectItem value="1996">1996</SelectItem>
                        <SelectItem value="1997">1997</SelectItem>
                        <SelectItem value="1998">1998</SelectItem>
                        <SelectItem value="1999">1999</SelectItem>
                        <SelectItem value="2000">2000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="">
                    <Label htmlFor="cvv">cvv</Label>
                    <Input id="cvv" placeholder="cvv" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-full bg-gray-950 text-gray-50">finalizar pagamento</Button>
        </CardFooter>
      </Card>
    </>
  );
}
