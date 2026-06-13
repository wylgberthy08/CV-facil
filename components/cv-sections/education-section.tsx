import { GraduationCap } from "lucide-react";
import { formatPeriod } from "@/lib/utils";
import type { Education } from "@/lib/types";

interface EducationSectionProps {
  education: Education[];
  accentColor?: string;
}

export function EducationSection({ education, accentColor = "#2b6cb0" }: EducationSectionProps) {
  if (education.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: accentColor }}>
        <GraduationCap size={14} /> Histórico Acadêmico
      </h3>
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {edu.degree}
                </p>
                <p className="text-xs text-zinc-900">{edu.institution}</p>
              </div>
              <p className="shrink-0 text-xs text-zinc-500">
                {formatPeriod(edu.startDate, edu.endDate, false)}
              </p>
            </div>
            {edu.description && (
              <p className="mt-1 text-xs text-zinc-900">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
