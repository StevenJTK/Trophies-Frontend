"use client";
import { useEffect, useState } from "react";
import TrophyCard, {Trophies} from "./trophyCard";



export default function TrophyGrid({ gameName }: { gameName?: string }) {
  const [trophies, setTrophies] = useState<Trophies[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrophies() {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("You are not logged in");
        setLoading(false);
        return;
      }

      let url = "http://localhost:8080/api/trophies";
      if (gameName) url = `http://localhost:8080/api/games/name/${encodeURIComponent(gameName)}/trophies`;

      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch trophies");

        const data: Trophies[] = await res.json();
        setTrophies(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrophies();
  }, [gameName]);

  if (loading) return <p>Loading trophies...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {trophies.map((trophy) => (
        <TrophyCard key={trophy.id} trophy={trophy} />
      ))}
    </div>
  );
}

