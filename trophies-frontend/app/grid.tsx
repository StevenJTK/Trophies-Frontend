"use client";
import TrophyCard from './cards';
import {Trophies, getTrophy} from './trophy';
import { useEffect, useState, useMemo } from 'react';

type Props = {
  gameName: string;
  trophyNames: string[];
};

export default function TrophyGrid({ gameName, trophyNames }: Props) {
  const [trophies, setTrophies] = useState<Trophies[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const cleanTrophyNames = useMemo(
    () => trophyNames.filter(name => name.trim() !== ""),
    [trophyNames]
  );

  useEffect(() => {
    async function fetchTrophies() {
      try {
        const fetched = await Promise.all(
          cleanTrophyNames.map(name => getTrophy(gameName, name))
        );
        const valid = fetched.filter(Boolean) as Trophies[];
        if (valid.length === 0) setError('No trophies found or invalid token');
        setTrophies(valid);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch trophies');
      } finally {
        setLoading(false);
      }
    }

    if (cleanTrophyNames.length > 0) {
      fetchTrophies();
    } else {
      setLoading(false);
      setError('No trophy names provided');
    }
  }, [gameName, cleanTrophyNames]);
  
  if (loading) return <p>Loading trophies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {trophies.map(t => (
        <TrophyCard key={t.id} trophy={t} />
      ))}
    </div>
  );
}

