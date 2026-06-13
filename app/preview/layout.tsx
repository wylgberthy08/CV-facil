import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pré-visualizar Currículo",
  description:
    "Visualize e exporte seu currículo profissional em PDF. Template pronto com edição feita em minutos por R$ 8,99.",
  robots: { index: false, follow: false },
};

export default function PreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
