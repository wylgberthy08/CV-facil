"use client";

import { templates, themes } from "@/lib/templates";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface TemplateSelectorProps {
  selectedTemplate: string;
  selectedTheme: string;
  onTemplateChange: (id: string) => void;
  onThemeChange: (id: string) => void;
}

export function TemplateSelector({
  selectedTemplate,
  selectedTheme,
  onTemplateChange,
  onThemeChange,
}: TemplateSelectorProps) {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Template
        </h4>
        <div className="grid grid-cols-3 gap-2">
          {templates.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => onTemplateChange(tpl.id)}
              className={cn(
                "flex flex-col items-center gap-1 rounded-lg border-2 p-3 text-center transition-colors",
                selectedTemplate === tpl.id
                  ? "border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-950"
                  : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-500"
              )}
            >
              <div
                className={cn(
                  "flex h-12 w-full items-center justify-center rounded text-[10px] font-bold",
                  tpl.id === "classic" && "bg-gradient-to-r from-blue-900 to-blue-900 text-white",
                  tpl.id === "modern" && "bg-gradient-to-b from-blue-900 via-blue-900 to-white text-white",
                  tpl.id === "simple" && "bg-white text-blue-900 ring-1 ring-zinc-200"
                )}
              >
                {tpl.id === "classic" && "2 col"}
                {tpl.id === "modern" && "header"}
                {tpl.id === "simple" && "1 col"}
              </div>
              <span className="text-xs font-medium text-white">{tpl.name}</span>
              {selectedTemplate === tpl.id && (
                <Check size={14} className="text-blue-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Tema de Cores
        </h4>
        <div className="flex flex-wrap gap-2">
          {themes.map((th) => (
            <button
              key={th.id}
              onClick={() => onThemeChange(th.id)}
              className={cn(
                "flex items-center gap-2 rounded-lg border-2 px-3 py-2 text-xs transition-colors",
                selectedTheme === th.id
                  ? "border-blue-500"
                  : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-500"
              )}
            >
              <div
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: th.primaryColor }}
              />
              <span className="text-white">{th.name}</span>
              {selectedTheme === th.id && <Check size={12} className="text-blue-600" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
