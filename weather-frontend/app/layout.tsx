import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather App",
  description: "Powered by Laravel and Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning={true} 
      className={`${inter.className} bg-gradient-to-br from-blue-100 to-white min-h-screen`}>
        <main className="max-w-4xl mx-auto p-4">
          <header className="text-center my-4">
            <div className="card bg-white shadow-lg p-6 rounded-lg">
              <h1 className="text-3xl font-bold text-blue-700">☀️ Weather Forecast</h1>
              <p className="text-gray-600">Powered by OpenWeatherMap API</p>
            </div>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}