import { Step } from "@/components/common/Steps";
import { StepOptionsProps } from "@/components/common/Steps/steps.types";

export function SubscriptionForm() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-44">
        <div className="flex flex-row gap-x-5">
          <div className="bg-gray-50 p-6 rounded-xl">
            <Step.ModelTwo id={3} />
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <p>formulário de assinatura</p>
          </div>
        </div>
      </div>
    </>
  );
}
