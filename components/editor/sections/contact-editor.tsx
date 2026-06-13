"use client";

import { Input } from "@/components/ui/input";
import type { Contact } from "@/lib/types";

interface ContactEditorProps {
  data: Contact;
  onChange: (field: string, value: string) => void;
}

export function ContactEditor({ data, onChange }: ContactEditorProps) {
  return (
    <div className="space-y-3">
      <Input
        label="Endereço"
        id="address"
        value={data.address}
        onChange={(e) => onChange("address", e.target.value)}
        placeholder="Ex: Rua, número, bairro, cidade - UF"
      />
      <Input
        label="E-mail"
        id="email"
        type="email"
        value={data.email}
        onChange={(e) => onChange("email", e.target.value)}
        placeholder="seu@email.com"
      />
      <Input
        label="Telefone"
        id="phone"
        type="tel"
        value={data.phone}
        onChange={(e) => onChange("phone", e.target.value)}
        placeholder="(11) 99999-8888"
      />
      <Input
        label="Site / Portfólio"
        id="website"
        value={data.website}
        onChange={(e) => onChange("website", e.target.value)}
        placeholder="seudominio.com"
      />
    </div>
  );
}
