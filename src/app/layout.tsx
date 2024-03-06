"use client";

import { ErrorBoundary } from "react-error-boundary";
import Layout from "@/components/Layout";
import { Suspense } from "react";
import Loading from "./loading";
import Error from "./error";
import NotFound from "./not-found";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallback={<NotFound />}>{children}</ErrorBoundary>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
