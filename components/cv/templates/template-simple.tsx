import type { CVData, CVTheme } from "@/lib/types";
import { ProfileSummary } from "@/components/cv-sections/profile-summary";
import { WorkExperience } from "@/components/cv-sections/work-experience";
import { EducationSection } from "@/components/cv-sections/education-section";
import { MapPin, Mail, Phone, Globe, Award, GraduationCap } from "lucide-react";
import { languageLevelLabel } from "@/lib/utils";

interface TemplateSimpleProps {
  cv: CVData;
  theme: CVTheme;
}

export function TemplateSimple({ cv, theme }: TemplateSimpleProps) {
  const pi = cv.personalInfo;
  const contact = cv.contact;

  const contactItems = [
    { icon: MapPin, value: contact.address },
    { icon: Mail, value: contact.email },
    { icon: Phone, value: contact.phone },
    { icon: Globe, value: contact.website },
  ];

  return (
    <div className="min-h-[297mm] w-[210mm] bg-white p-8 font-sans">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold tracking-wider" style={{ color: theme.primaryColor }}>
          {pi.firstName} {pi.lastName}
        </h1>
        <p className="mt-1 text-sm font-medium tracking-wider" style={{ color: theme.accentColor }}>
          {pi.headline}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-zinc-500">
          {contactItems.filter((i) => i.value).map((item, idx) => (
            <span key={idx} className="flex items-center gap-1">
              <item.icon size={12} /> {item.value}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-1 h-px w-full bg-zinc-300" />

      <ProfileSummary summary={pi.summary} />

      <WorkExperience experience={cv.experience} accentColor={theme.accentColor} />

      <EducationSection education={cv.education} accentColor={theme.accentColor} />

      {cv.skills.length > 0 && (
        <div className="mb-6">
          <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: theme.accentColor }}>
            <Award size={14} /> Habilidades
          </h3>
          <div className="flex flex-wrap gap-2">
            {cv.skills.map((skill) => (
              <span
                key={skill.id}
                className="rounded-full px-3 py-1 text-xs"
                style={{ backgroundColor: `${theme.accentColor}15`, color: theme.primaryColor }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {cv.languages.length > 0 && (
        <div className="mb-6">
          <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: theme.accentColor }}>
            <GraduationCap size={14} /> Idiomas
          </h3>
          <div className="flex flex-wrap gap-4 text-sm">
            {cv.languages.map((lang) => (
              <span key={lang.id}>
                {lang.name}: <span className="text-zinc-500">{languageLevelLabel(lang.level)}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {cv.awards.length > 0 && (
        <div>
          <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: theme.accentColor }}>
            <Award size={14} /> Prêmios
          </h3>
          <div className="space-y-2">
            {cv.awards.map((award) => (
              <div key={award.id} className="text-sm">
                <p className="font-medium text-zinc-900">{award.title}</p>
                {award.description && (
                  <p className="text-xs text-zinc-900">{award.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
