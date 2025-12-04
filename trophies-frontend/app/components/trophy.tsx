export type Trophies = {
    id: number;
    trophyName: string;
    trophyType: string;
    trophyDescription: string;
}

export type Game = {
    id: number
    gameName: string;
    gameDescription: string;
    genre: string;
    releaseDate: string;
    developer: string;
}


export async function getTrophy(gameName: string, trophyName: string): Promise<Trophies | null> {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  try {
    const res = await fetch(`http://localhost:8080/api/games/name/${encodeURIComponent(gameName)}/trophyName/${encodeURIComponent(trophyName)}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) return null;
    
    const data: Trophies = await res.json();
    return data;
  } catch (err) {
    console.error('Error fetching trophy:', err);
    return null;
  }
}