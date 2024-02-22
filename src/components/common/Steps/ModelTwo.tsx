import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import { StepOptionsProps } from "./steps.types";
import { useMemo } from "react";

interface IModelTwo {
  id: number;
}

export function ModelTwo({ id }: IModelTwo) {
  const status1 = id === 1 ? "current" : "complete";
  const status2 =
    (id === 2 && "current") ||
    (id === 1 && "upcoming") ||
    (id === 3 && "complete") ||
    "upcoming";
  const status3 =
    (id === 3 && "current") ||
    (id === 2 && "upcoming") ||
    (id === 1 && "upcoming") ||
    "upcoming";
  const steps: StepOptionsProps[] = useMemo(
    () => [
      {
        id: 1,
        name: "Crie sua empresa",
        description: "passo 1 - selecione as opções da empresa",
        href: "/subscription",
        status: status1,
      },
      {
        id: 2,
        name: "Crie seu administrador",
        description: "passo 2 - crie o seu usuário adiminstrador",
        href: "/subscription/step1",
        status: status2,
      },
      {
        id: 3,
        name: "Selecione sua assinature",
        description: "passo 3 - selecione as opções de sua assinatura",
        href: "/subscription/step2",
        status: status3,
      },
    ],
    [status1, status2, status3]
  );
  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={clsx(
              stepIdx !== steps.length - 1 ? "pb-10" : "",
              "relative"
            )}
          >
            {step.status === "complete" ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-emerald-600"
                    aria-hidden="true"
                  />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 group-hover:bg-emerald-800">
                      <CheckCircle2
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium">{step.name}</span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            ) : step.status === "current" ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <a
                  href={step.href}
                  className="group relative flex items-start"
                  aria-current="step"
                >
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-emerald-600 bg-white">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-emerald-600">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-gray-500">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
