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

export default function PaymentForm() {
  return (
    <>
      <Card className="w-[350px]">
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
          <CardTitle> Payment Method</CardTitle>
          <CardDescription>
            Add a new payment method to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-nowrap w-full items-center gap-4 ">
              <div className="flex space-y-1.5 ">
                <Button
                  variant="outline"
                  className="grid grid-rows-2 gap-3 py-8"
                >
                  <CreditCard width={50} height={26} className="-mt-6" />
                  Card
                </Button>
              </div>
              <div className="flex space-y-1.5 ">
                <Button
                  variant="outline"
                  className="grid grid-rows-2 gap-3 py-8 px-8"
                >
                  <FaPix size={16} className="-mt-6 ml-1" />
                  Pix
                </Button>
              </div>
              <div className="flex space-y-1.5 ">
                <Button
                  variant="outline"
                  className="grid grid-rows-2 gap-3 py-8 px-6"
                >
                  <CgNotes size={18} className="-mt-6 ml-4 " />
                  Ticket
                </Button>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="First Last" />
              </div>
              <div className="flex flex-col space-y-2 pt-3">
                <Label htmlFor="Card number">Card number</Label>
                <Input id="Card number" placeholder="Card number" />
              </div>
              <div className="flex flex-col space-y-2 pt-3">
                <Label htmlFor="Document number">Document number</Label>
                <Input id="Document number" placeholder="Document number" />
              </div>
              <div className="py-2 ">
                <div className="flex flex-nowrap w-full items-center gap-2">
                  <div>
                    <Label htmlFor="Expires">Expires</Label>
                    <Select>
                      <SelectTrigger id="Month">
                        <SelectValue placeholder="Month" />
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
                    <Label htmlFor="Expires">Year</Label>
                    <Select>
                      <SelectTrigger id="Year">
                        <SelectValue placeholder="Year" />
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
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="CVV" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-full bg-gray-950 text-gray-50">Finalizar Pagamento</Button>
        </CardFooter>
      </Card>
    </>
  );
}
