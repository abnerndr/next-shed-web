"use client";
import Image from "next/image";
import { BellIcon } from "lucide-react";
import { DropdownProfile } from "./DropdownProfile";
import Logo from "@/assets/images/icon.png";
import { useCallback } from "react";
import ButtonMain from "@/components/common/ButtonMain";

import { toast } from "react-toastify";

export function DashboardLayout() {
  const CloseButton = ({ closeToast }: any) => (
    <ButtonMain className="bg-zinc-900" onClick={closeToast}>
      ok
    </ButtonMain>
  );

  const title = ({ title, description }: any) => {
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  const handleToast = useCallback(() => {
    toast(title({ title: "asdasdad", description: "adasdsadd" }), {
      closeButton: CloseButton,
    });
  }, []);
  return (
    <>
      <div className="flex min-h-full flex-col">
        <header className="shrink-0 border-b border-gray-200 bg-white">
          <div className="mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
            <Image
              className=""
              width={32}
              height={32}
              src={Logo.src}
              alt="Your Company"
            />
            <div className="flex items-center gap-x-8">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">View notifications</span>
                <ButtonMain onClick={handleToast} type="button">
                  <BellIcon className="h-5 w-5" aria-hidden="true" />
                </ButtonMain>
              </button>
              <div>
                <DropdownProfile />
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto flex w-full items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
          <aside className="sticky top-8 hidden w-44 shrink-0 lg:block bg-gray-400">
            {/* Left column area */}
            area1
          </aside>

          <main className="flex-1">{/* Main area */} main</main>
        </div>
      </div>
    </>
  );
}
