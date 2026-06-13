import { Briefcase } from "lucide-react";
import { formatPeriod } from "@/lib/utils";
import type { Experience } from "@/lib/types";

interface WorkExperienceProps {
  experience: Experience[];
  accentColor?: string;
}

export function WorkExperience({ experience, accentColor = "#2b6cb0" }: WorkExperienceProps) {
  if (experience.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: accentColor }}>
        <Briefcase size={14} /> Experiência Profissional
      </h3>
      <div className="space-y-4">
        {experience.map((exp) => (
          <div key={exp.id}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {exp.position}
                </p>
                <p className="text-xs text-zinc-900">{exp.company}</p>
              </div>
              <p className="shrink-0 text-xs text-zinc-500">
                {formatPeriod(exp.startDate, exp.endDate, exp.current)}
              </p>
            </div>
            {exp.highlights.length > 0 && (
              <ul className="mt-2 list-inside list-disc space-y-1 text-xs text-zinc-900">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
