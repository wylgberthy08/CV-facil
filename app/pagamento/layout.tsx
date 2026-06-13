import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagamento - Baixar Currículo em PDF",
  description:
    "Finalize o pagamento via PIX por apenas R$ 8,99 e baixe seu currículo profissional em PDF pronto para imprimir.",
  robots: { index: false, follow: false },
};

export default function PaymentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
