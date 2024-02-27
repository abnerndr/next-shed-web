"use client";
import Image from "next/image";
import Logo from "@/assets/images/logow.png";
import LoginForm from "./components/LoginForm";

export default function AccessForm() {
  return (
    <>
      <div className="relative w-full h-screen bg-white">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="w-full md:lg:w-[55%] lg:block hidden">
            <div className="w-full h-screen bg-zinc-900">
              <div className="flex flex-col justify-between h-full">
                <div className="p-8">
                  <Image
                    src={Logo.src}
                    alt="SHCD Logo"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex items-end pb-8 px-8 w-[90%]">
                  <span className="text-md text-gray-50 font-semibold">
                    Acme Inc “This library has saved me countless hours of work
                    and helped me deliver stunning designs to my clients faster
                    than ever before.”
                    <br />
                    <span className="text-xs text-gray-100 font-normal">
                      Sofia Davis
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[45%] w-full mt-72 lg:mt-0">
            <div className="w-full px-4 sm:px-40 md:px-40 lg:px-20 xl:px-60">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
