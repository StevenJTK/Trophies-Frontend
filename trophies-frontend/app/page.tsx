"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[75vh] flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
      <div className="flex gap-4">
        <Link
          href="/register"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Register
        </Link>
        <Link
          href="/login"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
