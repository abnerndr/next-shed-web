"use client";
import { AuthContext } from "@/context/AuthContext";
import { useEmailUser } from "@/hooks/useUser";
import { useQuery } from "@/utils/functions/use-query";
import { useContext, useEffect } from "react";

export default function Validate() {
  const { AuthUser } = useContext(AuthContext);

  const token = useQuery("token");
  const email = useQuery("email");
  console.log(token, "token");
  console.log(email, "email");

  useEffect(() => {
    if (token) {
      AuthUser({ pass_key: token, email: email?.toString() });
    }
  }, [AuthUser, token, email]);
  return (
    <>
      <div className="p-2 text-sm">redirection to painel...</div>
    </>
  );
}
