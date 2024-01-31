import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonLoading() {
  return (
    <Button className="w-full bg-gray-400" disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    </Button>
  );
}
