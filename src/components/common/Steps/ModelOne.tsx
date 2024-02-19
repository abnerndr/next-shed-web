/* eslint-disable react/jsx-key */
import clsx from "clsx";
import { StepOptionsProps } from "./steps.types";

interface IModelOne {
  title?: string | null;
  sizeWidth?: string;
  options: StepOptionsProps[];
}

export default function ModelOne({
  title,
  sizeWidth = "37.5%",
  options,
}: IModelOne) {
  return (
    <div>
      <h4 className="sr-only">ModelOne</h4>
      {title ? (
        <p className="text-sm font-medium text-gray-900">{title}</p>
      ) : null}
      <div className="mt-6" aria-hidden="true">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-zinc-600"
            style={{ width: sizeWidth }}
          />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
          {options &&
            options.map((item) => (
              <div
                className={clsx(
                  "w-full",
                  item.current === true ? "text-zinc-600 font-bold" : "",
                  (item.position === "left" && "") ||
                    (item.position === "right" && "text-right") ||
                    (item.position === "center" && "text-center")
                )}
              >
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
