"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function FormRegsiter() {
  const form = useForm();
  return (
    <div className="pr-96 mr-96 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-[500px]">
        <div className="bg-gray-100 px-6 shadow sm:rounded-lg sm:px-12">
          <div className="flex min-h-full flex-1 flex-col justify-center py-2 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cadastre-se aqui
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Preencha o formulario com atenção pois por aqui vamos saber qual o
              perfl ideal para seu negocio.
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={() => {}} className="mx-auto pt-8 max-w-xl ">
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        className="border-gray-400"
                        placeholder="ex: João Alves"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="border-gray-400"
                          placeholder="ex: joaoalves@gmail.com"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-4 flex flex-nowrapitems-center gap-4 ">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="cpf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CPF</FormLabel>
                        <FormControl>
                          <Input
                            className="border-gray-400"
                            placeholder="ex: 708.462.950-59"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="cnpj"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CNPJ</FormLabel>
                        <FormControl>
                          <Input
                            className="border-gray-400"
                            placeholder="ex: 71.351.388/0001-13"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="pt-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Celular</FormLabel>
                      <FormControl>
                        <Input
                          className="border-gray-400"
                          placeholder="ex: 19966-2451"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-4">
                <FormField
                  control={form.control}
                  name="photo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Foto</FormLabel>
                      <FormControl>
                        <Input
                          className="border-gray-400 text-gray-500"
                          id="picture"
                          type="file"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-4">
                <FormField
                  control={form.control}
                  name="address_complete"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endereço</FormLabel>
                      <FormControl>
                        <Input
                          className="border-gray-400"
                          placeholder="ex: nome da rua"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-4">
                <FormField
                  control={form.control}
                  name="zip_code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CEP</FormLabel>
                      <FormControl>
                        <Input
                          className="border-gray-400"
                          placeholder="ex: 10000-000"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-4">
                <FormField
                  control={form.control}
                  name="street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rua</FormLabel>
                      <FormControl>
                        <Input
                          className="border-gray-400"
                          placeholder="ex: nome da rua"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-4">
                <FormField
                  control={form.control}
                  name="street_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número da casa</FormLabel>
                      <FormControl>
                        <Input
                          className="border-gray-400"
                          placeholder="ex: numero da casa"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-4">
                <FormField
                  control={form.control}
                  name="neighborhood"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bairro</FormLabel>
                      <FormControl>
                        <Input
                          className="border-gray-400"
                          placeholder="ex: jardim das flores"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-4">
                <FormField
                  control={form.control}
                  name="complement"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Complemento</FormLabel>
                      <FormControl>
                        <Input
                          className="border-gray-400"
                          placeholder="ex: casa ou apartamento"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-4">
                <FormField
                  control={form.control}
                  name="bussiness_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome da Empresa</FormLabel>
                      <FormControl>
                        <Input
                          className="border-gray-400"
                          placeholder="ex: comercio do joão"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-4">
                <FormField
                  control={form.control}
                  name="bussiness_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome da Empresa</FormLabel>
                      <FormControl>
                        <Input
                          className="border-gray-400"
                          placeholder="ex: comercio do joão"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-4">
                <FormField
                  control={form.control}
                  name="bussiness_picture_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Foto da Empresa</FormLabel>
                      <FormControl>
                        <Input
                          className="border-gray-400 text-gray-500"
                          id="picture"
                          type="file"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex pt-10">
                <Button
                  className="block w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-50 shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
