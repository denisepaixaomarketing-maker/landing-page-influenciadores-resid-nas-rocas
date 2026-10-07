import type { Metadata } from "next";
import "./globals.css";

const title = "Búzios pelo olhar Resid.";
const description = "O Nas Rocas está de volta: um destino icônico e uma comunidade seleta na Ilha Rasa, em Búzios.";
const socialImage = "https://denisepaixaomarketing-maker.github.io/nas-rocas-club/og.png";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  keywords: ["Nas Rocas", "Resid", "Búzios", "members journey", "hospitalidade", "experiências"],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    images: [{ url: socialImage, width: 2400, height: 1350, alt: "Búzios pelo olhar Resid." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
