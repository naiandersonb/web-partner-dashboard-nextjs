import api from "@/services/http/api";
import { IUser } from "@/types/User";

export async function getAuthenticatedUser(): Promise<IUser | null> {
  try {
    const { data } = await api.get("/me");
    return data.data ?? null;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    return null;
  }
}
