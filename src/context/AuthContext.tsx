"use client";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { BASE_URL } from "@/utils/constants/base-url";
import { apiService } from "@/services/api";

interface ISendToken {
  email: string;
}

interface IAuthUser {
  email?: string;
  pass_key: string;
}

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextProps = {
  SendToken: (data: ISendToken) => void;
  AuthUser: (data: IAuthUser) => void;
  authIsLoading: boolean;
};

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({ children }: AuthProviderProps) {
  // cookie states value caching
  const [email, setEmail] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [companyId, setCompanyId] = useState<string>("");
  //   states of context
  const [authIsLoading, setAuthIsLoading] = useState<boolean>(false);
  //   var's default
  const baseUrl = useMemo(() => BASE_URL, []);
  const router = useRouter();

  //   loading cookies wen user is authenticated
  useEffect(() => {
    async function loadingCookies() {
      const email = getCookie("shcd.email");
      const token = getCookie("shcd.token");
      const user = getCookie("shcd.user");
      const userId = getCookie("shcd.user_id");
      const companyId = getCookie("shcd.company_id");
      if (typeof window !== "undefined") {
        setEmail(email as string);
        setToken(token as string);
        setUser(user as string);
        setUserId(userId as string);
        setCompanyId(companyId as string);
      }
    }
    loadingCookies();
  }, []);

  // SendToken for email
  const SendToken = useCallback(
    async ({ email }: ISendToken) => {
      setAuthIsLoading(true);
      try {
        const url = `${baseUrl}/auth/send/token`;
        await apiService.post(url, { email });
        if (typeof window !== "undefined") {
          setCookie("shcd.email", email, {
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });
        }
      } catch (error) {
        console.log(error);
      }
      setAuthIsLoading(false);
    },
    [baseUrl]
  );

  //   authenticated user
  const AuthUser = useCallback(
    async ({ pass_key }: IAuthUser) => {
      setAuthIsLoading(true);
      try {
        const url = `${baseUrl}/auth/user/login`;
        const {
          data: { user, token },
        } = await apiService.post(url, { email, pass_key });

        if (typeof window !== "undefined") {
          setCookie("shcd.token", token, {
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });

          setCookie("shcd.user", JSON.stringify(user), {
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });

          setCookie("shcd.user_id", user.id, {
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });

          setCookie("shcd.company_id", user.company.id, {
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });
        }

        apiService.defaults.headers["Authorization"] = `Bearer ${token}`;
        if (token) router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
      setAuthIsLoading(false);
    },
    [baseUrl, email, router]
  );

  return (
    <>
      <AuthContext.Provider
        value={{
          SendToken,
          AuthUser,
          authIsLoading,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
