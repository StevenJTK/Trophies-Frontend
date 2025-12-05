"use client";

import { useEffect, useState } from "react";

export default function LogoutPage() {
  const [message, setMessage] = useState("Logging out...");
  
  useEffect(() => {
    const logout = async () => {
      try {
        await fetch("http://localhost:8080/auth/logout", {
          method: "POST",
          credentials: "include",
        });
        setMessage("You have been successfully logged out.");
      } catch (err) {
        console.error(err);
        setMessage("Logout failed. Please try again.");
      }
    };
    
    logout();
  }, []);
  
  return (
    <div className="h-[75vh] flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-80 text-center">
        <h2 className="text-xl font-bold mb-4">Logout</h2>
        <p className="text-green-600">{message}</p>
      </div>
    </div>
  );
}