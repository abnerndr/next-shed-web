import { Step } from "@/components/common/Steps";
import PlanPrice from "../../forms/PlanPrice";
import PaymentForm from "../../forms/PaymentForm";
import Coupon from "@/components/common/ Coupon";

export function SubscriptionForm() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-44">
        <div className="flex flex-row gap-x-5">
          <div className="bg-gray-50 p-6 rounded-xl w-1/2">
            <Step.ModelTwo id={3} />
            <div className="pt-10">
            <Coupon title={'Cupom de desconto'} description={"Aplique aqui seu cupom de desconto"}/>
            </div>
          </div>
            <div className="bg-gray-50 p-6 rounded-xl w-full">
              <h3 className="text-md font-bold text-zinc-800">
                Selecione sua assinatura
              </h3>
              <p className="text-sm text-zinc-500">
                Selecione as opções de sua assinatura e faça o pagamento do
                plano
              </p>
              <form>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                <div className="sm:col-span-3 mb-5">
                  <PlanPrice />
                </div>
                  <div className="sm:col-span-3 mb-5">
                    <PaymentForm />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  );
}
