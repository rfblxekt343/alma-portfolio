import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alma | Full Stack Developer",
  description: "Portfolio of Alma, a Full Stack Developer building interactive web applications and digital products."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
