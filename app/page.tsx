import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, Palette, Sparkles } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "CV Fácil - Crie Seu Currículo Online em Manaus Amazonas",
    description:
      "Crie currículos profissionais online com templates prontos. Plataforma para moradores de Manaus, São Sebastião do Uatumã, Urucará e todo o Amazonas. Edição simples e exportação em PDF.",
    alternates: { canonical: "https://cvfacil.com.br" },
  };
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-xl font-bold text-blue-600">CV Fácil</h1>
        <Link
          href="/editor"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Criar Currículo
        </Link>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900">
          <FileText className="h-8 w-8 text-blue-600 dark:text-blue-300" />
        </div>

        <h2 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Crie currículos profissionais em minutos
        </h2>

        <p className="mb-10 max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
          Editor simples e intuitivo. Escolha entre templates prontos, edite seus dados e exporte em PDF.
        </p>

        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 text-left shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
            <Palette className="mb-3 h-6 w-6 text-blue-600" />
            <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-100">Templates</h3>
            <p className="text-sm text-zinc-500">Layouts prontos para diferentes profissões e níveis</p>
          </div>
          <div className="rounded-xl border bg-white p-6 text-left shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
            <Sparkles className="mb-3 h-6 w-6 text-blue-600" />
            <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-100">Live Preview</h3>
            <p className="text-sm text-zinc-500">Veja as alterações em tempo real enquanto edita</p>
          </div>
          <div className="rounded-xl border bg-white p-6 text-left shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
            <Download className="mb-3 h-6 w-6 text-blue-600" />
            <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-100">Exportar PDF</h3>
            <p className="text-sm text-zinc-500">Baixe seu currículo em PDF pronto para imprimir</p>
          </div>
        </div>

        <section className="mb-12 w-full max-w-4xl">
          <h3 className="mb-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Modelos disponíveis
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { name: "Clássico", desc: "Duas colunas com sidebar", color: "from-blue-900 to-blue-800" },
              { name: "Moderno", desc: "Header colorido e conteúdo clean", color: "from-teal-600 to-blue-600" },
              { name: "Simples", desc: "Coluna única, ideal para impressão", color: "from-zinc-600 to-zinc-500" },
            ].map((tpl) => (
              <div
                key={tpl.name}
                className="overflow-hidden rounded-xl border bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className={`h-24 bg-gradient-to-br ${tpl.color}`} />
                <div className="p-4 text-left">
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{tpl.name}</h4>
                  <p className="text-sm text-zinc-500">{tpl.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Link
          href="/editor"
          className="rounded-lg bg-blue-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700"
        >
          Começar agora
        </Link>
      </main>

      <footer className="border-t px-6 py-4 text-center text-sm text-zinc-500">
        CV Fácil — Gerador de Currículos
      </footer>
    </div>
  );
}
