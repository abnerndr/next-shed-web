import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputDefaultProps = {
  title: string;
};

export function InputDefault({ title }: InputDefaultProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        className="pl-1 text-xs font-semibold text-zinc-800"
        htmlFor="name"
      >
        razão social
      </Label>
      <Input className="h-8 rounded-xl" />
    </div>
  );
}
