"use client";
import InputText from "@/components/common/InputText";
import { formatPostalCode } from "@/utils/helpers/masks/address";
import cep from "cep-promise";
import { ChangeEvent, useCallback } from "react";
import {
  Controller,
  FieldValues,
  type Control,
  type UseFormSetValue,
} from "react-hook-form";

interface IAddressForm {
  control: Control<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

export function AddressForm({ control, setValue }: IAddressForm) {
  const handleGetAddress = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const code = event.target.value;
      if (code.length >= 10) {
        cep(code)
          .then((item) => {
            setValue("postal_code", formatPostalCode(item?.cep));
            setValue("street", item.street);
            setValue("neighborhood", item.neighborhood);
            setValue("city", item.city);
            setValue("state", item.state);
          })
          .catch(() => {
            setValue("postal_code", "");
            setValue("street", "");
            setValue("neighborhood", "");
            setValue("city", "");
            setValue("state", "");
          });
      } else {
        setValue("street", "");
        setValue("neighborhood", "");
        setValue("city", "");
        setValue("state", "");
      }
    },
    [setValue]
  );

  return (
    <>
      <div className="sm:col-span-2">
        <Controller
          control={control}
          name="postal_code"
          render={({ field: { onChange, ...rest } }) => (
            <InputText
              label="código postal"
              onChange={(e) => {
                onChange(formatPostalCode(e.target.value));
                handleGetAddress(e);
              }}
              {...rest}
              maxLength={10}
              placeholder="0000-000"
            />
          )}
        />
      </div>
      <div className="sm:col-span-5">
        <Controller
          control={control}
          name="street"
          render={({ field: { onChange, ...rest } }) => (
            <InputText
              label="logradouro"
              onChange={onChange}
              {...rest}
              placeholder="rua das flores"
            />
          )}
        />
      </div>
      <div className="sm:col-span-1">
        <Controller
          control={control}
          name="number"
          render={({ field: { onChange, ...rest } }) => (
            <InputText
              label="n°"
              onChange={onChange}
              {...rest}
              placeholder="00"
            />
          )}
        />
      </div>
      <div className="sm:col-span-3">
        <Controller
          control={control}
          name="neighborhood"
          render={({ field: { onChange, ...rest } }) => (
            <InputText
              label="bairro"
              onChange={onChange}
              {...rest}
              placeholder="jardim das margaridas"
            />
          )}
        />
      </div>
      <div className="sm:col-span-2">
        <Controller
          control={control}
          name="city"
          render={({ field: { onChange, ...rest } }) => (
            <InputText
              label="cidade"
              onChange={onChange}
              {...rest}
              placeholder="são paulo"
            />
          )}
        />
      </div>
      <div className="sm:col-span-1">
        <Controller
          control={control}
          name="state"
          render={({ field: { onChange, ...rest } }) => (
            <InputText
              label="estado"
              onChange={onChange}
              {...rest}
              placeholder="SP"
            />
          )}
        />
      </div>
    </>
  );
}
