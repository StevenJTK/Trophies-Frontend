import { Trophies } from './trophy';

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


