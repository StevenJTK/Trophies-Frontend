"use client";
import TrophyCard from './cards';
import {Trophies, getTrophy} from './trophy';
import { useEffect, useState, useMemo } from 'react';

type Props = {
  gameName: string;
  trophyNames: string[];
};

export default function TrophyGrid({gameName}:{gameName: string} ) {
  const [trophies, setTrophies] = useState<Trophies[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);

      const data = await getAllTrophiesForGame(gameName);

      if(data.length === 0) {
        setError("No trophies found or token is invalid");
      }

      setTrophies(data);
      setLoading(false);
    }

    load(); 
  }, [gameName]);

  if (loading) return <p>Trophies are being loaded.</p>
  if(error) return <p className="text-red-500">(error)</p>

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {trophies.map((trophy) => (
        <TrophyCard key={trophy.id} trophy={trophy} />
      ))}
    </div>
  );



  async function getAllTrophiesForGame(gameName: string): Promise<Trophies[]> {
    const token = localStorage.getItem("token");

    if(!token) return [];

    try {
      const res = await fetch(
        `http://localhost:8080/api/games/name/${encodeURIComponent(gameName)}/trophies`,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );
    
      if(!res.ok) {
        console.error("Failed to fetch trophies:", res.status)
        return [];
      }
      
        return await res.json();
    } catch (err) {
      console.error("Error loading trophies", err);
      return [];
    }
  }








}

