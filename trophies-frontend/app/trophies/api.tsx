import { Trophies } from "../components/trophy";

export async function getAllTrophiesForGame(gameName: string): Promise<Trophies[]> {
  const token = localStorage.getItem("token");
  if (!token) return [];

  try {
    const res = await fetch(
      `http://localhost:8080/api/games/name/${encodeURIComponent(gameName)}/trophies`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    if (!res.ok) {
      console.error("Failed to fetch trophies:", res.status);
      return [];
    }

    return await res.json();
  } catch (err) {
    console.error("Error loading trophies", err);
    return [];
  }
}