import { cookies } from "next/headers";

const AUTH_COOKIE_NAME = "auth_session";

export async function getAuthenticatedUser(): Promise<unknown | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  try {
    const response = await fetch(`${process.env.API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },

      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error("Falha na autenticação do token.");
      return null;
    }

    const userData: unknown = await response.json();
    return userData;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    return null;
  }
}
