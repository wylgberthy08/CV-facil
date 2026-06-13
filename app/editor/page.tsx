import type { Metadata } from "next";
import { EditorLayout } from "@/components/editor/editor-layout";

export const metadata: Metadata = {
  title: "Editor de Currículo",
  description:
    "Edite seu currículo profissional online com templates prontos. Ferramenta prática para moradores de Manaus, São Sebastião do Uatumã e Urucará.",
  robots: { index: false, follow: true },
};

export default function EditorPage() {
  return <EditorLayout />;
}
