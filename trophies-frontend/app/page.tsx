import TrophyGrid from "./grid";
import LoginPage from "./loginpage";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <LoginPage />
      </div>
      <header className="p-4 text-center text-2xl font-bold">Trophy Cabinet</header>
      {/*Trophy Grid*/}
      <TrophyGrid gameName={"Dragon's Dogma"} trophyNames={["The True Arisen"]} />
    </div>
  );
}
