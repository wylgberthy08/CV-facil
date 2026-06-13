"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, GripVertical } from "lucide-react";
import type { Experience } from "@/lib/types";

interface ExperienceEditorProps {
  experience: Experience[];
  onAdd: () => void;
  onUpdate: (id: string, field: keyof Experience, value: unknown) => void;
  onRemove: (id: string) => void;
  onAddHighlight: (expId: string) => void;
  onUpdateHighlight: (expId: string, index: number, value: string) => void;
  onRemoveHighlight: (expId: string, index: number) => void;
}

export function ExperienceEditor({
  experience,
  onAdd,
  onUpdate,
  onRemove,
  onAddHighlight,
  onUpdateHighlight,
  onRemoveHighlight,
}: ExperienceEditorProps) {
  return (
    <div className="space-y-4">
      {experience.map((exp) => (
        <div
          key={exp.id}
          className="rounded-lg border border-zinc-200  p-3 dark:border-zinc-700 dark:bg-zinc-800/50"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-500">
              {exp.position || "Nova experiência"}
            </span>
            <Button variant="ghost" size="sm" onClick={() => onRemove(exp.id)}>
              <Trash2 size={14} />
            </Button>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Cargo"
                value={exp.position}
                onChange={(e) => onUpdate(exp.id, "position", e.target.value)}
                placeholder="Ex: Auxiliar Administrativo"
              />
              <Input
                label="Empresa"
                value={exp.company}
                onChange={(e) => onUpdate(exp.id, "company", e.target.value)}
                placeholder="Nome da empresa"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Data início"
                type="month"
                value={exp.startDate}
                onChange={(e) => onUpdate(exp.id, "startDate", e.target.value)}
                placeholder="2022-01"
              />
              <Input
                label="Data fim"
                type="month"
                value={exp.endDate}
                disabled={exp.current}
                onChange={(e) => onUpdate(exp.id, "endDate", e.target.value)}
                placeholder="2024-12"
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) => onUpdate(exp.id, "current", e.target.checked)}
                className="rounded border-zinc-300"
              />
              Trabalho atual
            </label>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-500">Realizações</span>
                <Button variant="ghost" size="sm" onClick={() => onAddHighlight(exp.id)}>
                  <Plus size={14} /> Adicionar
                </Button>
              </div>
              {exp.highlights.map((h, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    className="flex-1 rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
                    value={h}
                    onChange={(e) => onUpdateHighlight(exp.id, i, e.target.value)}
                    placeholder="Descreva uma realização..."
                  />
                  <Button variant="ghost" size="sm" onClick={() => onRemoveHighlight(exp.id, i)}>
                    <Trash2 size={14} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <Button variant="secondary" size="sm" onClick={onAdd}>
        <Plus size={16} /> Adicionar Experiência
      </Button>
    </div>
  );
}
