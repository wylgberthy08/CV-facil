"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import type { Language } from "@/lib/types";

interface LanguagesEditorProps {
  languages: Language[];
  onAdd: () => void;
  onUpdate: (id: string, field: keyof Language, value: string) => void;
  onRemove: (id: string) => void;
}

const levels = [
  { value: "basic", label: "Básico" },
  { value: "intermediate", label: "Intermediário" },
  { value: "advanced", label: "Avançado" },
  { value: "fluent", label: "Fluente" },
  { value: "native", label: "Nativo" },
];

export function LanguagesEditor({ languages, onAdd, onUpdate, onRemove }: LanguagesEditorProps) {
  return (
    <div className="space-y-3">
      {languages.map((lang) => (
        <div key={lang.id} className="flex items-end gap-2">
          <div className="flex-1">
            <Input
              value={lang.name}
              onChange={(e) => onUpdate(lang.id, "name", e.target.value)}
              placeholder="Idioma"
            />
          </div>
          <div className="w-32">
            <select
              value={lang.level}
              onChange={(e) => onUpdate(lang.id, "level", e.target.value)}
              className="h-10 w-full rounded-lg border border-zinc-300 bg-white px-2 text-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
            >
              {levels.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onRemove(lang.id)}>
            <Trash2 size={16} />
          </Button>
        </div>
      ))}
      <Button variant="secondary" size="sm" onClick={onAdd}>
        <Plus size={16} /> Adicionar Idioma
      </Button>
    </div>
  );
}
