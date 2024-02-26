"use client";

import { checkUserisAuthenticated } from "@/utils/functions/check-user";
import AccessForm from "./login/AcessForm";
import { DashboardLayout } from "./dashboard/DashboardLayout";

export function AppMain() {
  const isAuth = checkUserisAuthenticated();

  return (
    <>
      <AccessForm />
    </>
  );
}
