import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Kashifur Rahman Reza — Full-Stack Developer",
  description:
    "Full-stack web developer specializing in React, Node.js, and PostgreSQL/MongoDB."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
        {children}
      </body>
    </html>
  );
}
