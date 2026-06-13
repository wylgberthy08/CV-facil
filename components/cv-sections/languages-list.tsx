import { languageLevelLabel } from "@/lib/utils";
import type { Language } from "@/lib/types";
import { Globe } from "lucide-react";

interface LanguagesListProps {
  languages: Language[];
  variant?: "sidebar" | "main";
  textColor?: string;
}

export function LanguagesList({ languages, variant = "sidebar", textColor = "text-white" }: LanguagesListProps) {
  if (languages.length === 0) return null;

  if (variant === "sidebar") {
    return (
      <div className="mb-6">
        <h3 className={`mb-3 text-xs font-semibold uppercase tracking-widest opacity-80 ${textColor}`}>
          Idiomas
        </h3>
        <div className="space-y-2">
          {languages.map((lang) => (
            <div key={lang.id} className="flex items-center justify-between text-xs">
              <span className={textColor}>{lang.name}</span>
              <span className="opacity-70">{languageLevelLabel(lang.level)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
        <Globe size={14} /> Idiomas
      </h3>
      <div className="space-y-1">
        {languages.map((lang) => (
          <div key={lang.id} className="flex items-center justify-between text-sm">
            <span>{lang.name}</span>
            <span className="text-zinc-500">{languageLevelLabel(lang.level)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
