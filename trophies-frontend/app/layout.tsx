import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen font-sans">
        {/* Header */}
        <header className="bg-white shadow p-4 text-center text-2xl font-bold">
          Trophy Cabinet
        </header>

        {/* Page content */}
        <main className="p-4">{children}</main>

        {/* Footer */}
        <footer className="bg-white shadow p-4 text-center text-gray-500 text-sm mt-4">
          &copy; 2025 Trophy App
        </footer>
      </body>
    </html>
  );
}
