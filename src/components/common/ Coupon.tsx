import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Controller, useForm } from "react-hook-form";
import InputText from "@/components/common/InputText";
import ButtonMain from "./ButtonMain";

export interface CouponProps {
    title: string;
    description: string;
}

export default function Coupon({ title, description }: CouponProps) {
    const { handleSubmit, control } = useForm({});

    const handleFormSubmit = (data: any) => {

        console.log(data);
    }
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="sm:col-span-3">
                            <Controller
                                control={control}
                                name="full_name"
                                render={({ field: { onChange, ...rest } }) => (
                                    <InputText
                                        label="Cupom"
                                        onChange={onChange}
                                        {...rest}
                                        placeholder="CUPOM10"
                                    />
                                )}
                            />
                        </div>

                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <ButtonMain variant={"default"}>
                    validar cupom
                </ButtonMain>
            </CardFooter>
        </Card >
    )
}