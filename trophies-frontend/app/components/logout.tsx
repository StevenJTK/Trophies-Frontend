"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      try {
        await fetch("http://localhost:8080/auth/logout", { method: "POST" });
        
        localStorage.removeItem("token");
        localStorage.removeItem("username");

        setMessage("You have been successfully logged out.");
        
        setTimeout(() => router.push("/"), 2000);
      } catch (err) {
        console.error(err);
        setMessage("Logout failed. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    logout();
  }, [router]);

  return (
    <div className="h-[calc(75vh-25px)] flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-80 text-center">
        <h2 className="text-xl font-bold mb-4">Logout</h2>
        {loading ? (
          <p className="text-gray-600">Logging out...</p>
        ) : (
          <p className="text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
}
