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

type Props = {
  trophy: Trophies;
};

export default function TrophyCard({ trophy }: Props) {
  return (
    <div className="bg-white shadow rounded p-4 flex flex-col gap-2 hover:shadow-lg transition-shadow">
      <h3 className="font-bold text-lg">{trophy.trophyName}</h3>
      <p className="text-gray-500 text-sm">{trophy.trophyDescription}</p>
      <span className="text-xs text-gray-400">{trophy.trophyType}</span>
    </div>
  );
}




