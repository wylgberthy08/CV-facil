"use client";

import { useEffect, useState, useRef } from "react";
import { loadCV } from "@/lib/storage";
import { CVDocument } from "@/components/cv/cv-document";
import { exportPDF } from "@/lib/pdf";
import type { CVData } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Clock, Copy, Loader2, RefreshCw, QrCode } from "lucide-react";
import Link from "next/link";

type PaymentState = "idle" | "loading" | "waiting" | "paid" | "expired" | "error";

export default function PaymentPage() {
  const [cv, setCV] = useState<CVData | null>(null);
  const [payment, setPayment] = useState<{
    id: string;
    brCode: string;
    brCodeBase64: string;
    status: string;
    expiresAt: string;
  } | null>(null);
  const [paymentState, setPaymentState] = useState<PaymentState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const data = loadCV();
    if (data) setCV(data);
  }, []);

  useEffect(() => {
    if (!cv) return;

    const createPayment = async () => {
      setPaymentState("loading");
      try {
        const res = await fetch("/api/create-payment", { method: "POST" });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error ?? "Erro ao criar pagamento");
          setPaymentState("error");
          return;
        }
        setPayment(data);
        setPaymentState("waiting");
      } catch {
        setError("Erro ao conectar com o servidor");
        setPaymentState("error");
      }
    };

    createPayment();
  }, [cv]);

  useEffect(() => {
    if (paymentState !== "waiting" || !payment?.id) return;

    pollingRef.current = setInterval(async () => {
      try {
        const res = await fetch(`/api/check-payment?id=${payment.id}`);
        const data = await res.json();
        if (data.status === "PAID") {
          setPaymentState("paid");
          localStorage.setItem("cvPaymentPaid", "true");
          if (pollingRef.current) clearInterval(pollingRef.current);
        } else if (["EXPIRED", "CANCELLED"].includes(data.status)) {
          setPaymentState("expired");
          if (pollingRef.current) clearInterval(pollingRef.current);
        }
      } catch {
        // silently retry
      }
    }, 3000);

    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, [paymentState, payment?.id]);

  useEffect(() => {
    if (paymentState !== "paid" || downloading) return;

    const doDownload = async () => {
      setDownloading(true);
      await new Promise((r) => setTimeout(r, 800));
      const el = cvRef.current?.querySelector("#cv-document");
      if (el instanceof HTMLElement) {
        const name = cv?.personalInfo.firstName.toLowerCase() ?? "cv";
        await exportPDF(el, `curriculo-${name}.pdf`);
      }
    };

    doDownload();
  }, [paymentState, cv, downloading]);

  const handleCopy = async () => {
    if (!payment?.brCode) return;
    try {
      await navigator.clipboard.writeText(payment.brCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleRetry = () => {
    setPaymentState("loading");
    setError(null);
    setPayment(null);
    const createPayment = async () => {
      try {
        const res = await fetch("/api/create-payment", { method: "POST" });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error ?? "Erro ao criar pagamento");
          setPaymentState("error");
          return;
        }
        setPayment(data);
        setPaymentState("waiting");
      } catch {
        setError("Erro ao conectar com o servidor");
        setPaymentState("error");
      }
    };
    createPayment();
  };

  const formatExpiresAt = (iso: string) => {
    const date = new Date(iso);
    return date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  };

  if (!cv) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50">
        <p className="text-zinc-500">Nenhum currículo encontrado.</p>
        <Link href="/editor">
          <Button variant="ghost" size="sm" className="mt-2">
            Criar currículo
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <header className="flex items-center justify-between border-b bg-white px-4 py-3">
        <Link href="/editor">
          <Button variant="ghost" size="sm">
            <ArrowLeft size={16} /> Voltar
          </Button>
        </Link>
        <h1 className="text-sm font-semibold text-zinc-800">CV Fácil</h1>
        <div className="w-20" />
      </header>

      <main className="flex flex-1 items-start justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-xl border bg-white p-6 shadow-sm">
          {paymentState === "loading" && (
            <div className="flex flex-col items-center py-12">
              <Loader2 size={40} className="animate-spin text-blue-600" />
              <p className="mt-4 text-sm text-zinc-600">Gerando QR Code PIX...</p>
            </div>
          )}

          {paymentState === "error" && (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <span className="text-xl text-red-600">!</span>
              </div>
              <p className="text-sm text-red-600">{error ?? "Erro ao processar pagamento"}</p>
              <Button variant="secondary" size="sm" className="mt-4" onClick={handleRetry}>
                <RefreshCw size={14} /> Tentar novamente
              </Button>
            </div>
          )}

          {paymentState === "waiting" && payment && (
            <>
              <div className="mb-6 text-center">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <QrCode size={20} className="text-blue-600" />
                  <h2 className="text-lg font-semibold text-zinc-800">Pagamento via PIX</h2>
                </div>
                <p className="text-sm text-zinc-500">
                  Escaneie o QR Code abaixo para pagar <strong className="text-zinc-800">R$ 8,99</strong>
                </p>
              </div>

              <div className="mb-4 flex justify-center">
                <div className="rounded-xl border-2 border-dashed border-zinc-200 p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={payment.brCodeBase64}
                    alt="QR Code PIX"
                    className="h-56 w-56"
                  />
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-1 text-xs font-medium text-zinc-500">Código copia e cola</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 truncate rounded-lg border bg-zinc-50 px-3 py-2 text-xs text-zinc-600">
                    {payment.brCode}
                  </code>
                  <Button variant="secondary" size="sm" onClick={handleCopy}>
                    <Copy size={14} /> {copied ? "Copiado" : "Copiar"}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-700">
                <Clock size={16} />
                <span>Aguardando pagamento... Expira às {formatExpiresAt(payment.expiresAt)}</span>
              </div>
            </>
          )}

          {paymentState === "paid" && (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle size={36} className="text-green-600" />
              </div>
              <h2 className="mb-1 text-lg font-semibold text-green-700">Pagamento Confirmado!</h2>
              <p className="mb-2 text-sm text-zinc-600">
                {downloading ? "Baixando seu currículo..." : "Download iniciado!"}
              </p>
              {downloading && (
                <Loader2 size={20} className="animate-spin text-blue-600" />
              )}
              <Link href="/editor">
                <Button variant="secondary" size="sm" className="mt-4">
                  Voltar ao Editor
                </Button>
              </Link>
            </div>
          )}

          {paymentState === "expired" && (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <Clock size={24} className="text-red-600" />
              </div>
              <p className="mb-1 text-sm font-medium text-red-600">QR Code expirado</p>
              <p className="mb-4 text-xs text-zinc-500">O tempo para pagamento acabou.</p>
              <Button variant="secondary" size="sm" onClick={handleRetry}>
                <RefreshCw size={14} /> Gerar novo QR Code
              </Button>
            </div>
          )}
        </div>
      </main>

      <div ref={cvRef} style={{ position: "absolute", left: "-9999px", top: 0, opacity: 0, pointerEvents: "none" }}>
        <CVDocument cv={cv} />
      </div>
    </div>
  );
}
