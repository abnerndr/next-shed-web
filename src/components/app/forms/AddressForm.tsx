import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IAddressForm {
  register: UseFormRegister<FieldValues>;
}

export function AddressForm({ register }: IAddressForm) {
  return (
    <>
      <div className="sm:col-span-3">
        <Label htmlFor="postal_code">código postal</Label>
        <Input {...register("postal_code")} />
      </div>
      <div className="sm:col-span-5">
        <Label htmlFor="street">logradouro</Label>
        <Input {...register("street")} />
      </div>
      <div className="sm:col-span-1">
        <Label htmlFor="number">n°</Label>
        <Input {...register("number")} />
      </div>
      <div className="sm:col-span-3">
        <Label htmlFor="nigthborhood">bairro</Label>
        <Input {...register("nigthborhood")} />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="city">cidade</Label>
        <Input {...register("city")} />
      </div>
      <div className="sm:col-span-1">
        <Label htmlFor="city">estado</Label>
        <Input {...register("city")} />
      </div>
    </>
  );
}
