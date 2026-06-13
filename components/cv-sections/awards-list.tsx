import { Award } from "lucide-react";
import type { Award as AwardType } from "@/lib/types";

interface AwardsListProps {
  awards: AwardType[];
  textColor?: string;
}

export function AwardsList({ awards, textColor = "text-white" }: AwardsListProps) {
  if (awards.length === 0) return null;

  return (
    <div>
      <h3 className={`mb-3 text-xs font-semibold uppercase tracking-widest opacity-80 ${textColor}`}>
        Prêmios
      </h3>
      <div className="space-y-3">
        {awards.map((award) => (
          <div key={award.id} className="flex gap-2 text-xs">
            <Award size={14} className="mt-0.5 shrink-0 opacity-70" />
            <div>
              <p className={`font-medium ${textColor}`}>{award.title}</p>
              {award.date && <p className="mt-0.5 opacity-70">{award.date}</p>}
              {award.description && <p className="mt-0.5 opacity-60">{award.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
