import type { CVData, CVTheme } from "@/lib/types";
import { PhotoSection } from "@/components/cv-sections/photo-section";
import { ContactInfo } from "@/components/cv-sections/contact-info";
import { SkillsList } from "@/components/cv-sections/skills-list";
import { LanguagesList } from "@/components/cv-sections/languages-list";
import { AwardsList } from "@/components/cv-sections/awards-list";
import { ProfileSummary } from "@/components/cv-sections/profile-summary";
import { WorkExperience } from "@/components/cv-sections/work-experience";
import { EducationSection } from "@/components/cv-sections/education-section";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

interface TemplateModernProps {
  cv: CVData;
  theme: CVTheme;
}

export function TemplateModern({ cv, theme }: TemplateModernProps) {
  const pi = cv.personalInfo;
  const contact = cv.contact;

  const contactItems = [
    { icon: MapPin, value: contact.address },
    { icon: Mail, value: contact.email },
    { icon: Phone, value: contact.phone },
    { icon: Globe, value: contact.website },
  ];

  return (
    <div className="min-h-[297mm] w-[210mm] bg-white font-sans">
      <div
        className="flex items-center gap-6 p-6 pb-4"
        style={{ backgroundColor: theme.primaryColor, color: "#ffffff" }}
      >
        <PhotoSection
          photo={cv.photo}
          firstName={pi.firstName}
          lastName={pi.lastName}
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-wider">{pi.firstName} {pi.lastName}</h1>
          <div className="my-1 h-0.5 w-20 rounded" style={{ backgroundColor: theme.accentColor }} />
          <p className="text-sm font-medium tracking-wider opacity-90">{pi.headline}</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs opacity-80">
            {contactItems.map((item, i) => (
              <span key={i} className="flex items-center gap-1">
                <item.icon size={12} /> {item.value}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row p-6 gap-6">
        <div className="w-[35%] space-y-5">
          {pi.summary && (
            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: theme.accentColor }}>
                Sobre
              </h3>
              <p className="text-xs leading-relaxed text-zinc-900">{pi.summary}</p>
            </div>
          )}
          <SkillsList skills={cv.skills} textColor="text-zinc-800" dotColor={theme.accentColor} />
          <LanguagesList languages={cv.languages} variant="sidebar" textColor="text-zinc-800" />
          <AwardsList awards={cv.awards} textColor="text-zinc-800" />
        </div>
        <div className="w-[65%]">
          <WorkExperience experience={cv.experience} accentColor={theme.accentColor} />
          <EducationSection education={cv.education} accentColor={theme.accentColor} />
        </div>
      </div>
    </div>
  );
}
