import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CV Fácil - Gerador de Currículos Online em Manaus, Amazonas",
    template: "%s | CV Fácil",
  },
  description:
    "Crie currículos profissionais online em minutos. Plataforma ideal para moradores de Manaus, São Sebastião do Uatumã, Urucará e todo o Amazonas. Templates prontos, edição simples e exportação em PDF.",
  keywords: [
    "currículo Manaus",
    "currículo Amazonas",
    "currículo São Sebastião do Uatumã",
    "currículo Urucará",
    "gerador de currículo online",
    "criar currículo profissional",
    "fazer currículo online",
    "curriculum vitae online",
    "modelo de currículo pronto",
    "currículo para imprimir",
    "como fazer currículo",
    "currículo moderno Amazonas",
    "baixar currículo PDF",
    "currículo pronto Manaus",
  ],
  authors: [{ name: "CV Fácil" }],
  creator: "CV Fácil",
  publisher: "CV Fácil",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "CV Fácil",
    title: "CV Fácil - Gerador de Currículos Online em Manaus, Amazonas",
    description:
      "Crie currículos profissionais online em minutos. Ideal para moradores de Manaus, São Sebastião do Uatumã, Urucará e todo o Amazonas.",
    url: "https://cvfacil.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV Fácil - Gerador de Currículos Online",
    description:
      "Crie currículos profissionais online em minutos. Ideal para moradores do Amazonas.",
  },
  category: "tecnologia",
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
