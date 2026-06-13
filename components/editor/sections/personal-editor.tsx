"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { PersonalInfo } from "@/lib/types";

interface PersonalEditorProps {
  data: PersonalInfo;
  onChange: (field: string, value: string) => void;
}

export function PersonalEditor({ data, onChange }: PersonalEditorProps) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Nome"
          id="firstName"
          value={data.firstName}
          onChange={(e) => onChange("firstName", e.target.value)}
          placeholder="Seu nome"
        />
        <Input
          label="Sobrenome"
          id="lastName"
          value={data.lastName}
          onChange={(e) => onChange("lastName", e.target.value)}
          placeholder="Seu sobrenome"
        />
      </div>
      <Input
        label="Cargo / Headline"
        id="headline"
        value={data.headline}
        onChange={(e) => onChange("headline", e.target.value)}
        placeholder="Ex: Auxiliar Administrativo"
      />
      <Textarea
        label="Resumo Profissional"
        id="summary"
        value={data.summary}
        onChange={(e) => onChange("summary", e.target.value)}
        placeholder="Breve resumo sobre sua trajetória profissional..."
      />
    </div>
  );
}
