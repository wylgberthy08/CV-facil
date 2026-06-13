import { User } from "lucide-react";

interface ProfileSummaryProps {
  summary: string;
}

export function ProfileSummary({ summary }: ProfileSummaryProps) {
  if (!summary) return null;

  return (
    <div className="mb-6">
      <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
        <User size={14} /> Perfil Pessoal
      </h3>
      <p className="text-sm leading-relaxed text-zinc-900">
        {summary}
      </p>
    </div>
  );
}
