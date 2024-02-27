"use client";
import { InfinityLoading } from "../svg/InfinityLoading";

export function LoadingPage() {
  return (
    <>
      <div className="fixed w-full h-screen bg-zinc-900">
        <div className="flex justify-center w-full items-center h-full">
          <div className="w-12">
            <InfinityLoading color="white" />
          </div>
        </div>
      </div>
    </>
  );
}
