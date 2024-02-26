"use client";
import { APP_ROUTES } from "@/utils/constants/app-routes";
import { checkUserisAuthenticated } from "@/utils/functions/check-user";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

type PrivateRouteProviderProps = {
  children: ReactNode;
};

const PrivateRouteProvider = ({ children }: PrivateRouteProviderProps) => {
  const { push } = useRouter();

  const userIsAuthenticated = checkUserisAuthenticated();

  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname, "pathname");
    if (!userIsAuthenticated) {
      push(APP_ROUTES.public.login);
    }
  }, [pathname, push, userIsAuthenticated]);

  return (
    <>
      {!userIsAuthenticated && null}
      {userIsAuthenticated && children}
    </>
  );
};

export default PrivateRouteProvider;
