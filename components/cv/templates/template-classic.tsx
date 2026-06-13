import type { CVData, CVTheme } from "@/lib/types";
import { PhotoSection } from "@/components/cv-sections/photo-section";
import { ContactInfo } from "@/components/cv-sections/contact-info";
import { SkillsList } from "@/components/cv-sections/skills-list";
import { LanguagesList } from "@/components/cv-sections/languages-list";
import { AwardsList } from "@/components/cv-sections/awards-list";
import { PersonalHeader } from "@/components/cv-sections/personal-header";
import { ProfileSummary } from "@/components/cv-sections/profile-summary";
import { WorkExperience } from "@/components/cv-sections/work-experience";
import { EducationSection } from "@/components/cv-sections/education-section";

interface TemplateClassicProps {
  cv: CVData;
  theme: CVTheme;
}

export function TemplateClassic({ cv, theme }: TemplateClassicProps) {
  return (
    <div className="flex min-h-[297mm] w-[210mm] flex-row font-sans">
      <div
        className="flex w-[35%] flex-col p-6"
        style={{ backgroundColor: theme.sidebarBg, color: theme.sidebarText }}
      >
        <PhotoSection
          photo={cv.photo}
          firstName={cv.personalInfo.firstName}
          lastName={cv.personalInfo.lastName}
        />
        <ContactInfo contact={cv.contact} />
        <SkillsList skills={cv.skills} dotColor={theme.accentColor} />
        <LanguagesList languages={cv.languages} variant="sidebar" />
        <AwardsList awards={cv.awards} />
      </div>
      <div className="flex w-[65%] flex-col p-6">
        <PersonalHeader
          personalInfo={cv.personalInfo}
          primaryColor={theme.primaryColor}
          accentColor={theme.accentColor}
        />
        <ProfileSummary summary={cv.personalInfo.summary} />
        <WorkExperience experience={cv.experience} accentColor={theme.accentColor} />
        <EducationSection education={cv.education} accentColor={theme.accentColor} />
        {cv.languages.length > 0 && (
          <LanguagesList languages={cv.languages} variant="main" />
        )}
      </div>
    </div>
  );
}
