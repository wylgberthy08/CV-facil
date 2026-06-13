"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import type { Award } from "@/lib/types";

interface AwardsEditorProps {
  awards: Award[];
  onAdd: () => void;
  onUpdate: (id: string, field: keyof Award, value: string) => void;
  onRemove: (id: string) => void;
}

export function AwardsEditor({ awards, onAdd, onUpdate, onRemove }: AwardsEditorProps) {
  return (
    <div className="space-y-4">
      {awards.map((award) => (
        <div
          key={award.id}
          className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700 dark:bg-zinc-800/50"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-500">
              {award.title || "Novo prêmio"}
            </span>
            <Button variant="ghost" size="sm" onClick={() => onRemove(award.id)}>
              <Trash2 size={14} />
            </Button>
          </div>
          <div className="space-y-3">
            <Input
              label="Título"
              value={award.title}
              onChange={(e) => onUpdate(award.id, "title", e.target.value)}
              placeholder="Ex: Funcionário do Mês"
            />
            <Input
              label="Data"
              type="month"
              value={award.date}
              onChange={(e) => onUpdate(award.id, "date", e.target.value)}
              placeholder="2024-01"
            />
            <Textarea
              label="Descrição"
              value={award.description}
              onChange={(e) => onUpdate(award.id, "description", e.target.value)}
              placeholder="Descrição do prêmio ou certificação"
              rows={2}
            />
          </div>
        </div>
      ))}
      <Button variant="secondary" size="sm" onClick={onAdd}>
        <Plus size={16} /> Adicionar Prêmio
      </Button>
    </div>
  );
}
