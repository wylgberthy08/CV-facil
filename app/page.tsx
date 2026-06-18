import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Download,
  Palette,
  Sparkles,
  Form,
  DownloadCloud,
  Zap,
  Eye,
  CheckCircle,
  CreditCard,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

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
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-zinc-900">CV Fácil</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
              Como Funciona
            </a>
            <a href="#modelos" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
              Modelos
            </a>
            <a href="#precos" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
              Preços
            </a>
          </nav>

          <Link
            href="/editor"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Criar Currículo
          </Link>
        </div>
      </header>

      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="mx-auto flex max-w-6xl items-start gap-12">
            <div className="flex-1 max-w-2xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
                O currículo que você precisa para o emprego que você quer.
              </h1>

              <p className="mb-8 text-lg text-zinc-600">
                Crie seu currículo profissional em 5 minutos. Edição grátis, pague apenas quando baixar via PIX.
              </p>

              <div className="mb-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-zinc-700">Aprovado por recrutadores</span>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-zinc-700">Pague apenas R$ 8,99</span>
                </div>
              </div>

              <div className="mb-10 flex flex-col gap-4">
                <Link
                  href="/editor"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Começar Agora
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#modelos"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-zinc-200 px-6 py-3 text-base font-medium text-zinc-700 transition-colors hover:border-blue-600 hover:text-blue-600"
                >
                  Ver Modelos
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600 to-purple-600 opacity-30 blur-xl" />
                <div className="relative bg-zinc-800 p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 bg-zinc-700 rounded" />
                    <div className="h-3 w-full bg-zinc-700 rounded" />
                    <div className="h-3 w-full bg-zinc-700 rounded" />
                    <div className="h-3 w-2/3 bg-zinc-700 rounded" />
                    <div className="mt-6 h-3 w-full bg-blue-500/20 rounded" />
                    <div className="h-3 w-full bg-blue-500/20 rounded" />
                    <div className="h-3 w-full bg-blue-500/20 rounded" />
                    <div className="mt-6 h-3 w-full bg-blue-500/20 rounded" />
                    <div className="h-3 w-full bg-blue-500/20 rounded" />
                    <div className="h-3 w-full bg-blue-500/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="border-y bg-zinc-50 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h3 className="mb-3 text-sm font-semibold text-blue-600 uppercase tracking-wide">Processo</h3>
              <h2 className="mb-4 text-3xl font-bold text-zinc-900">Três passos para o sucesso</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                  <Form className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="mb-3 text-lg font-semibold text-zinc-900">1. Preencha seus dados</h4>
                <p className="text-sm text-zinc-600">
                  Formulário simples e intuitivo que guia você através de todos os campos necessários para um currículo completo.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                  <Palette className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="mb-3 text-lg font-semibold text-zinc-900">2. Escolha um modelo</h4>
                <p className="text-sm text-zinc-600">
                  Templates aprovados por recrutadores que se adaptam a diferentes profissões e níveis de experiência.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                  <DownloadCloud className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="mb-3 text-lg font-semibold text-zinc-900">3. Pague e Baixe</h4>
                <p className="text-sm text-zinc-600">
                  Pagamento único via PIX e download imediato do seu currículo em PDF pronto para usar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="tecnologia" className="py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold text-zinc-900">Tecnologia ao seu favor</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-zinc-900 p-8 text-white md:col-span-2">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/20">
                  <Sparkles className="h-7 w-7 text-blue-400" />
                </div>
                <h4 className="mb-3 text-xl font-semibold">Editor Intuitivo</h4>
                <p className="text-zinc-400">
                  Interface fácil de usar que permite criar um currículo profissional em minutos, sem precisar de conhecimento técnico.
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <div className="h-2 w-2 rounded-full bg-blue-500/50" />
                  <div className="h-2 w-2 rounded-full bg-blue-500/25" />
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                  <Eye className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="mb-3 text-lg font-semibold text-zinc-900">Preview Real</h4>
                <p className="text-sm text-zinc-600">
                  Visualização em tempo real das alterações enquanto você edita.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-8 shadow-sm">
                <span className="mb-4 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                  PREÇO ÚNICO
                </span>
                <h4 className="mb-3 text-lg font-semibold text-zinc-900">Sem Assinaturas</h4>
                <p className="text-sm text-zinc-600">
                  Cobrança apenas quando necessário. Não se preocupe com mensalidades.
                </p>
              </div>

              <div className="rounded-2xl bg-blue-600 p-8 text-white md:col-span-3">
                <div className="flex flex-col items-center text-center md:flex-row md:items-start md:gap-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500">
                    <CreditCard className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-3 text-xl font-semibold">Pagamento Facilitado</h4>
                    <p className="text-blue-100">
                      R$ 9,90 por download via PIX. Praticidade total para quem busca agilidade no mercado de trabalho.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl rounded-2xl bg-zinc-900 py-16 px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Pronto para dar o próximo passo na sua carreira?</h2>
          <p className="mb-8 text-lg text-zinc-300">
            Comece agora gratuitamente e crie o currículo que vai te destacar da multidão.
          </p>
          <Link
            href="/editor"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
          >
            Criar Meu Currículo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>

      <footer className="border-t bg-white py-12 px-6">
        <div className="mx-auto flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold text-zinc-900">CV Fácil</span>
            </div>
            <p className="text-sm text-zinc-600">
              A ferramenta definitiva para criar currículos profissionais em minutos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-zinc-900">Produto</span>
              <a href="#modelos" className="text-sm text-zinc-600 hover:text-blue-600">Modelos</a>
              <a href="#precos" className="text-sm text-zinc-600 hover:text-blue-600">Preços</a>
              <a href="#" className="text-sm text-zinc-600 hover:text-blue-600">Suporte</a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-zinc-900">Ajuda</span>
              <a href="#" className="text-sm text-zinc-600 hover:text-blue-600">Central de Ajuda</a>
              <a href="#" className="text-sm text-zinc-600 hover:text-blue-600">Contato</a>
              <a href="#" className="text-sm text-zinc-600 hover:text-blue-600">Legal</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-100 pt-8 text-center text-sm text-zinc-500">
          © 2024 CV Fácil. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}