"use client";
import { AuthContext } from "@/context/AuthContext";
import { useEmailUser } from "@/hooks/useUser";
import { useQuery } from "@/utils/functions/use-query";
import { useParams, useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Validate() {
  const { AuthUser } = useContext(AuthContext);
  const email = useEmailUser();
  //   const token = useQuery("token");
  const path = useSearchParams();
  const token = path.get("token");
  useEffect(() => {
    if (token) {
      AuthUser({ pass_key: token, email });
    }
  }, [AuthUser, token, email]);
  return (
    <>
      <div className="p-2 text-sm">redirection to painel...</div>
    </>
  );
}
