"use client";
import { useState } from "react";
import { ButtonLoading } from "../common/ButtonLoading";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function AccessForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLoading = () => {
    if (!isLoading) {
      setTimeout(() => {
        setIsLoading(true);
      }, 1000);
    }
    setIsLoading(false);
  };
  return (
    <div className="relative h-screen isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-zinc-900 ring-1 ring-gray-900/10 lg:w-1/2"></div>
          </div>
        </div>
        <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-32 lg:py-48">
          <div className="w-full max-w-xl lg:mr-0 lg:2-full">
            <div className="flex flex-col mt-auto justify-center text-center">
              <div className="pb-5">
                <h3 className="font-bold text-3xl text-black">
                  Create an Account
                </h3>
                <p className="text-gray-500 text-sm text-center">
                  Enter your email below to create your account
                </p>
              </div>
              <div className="w-full pb-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                />
              </div>
              {!isLoading ? (
                <Button type="button" onClick={handleLoading}>
                  Sign In with Email
                </Button>
              ) : (
                <ButtonLoading />
              )}
              <p className="py-10 text-gray-500 text-xs">
                By clicking continue, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
