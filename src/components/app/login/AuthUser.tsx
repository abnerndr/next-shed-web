"use client";

import { AuthContext } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

export function AuthUser() {
  const pathname = usePathname();
  const { AuthUser, authIsLoading } = useContext(AuthContext);
  const token = pathname.split("/")[2];

  useEffect(() => {
    if (token) AuthUser({ pass_key: token });
  }, [AuthUser, token]);
  return (
    <>
      <div></div>
    </>
  );
}
