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
import FormRegsiter from "../formregister/FormRegister";
import PaymentForm from "../paymentform/PaymentForm";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function RegisterForm() {
  return (
    <div className="flex flex-nowrap w-full items-center gap-4">
      <div className="">
        <FormRegsiter />
        <PaymentForm />
      </div>
    </div>
  );
}
