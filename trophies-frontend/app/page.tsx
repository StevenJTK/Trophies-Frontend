import TrophyGrid from "./grid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 text-center text-2xl font-bold">Trophy Cabinet</header>
      {/*Trophy Grid*/}
      <TrophyGrid />
    </div>
  );
}
