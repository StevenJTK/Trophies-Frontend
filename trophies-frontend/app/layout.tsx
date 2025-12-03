import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#ADBCE6] min-h-screen font-sans">
        <header className="bg-black shadow p-4 text-center text-2xl font-bold">
          Homepage
        </header>
        <main className="bg-[#ADBCE6]">{children}</main>
        <footer className="bg-amber-300 shadow p-4 text-center text-pink-500 text-sm mt-4">
          &copy; 2025 Trophy App
        </footer>
      </body>
    </html>
  );
}
