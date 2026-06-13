import { MapPin, Mail, Phone, Globe } from "lucide-react";
import type { Contact } from "@/lib/types";

interface ContactInfoProps {
  contact: Contact;
  textColor?: string;
}

export function ContactInfo({ contact, textColor = "text-white" }: ContactInfoProps) {
  const items = [
    { icon: MapPin, value: contact.address },
    { icon: Mail, value: contact.email },
    { icon: Phone, value: contact.phone },
    { icon: Globe, value: contact.website },
  ];

  return (
    <div className="mb-6">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest opacity-80">
        Contato
      </h3>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2 text-xs leading-tight">
            <item.icon size={14} className="mt-0.5 shrink-0 opacity-70" />
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
