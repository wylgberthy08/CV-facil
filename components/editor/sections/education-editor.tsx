"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import type { Education } from "@/lib/types";

interface EducationEditorProps {
  education: Education[];
  onAdd: () => void;
  onUpdate: (id: string, field: keyof Education, value: string) => void;
  onRemove: (id: string) => void;
}

export function EducationEditor({ education, onAdd, onUpdate, onRemove }: EducationEditorProps) {
  return (
    <div className="space-y-4">
      {education.map((edu) => (
        <div
          key={edu.id}
          className="rounded-lg border border-zinc-200  p-3 dark:border-zinc-700 dark:bg-zinc-800/50"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-500">
              {edu.degree || "Nova formação"}
            </span>
            <Button variant="ghost" size="sm" onClick={() => onRemove(edu.id)}>
              <Trash2 size={14} />
            </Button>
          </div>
          <div className="space-y-3">
            <Input
              label="Curso / Diploma"
              value={edu.degree}
              onChange={(e) => onUpdate(edu.id, "degree", e.target.value)}
              placeholder="Ex: Técnico em Administração"
            />
            <Input
              label="Instituição"
              value={edu.institution}
              onChange={(e) => onUpdate(edu.id, "institution", e.target.value)}
              placeholder="Nome da instituição"
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Data início"
                type="month"
                value={edu.startDate}
                onChange={(e) => onUpdate(edu.id, "startDate", e.target.value)}
                placeholder="2022-01"
              />
              <Input
                label="Data fim"
                type="month"
                value={edu.endDate}
                onChange={(e) => onUpdate(edu.id, "endDate", e.target.value)}
                placeholder="2024-12"
              />
            </div>
            <Textarea
              label="Descrição (opcional)"
              value={edu.description}
              onChange={(e) => onUpdate(edu.id, "description", e.target.value)}
              placeholder="Ex: Principais disciplinas e atividades..."
              rows={2}
            />
          </div>
        </div>
      ))}
      <Button variant="secondary" size="sm" onClick={onAdd}>
        <Plus size={16} /> Adicionar Formação
      </Button>
    </div>
  );
}
