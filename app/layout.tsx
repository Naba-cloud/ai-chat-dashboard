import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "AI dashboard",
  description: "Designed by Naba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
