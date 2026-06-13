import type { PersonalInfo } from "@/lib/types";

interface PersonalHeaderProps {
  personalInfo: PersonalInfo;
  primaryColor?: string;
  accentColor?: string;
}

export function PersonalHeader({
  personalInfo,
  primaryColor = "#1a365d",
  accentColor = "#2b6cb0",
}: PersonalHeaderProps) {
  return (
    <div className="mb-6">
      <h1
        className="text-2xl font-bold tracking-wider"
        style={{ color: primaryColor }}
      >
        {personalInfo.firstName} {personalInfo.lastName}
      </h1>
      <div className="my-2 h-px w-full bg-zinc-300" />
      <p className="text-sm font-medium tracking-wider" style={{ color: accentColor }}>
        {personalInfo.headline}
      </p>
    </div>
  );
}
