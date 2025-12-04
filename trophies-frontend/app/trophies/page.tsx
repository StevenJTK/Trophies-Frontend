"use client";

import TrophyGrid from "../components/trophyGrid";

interface Props {
  params: {
    game: string; 
  };
}

export default function TrophiesPage({ params }: Props) {
  const gameName = decodeURIComponent(params.game);

  return (
    <div className="min-h-screen bg-[#ADBCE6] flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {gameName} Trophies
      </h1>

      <div className="w-full max-w-5xl">
        <TrophyGrid gameName={gameName} />
      </div>
    </div>
  );
}