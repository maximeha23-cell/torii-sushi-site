import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const description =
  "Torii Sushi, restaurant japonais à Laval. Sushis, sashimis, makis et créations maison. Apportez votre vin.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "Torii Sushi | Restaurant japonais Laval",
    description,
    icons: { icon: "/images/favicon.png", shortcut: "/images/favicon.png" },
    openGraph: {
      title: "Torii Sushi | Restaurant japonais Laval",
      description,
      type: "website",
      locale: "fr_CA",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Torii Sushi à Laval" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Torii Sushi | Restaurant japonais Laval",
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
