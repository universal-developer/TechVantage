import { Inter } from "next/font/google";
import "./globals.css"; // Ensure Tailwind is loaded

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // Allows using it in Tailwind
});

export const metadata = {
  title: "My Next.js App",
  description: "Best way to add Inter font",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
