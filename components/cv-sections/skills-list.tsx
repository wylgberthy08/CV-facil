import type { Skill } from "@/lib/types";

interface SkillsListProps {
  skills: Skill[];
  textColor?: string;
  dotColor?: string;
}

export function SkillsList({ skills, textColor = "text-white", dotColor = "bg-white" }: SkillsListProps) {
  return (
    <div className="mb-6">
      <h3 className={`mb-3 text-xs font-semibold uppercase tracking-widest opacity-80 ${textColor}`}>
        Habilidades
      </h3>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.id}>
            <p className={`mb-1 text-xs ${textColor}`}>{skill.name}</p>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i < skill.level ? dotColor : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
