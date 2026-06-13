"use client";

import { useRef, useState, useEffect } from "react";
import type { CVData } from "@/lib/types";
import { useCVData } from "@/hooks/use-cv-data";
import { EditorSidebar } from "./editor-sidebar";
import { CVDocument } from "@/components/cv/cv-document";
import { exportPDF } from "@/lib/pdf";
import { Button } from "@/components/ui/button";
import { Download, Eye, EyeOff, FileText, Plus } from "lucide-react";
import { listCVs, loadCV, saveCV } from "@/lib/storage";
import { createDefaultCV } from "@/lib/defaults";

export function EditorLayout() {
  const {
    cv,
    isLoaded,
    updatePersonalInfo,
    updateContact,
    updatePhoto,
    addSkill,
    updateSkill,
    removeSkill,
    addExperience,
    updateExperience,
    removeExperience,
    addHighlight,
    updateHighlight,
    removeHighlight,
    addEducation,
    updateEducation,
    removeEducation,
    addLanguage,
    updateLanguage,
    removeLanguage,
    addAward,
    updateAward,
    removeAward,
    changeTemplate,
    changeTheme,
    createNew,
    loadCV,
  } = useCVData();

  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const [cvList, setCvList] = useState<{ id: string; name: string; updatedAt: string }[]>([]);
  const [showCvList, setShowCvList] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const [scaling, setScaling] = useState(1);

  useEffect(() => {
    setCvList(listCVs());
  }, [cv]);

  useEffect(() => {
    const updateScale = () => {
      const container = previewRef.current?.parentElement;
      if (!container) return;
      const containerWidth = container.clientWidth - 32;
      const cvWidth = 210;
      const scale = Math.min(1, containerWidth / cvWidth);
      setScaling(scale);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const handleExportPDF = async () => {
    if (typeof window !== "undefined" && !localStorage.getItem("cvPaymentPaid")) {
      window.location.href = "/pagamento";
      return;
    }
    const el = document.getElementById("cv-document");
    if (!el) return;
    await exportPDF(el, `curriculo-${cv?.personalInfo.firstName.toLowerCase() ?? "cv"}.pdf`);
  };

  const handleNewCV = () => {
    createNew();
    setShowCvList(false);
  };

  const handleLoadCV = (id: string) => {
    loadCV(id);
    setShowCvList(false);
  };

  if (!isLoaded || !cv) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  if (showMobilePreview) {
    return (
      <div className="flex h-screen flex-col bg-zinc-100">
        <div className="flex items-center justify-between border-b bg-white p-3">
          <Button variant="ghost" size="sm" onClick={() => setShowMobilePreview(false)}>
            <EyeOff size={18} /> Voltar ao Editor
          </Button>
          <div className="flex gap-2">
            <Button size="sm" onClick={handleExportPDF}>
              <Download size={16} /> PDF
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div ref={previewRef} className="mx-auto" style={{ width: "210mm" }}>
            <CVDocument cv={cv} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between border-b bg-white px-4 py-2">
        <div className="flex items-center gap-3">
          <h1 className="text-base font-bold text-blue-600">CV Fácil</h1>
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowCvList(!showCvList)}
            >
              <FileText size={16} /> {cv.name}
            </Button>
            {showCvList && (
              <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-lg border bg-white shadow-lg">
                <div className="max-h-48 overflow-y-auto p-2">
                  {cvList.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleLoadCV(item.id)}
                      className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-100"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="border-t p-2">
                  <Button variant="secondary" size="sm" className="w-full" onClick={handleNewCV}>
                    <Plus size={14} /> Novo Currículo
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowMobilePreview(true)}
            className="md:hidden"
          >
            <Eye size={18} /> Preview
          </Button>
          <Button size="sm" onClick={handleExportPDF}>
            <Download size={16} /> PDF
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-full overflow-y-auto border-r bg-zinc-50 md:w-[400px]">
          <EditorSidebar
            cv={cv}
            onUpdatePersonalInfo={updatePersonalInfo}
            onUpdateContact={updateContact}
            onUpdatePhoto={updatePhoto}
            onAddSkill={addSkill}
            onUpdateSkill={updateSkill}
            onRemoveSkill={removeSkill}
            onAddExperience={addExperience}
            onUpdateExperience={updateExperience}
            onRemoveExperience={removeExperience}
            onAddHighlight={addHighlight}
            onUpdateHighlight={updateHighlight}
            onRemoveHighlight={removeHighlight}
            onAddEducation={addEducation}
            onUpdateEducation={updateEducation}
            onRemoveEducation={removeEducation}
            onAddLanguage={addLanguage}
            onUpdateLanguage={updateLanguage}
            onRemoveLanguage={removeLanguage}
            onAddAward={addAward}
            onUpdateAward={updateAward}
            onRemoveAward={removeAward}
            onChangeTemplate={changeTemplate}
            onChangeTheme={changeTheme}
          />
        </aside>

        <main className="hidden flex-1 items-start justify-center overflow-auto bg-zinc-100 p-6 md:flex">
          <div className="sticky top-0">
            <div
              ref={previewRef}
              style={{
                transform: `scale(${scaling})`,
                transformOrigin: "top center",
              }}
            >
              <CVDocument cv={cv} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
