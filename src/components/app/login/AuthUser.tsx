"use client";

import { AuthContext } from "@/context/AuthContext";
import { useParams, usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

export function AuthUser() {
  const query = useParams();
  console.log(query, "query");
  // const pathname = usePathname();
  // console.log(pathname, "pathname");
  // const { AuthUser, authIsLoading } = useContext(AuthContext);
  // const token = pathname.split("/")[2];
  // console.log(token);

  // useEffect(() => {
  //   if (token) AuthUser({ pass_key: token });
  // }, [AuthUser, token]);
  return (
    <>
      <div>asdasdad</div>
    </>
  );
}
