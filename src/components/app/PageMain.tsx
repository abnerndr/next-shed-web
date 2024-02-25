"use client";

import { checkUserisAuthenticated } from "@/utils/functions/check-user";
import AccessForm from "./login/AcessForm";
import { Dashboard } from "./dashboard/Dashboard";

export function AppMain() {
  const isAuth = checkUserisAuthenticated();

  return <>{!isAuth ? <AccessForm /> : <Dashboard />}</>;
}