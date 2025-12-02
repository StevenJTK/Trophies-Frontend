import TrophyCard from './cards';
import {Trophies} from './trophy';

const fakeTrophies: Trophies[] = [
  { id: 1, trophyName: "First Win", trophyType: "Bronze", trophyDescription: "Unlocked your first achievement" },
  { id: 2, trophyName: "Champion", trophyType: "Gold", trophyDescription: "Reached the top rank" },
  { id: 3, trophyName: "Speedster", trophyType: "Silver", trophyDescription: "Completed the game under 2 hours" },
  
];

export default function TrophyGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {fakeTrophies.map(trophy => (
        <TrophyCard key={trophy.id} trophy={trophy} />
      ))}
    </div>
  );
}