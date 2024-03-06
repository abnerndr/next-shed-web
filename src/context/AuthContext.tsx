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
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

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
  SignOut: () => void;
  authIsLoading: boolean;
};

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({ children }: AuthProviderProps) {
  const { toast } = useToast();
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
        const url = `/auth/send/token`;
        await apiService.post(url, { email });
        if (typeof window !== "undefined") {
          setCookie("shcd.email", JSON.stringify(email), {
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });
        }
        toast({
          title: "token enviado com sucesso!",
          description: `o seu token de autenticação foi enviado para a caixa de ${email}`,
          action: <ToastAction altText="Entendi">Entendi</ToastAction>,
          duration: 5000,
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "ops, algo aconteceu ao enviar o token",
          description: `espere alguns minutos e tente novamente, ou acesse shcd.com.br/support`,
          action: <ToastAction altText="Entendi">Entendi</ToastAction>,
          duration: 5000,
        });
      }
      setAuthIsLoading(false);
    },
    [toast]
  );

  //   authenticated user
  const AuthUser = useCallback(
    async ({ email, pass_key }: IAuthUser) => {
      setAuthIsLoading(true);
      try {
        const {
          data: { user, token },
        } = await apiService.post(`/auth/user/login`, {
          email,
          pass_key,
        });

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
        toast({
          title: `bem vindo! ${user.full_name}`,
          description: "aproveito o acesso ao seu painel",
          action: <ToastAction altText="Entendi">Entendi</ToastAction>,
          duration: 5000,
        });
        apiService.defaults.headers["Authorization"] = `Bearer ${token}`;
        if (token) router.push("/dashboard");
      } catch (error) {
        toast({
          variant: "destructive",
          title: "ops, algo aconteceu ao realizar autenticação",
          description: `espere alguns minutos e tente novamente, ou acesse shcd.com.br/support`,
          action: <ToastAction altText="Entendi">Entendi</ToastAction>,
          duration: 5000,
        });
        // router.push("/");
      }
      setAuthIsLoading(false);
    },
    [router, toast]
  );

  const SignOut = useCallback(() => {
    deleteCookie("shcd.email");
    deleteCookie("shcd.token");
    deleteCookie("shcd.user");
    deleteCookie("shcd.user_id");
    deleteCookie("shcd.company_id");
    router.push("/");
  }, [router]);

  return (
    <>
      <AuthContext.Provider
        value={{
          SendToken,
          AuthUser,
          SignOut,
          authIsLoading,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
