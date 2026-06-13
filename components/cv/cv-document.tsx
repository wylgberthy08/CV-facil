"use client";

import type { CVData } from "@/lib/types";
import { themes } from "@/lib/templates";
import { TemplateClassic } from "./templates/template-classic";
import { TemplateModern } from "./templates/template-modern";
import { TemplateSimple } from "./templates/template-simple";

interface CVDocumentProps {
  cv: CVData;
  className?: string;
}

export function CVDocument({ cv, className }: CVDocumentProps) {
  const theme = themes.find((t) => t.id === cv.themeId) ?? themes[0];

  const renderTemplate = () => {
    switch (cv.templateId) {
      case "classic":
        return <TemplateClassic cv={cv} theme={theme} />;
      case "modern":
        return <TemplateModern cv={cv} theme={theme} />;
      case "simple":
        return <TemplateSimple cv={cv} theme={theme} />;
      default:
        return <TemplateClassic cv={cv} theme={theme} />;
    }
  };

  return (
    <div className={className}>
      <div
        id="cv-document"
        className="mx-auto origin-top-left shadow-2xl print:shadow-none"
        style={{
          transform: "scale(var(--cv-scale, 1))",
          transformOrigin: "top left",
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  );
}
