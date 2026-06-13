"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import type { Skill } from "@/lib/types";

interface SkillsEditorProps {
  skills: Skill[];
  onAdd: () => void;
  onUpdate: (id: string, field: keyof Skill, value: string | number) => void;
  onRemove: (id: string) => void;
}

export function SkillsEditor({ skills, onAdd, onUpdate, onRemove }: SkillsEditorProps) {
  return (
    <div className="space-y-3">
      {skills.map((skill) => (
        <div key={skill.id} className="flex items-end gap-2">
          <div className="flex-1">
            <Input
              value={skill.name}
              onChange={(e) => onUpdate(skill.id, "name", e.target.value)}
              placeholder="Nome da habilidade"
            />
          </div>
          <div className="w-20">
            <select
              value={skill.level}
              onChange={(e) => onUpdate(skill.id, "level", parseInt(e.target.value))}
              className="h-10 w-full rounded-lg border border-zinc-300 bg-white px-2 text-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}/5
                </option>
              ))}
            </select>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onRemove(skill.id)}>
            <Trash2 size={16} />
          </Button>
        </div>
      ))}
      <Button variant="secondary" size="sm" onClick={onAdd}>
        <Plus size={16} /> Adicionar Habilidade
      </Button>
    </div>
  );
}
