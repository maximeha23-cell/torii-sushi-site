import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Torii Sushi | Restaurant japonais Laval",
  description: "Torii Sushi, restaurant japonais à Laval. Sushis, sashimis, makis et créations maison. Apportez votre vin.",
  icons: { icon: "/images/favicon.png", shortcut: "/images/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
