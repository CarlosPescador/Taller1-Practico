import type { ApiResponse, User } from "./types";

const BASE_URL = "https://randomuser.me/api";

// Obtiene una lista de usuarios aleatorios
export async function fetchUsers(count: number = 12): Promise<User[]> {
  try {
    const response = await fetch(`${BASE_URL}?results=${count}`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
}