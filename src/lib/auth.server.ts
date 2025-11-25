import api from "@/services/http/api";
import { IUser } from "@/types/User";
//import { cookies } from "next/headers";

//const AUTH_COOKIE_NAME = "auth_session";

export async function getAuthenticatedUser(): Promise<IUser | null> {
  //const cookieStore = await cookies();
  // const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  // if (!token) {
  //   return null;
  // }

  try {
    const { data } = await api.get("/me");

    return data.data ?? null;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    return null;
  }
}
