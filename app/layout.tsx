import type { Metadata } from "next";
import "./globals.css";

export const metadata:Metadata = {
  title:"SHOP BEST JEWELRIES|NUBE",
  icons:"/logo.png",
  description:"Nube the best place to shop all your jewelries"
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
