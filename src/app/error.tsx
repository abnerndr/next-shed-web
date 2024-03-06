"use client"; // Error components must be Client Components
import Link from "next/link";
import { useErrorBoundary } from "react-error-boundary";

export default function Error() {
  const { resetBoundary } = useErrorBoundary();

  return (
    <>
      <main className="grid min-h-full place-items-center bg-zinc-900 px-6 py-24 sm:py-32 lg:px-8 mt-auto h-screen">
        <div className="text-center">
          <p className="text-base font-semibold text-gray-50">500</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl">
            Internal Server Error
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              type="button"
              className="rounded-md bg-gray-50 px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-gray-300"
              onClick={resetBoundary}
            >
              Try again
            </button>
            <Link
              href="https://shcd.com.br/support"
              className="text-sm font-semibold text-gray-50"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
