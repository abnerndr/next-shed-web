import Image from "next/image";
import { BellIcon } from "lucide-react";

import Logo from "@/assets/images/icon.png";
import { DropdownProfile } from "../app/dashboard/DropdownProfile";

export function Header() {
  return (
    <>
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
              <BellIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <div>
              <DropdownProfile />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
