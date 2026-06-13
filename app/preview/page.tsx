"use client";

import { useEffect, useState } from "react";
import type { CVData } from "@/lib/types";
import { loadCV } from "@/lib/storage";
import { CVDocument } from "@/components/cv/cv-document";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { exportPDF } from "@/lib/pdf";

export default function PreviewPage() {
  const [cv, setCV] = useState<CVData | null>(null);

  useEffect(() => {
    const data = loadCV();
    if (data) setCV(data);
  }, []);

  if (!cv) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-zinc-500">Nenhum currículo encontrado.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-zinc-100 pb-8 dark:bg-zinc-900">
      <div className="sticky top-0 z-10 flex w-full items-center justify-between bg-white px-4 py-3 shadow-sm dark:bg-zinc-800">
        <Link href="/editor">
          <Button variant="ghost" size="sm">
            <ArrowLeft size={16} /> Voltar
          </Button>
        </Link>
        <h1 className="text-sm font-semibold">{cv.name}</h1>
        <Button
          size="sm"
          onClick={() => {
            if (typeof window !== "undefined" && !localStorage.getItem("cvPaymentPaid")) {
              window.location.href = "/pagamento";
              return;
            }
            const el = document.getElementById("cv-document");
            if (el) exportPDF(el);
          }}
        >
          <Download size={16} /> PDF
        </Button>
      </div>
      <div className="mt-8 shadow-2xl">
        <CVDocument cv={cv} />
      </div>
    </div>
  );
}
