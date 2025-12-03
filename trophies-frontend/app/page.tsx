"use client";

import LoginPage from "./loginpage";
import RegisterPage from "./registerpage";


export default function Home() {
   return (
    <div>
      <div className="shadow-lg p-6 grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center"></h2>
          <LoginPage />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center"></h2>
          <RegisterPage />
        </div>
      
      </div>
    </div>
  );
}
