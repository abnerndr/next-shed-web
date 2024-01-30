import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputDefaultProps = {
  title: string;
};

export function InputDefault({ title }: InputDefaultProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{title}</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  );
}
