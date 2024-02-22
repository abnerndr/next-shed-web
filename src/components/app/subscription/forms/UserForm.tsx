import { Step } from "@/components/common/Steps";

export function UserForm() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-44">
        <div className="flex flex-row gap-x-5">
          <div className="bg-gray-50 p-6 rounded-xl">
            <Step.ModelTwo id={2} />
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <p>formulário de administrador</p>
          </div>
        </div>
      </div>
    </>
  );
}
