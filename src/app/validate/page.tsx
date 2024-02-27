"use client";
import { LoadingPage } from "@/components/common/LoadingPage";
import { InfinityLoading } from "@/components/svg/InfinityLoading";
import { AuthContext } from "@/context/AuthContext";
import { useQuery } from "@/utils/functions/use-query";
import { useContext, useEffect } from "react";

export default function Validate() {
  const { AuthUser } = useContext(AuthContext);

  const token = useQuery("token");
  const email = useQuery("email");

  useEffect(() => {
    if (token) {
      AuthUser({ pass_key: token, email: email?.toString() });
    }
  }, [AuthUser, token, email]);
  return (
    <>
      <LoadingPage />
    </>
  );
}
