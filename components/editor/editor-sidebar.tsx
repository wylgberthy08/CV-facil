"use client";

import { useState } from "react";
import type { CVData } from "@/lib/types";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PersonalEditor } from "./sections/personal-editor";
import { ContactEditor } from "./sections/contact-editor";
import { SkillsEditor } from "./sections/skills-editor";
import { ExperienceEditor } from "./sections/experience-editor";
import { EducationEditor } from "./sections/education-editor";
import { LanguagesEditor } from "./sections/languages-editor";
import { AwardsEditor } from "./sections/awards-editor";
import { PhotoUpload } from "./photo-upload";
import { TemplateSelector } from "./template-selector";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface EditorSidebarProps {
  cv: CVData;
  onUpdatePersonalInfo: (field: string, value: string) => void;
  onUpdateContact: (field: string, value: string) => void;
  onUpdatePhoto: (photo: string) => void;
  onAddSkill: () => void;
  onUpdateSkill: (id: string, field: keyof import("@/lib/types").Skill, value: string | number) => void;
  onRemoveSkill: (id: string) => void;
  onAddExperience: () => void;
  onUpdateExperience: (id: string, field: keyof import("@/lib/types").Experience, value: unknown) => void;
  onRemoveExperience: (id: string) => void;
  onAddHighlight: (expId: string) => void;
  onUpdateHighlight: (expId: string, index: number, value: string) => void;
  onRemoveHighlight: (expId: string, index: number) => void;
  onAddEducation: () => void;
  onUpdateEducation: (id: string, field: keyof import("@/lib/types").Education, value: string) => void;
  onRemoveEducation: (id: string) => void;
  onAddLanguage: () => void;
  onUpdateLanguage: (id: string, field: keyof import("@/lib/types").Language, value: string) => void;
  onRemoveLanguage: (id: string) => void;
  onAddAward: () => void;
  onUpdateAward: (id: string, field: keyof import("@/lib/types").Award, value: string) => void;
  onRemoveAward: (id: string) => void;
  onChangeTemplate: (id: string) => void;
  onChangeTheme: (id: string) => void;
}

interface SectionState {
  personal: boolean;
  photo: boolean;
  contact: boolean;
  skills: boolean;
  experience: boolean;
  education: boolean;
  languages: boolean;
  awards: boolean;
  template: boolean;
}

export function EditorSidebar({
  cv,
  onUpdatePersonalInfo,
  onUpdateContact,
  onUpdatePhoto,
  onAddSkill,
  onUpdateSkill,
  onRemoveSkill,
  onAddExperience,
  onUpdateExperience,
  onRemoveExperience,
  onAddHighlight,
  onUpdateHighlight,
  onRemoveHighlight,
  onAddEducation,
  onUpdateEducation,
  onRemoveEducation,
  onAddLanguage,
  onUpdateLanguage,
  onRemoveLanguage,
  onAddAward,
  onUpdateAward,
  onRemoveAward,
  onChangeTemplate,
  onChangeTheme,
}: EditorSidebarProps) {
  const [sections, setSections] = useState<SectionState>({
    personal: true,
    photo: true,
    contact: true,
    skills: true,
    experience: true,
    education: true,
    languages: true,
    awards: true,
    template: true,
  });

  const toggle = (key: keyof SectionState) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const SectionToggle = ({
    section,
    title,
  }: {
    section: keyof SectionState;
    title: string;
  }) => (
    <button
      onClick={() => toggle(section)}
      className="flex items-center gap-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300"
    >
      {sections[section] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      {title}
    </button>
  );

  return (
    <div className="h-full space-y-4 overflow-y-auto p-4">
      <Card>
        <CardHeader>
          <SectionToggle section="template" title="Template e Cores" />
        </CardHeader>
        {sections.template && (
          <div className="px-4 pb-4">
            <TemplateSelector
              selectedTemplate={cv.templateId}
              selectedTheme={cv.themeId}
              onTemplateChange={onChangeTemplate}
              onThemeChange={onChangeTheme}
            />
          </div>
        )}
      </Card>

      <Card>
        <CardHeader>
          <SectionToggle section="personal" title="Dados Pessoais" />
        </CardHeader>
        {sections.personal && (
          <div className="px-4 pb-4">
            <PersonalEditor
              data={cv.personalInfo}
              onChange={onUpdatePersonalInfo}
            />
          </div>
        )}
      </Card>

      <Card>
        <CardHeader>
          <SectionToggle section="photo" title="Foto" />
        </CardHeader>
        {sections.photo && (
          <div className="px-4 pb-4">
            <PhotoUpload
              photo={cv.photo}
              firstName={cv.personalInfo.firstName}
              lastName={cv.personalInfo.lastName}
              onChange={onUpdatePhoto}
            />
          </div>
        )}
      </Card>

      <Card>
        <CardHeader>
          <SectionToggle section="contact" title="Contato" />
        </CardHeader>
        {sections.contact && (
          <div className="px-4 pb-4">
            <ContactEditor data={cv.contact} onChange={onUpdateContact} />
          </div>
        )}
      </Card>

      <Card>
        <CardHeader>
          <SectionToggle section="skills" title="Habilidades" />
        </CardHeader>
        {sections.skills && (
          <div className="px-4 pb-4">
            <SkillsEditor
              skills={cv.skills}
              onAdd={onAddSkill}
              onUpdate={onUpdateSkill}
              onRemove={onRemoveSkill}
            />
          </div>
        )}
      </Card>

      <Card>
        <CardHeader>
          <SectionToggle section="experience" title="Experiência" />
        </CardHeader>
        {sections.experience && (
          <div className="px-4 pb-4">
            <ExperienceEditor
              experience={cv.experience}
              onAdd={onAddExperience}
              onUpdate={onUpdateExperience}
              onRemove={onRemoveExperience}
              onAddHighlight={onAddHighlight}
              onUpdateHighlight={onUpdateHighlight}
              onRemoveHighlight={onRemoveHighlight}
            />
          </div>
        )}
      </Card>

      <Card>
        <CardHeader>
          <SectionToggle section="education" title="Formação" />
        </CardHeader>
        {sections.education && (
          <div className="px-4 pb-4">
            <EducationEditor
              education={cv.education}
              onAdd={onAddEducation}
              onUpdate={onUpdateEducation}
              onRemove={onRemoveEducation}
            />
          </div>
        )}
      </Card>

      <Card>
        <CardHeader>
          <SectionToggle section="languages" title="Idiomas" />
        </CardHeader>
        {sections.languages && (
          <div className="px-4 pb-4">
            <LanguagesEditor
              languages={cv.languages}
              onAdd={onAddLanguage}
              onUpdate={onUpdateLanguage}
              onRemove={onRemoveLanguage}
            />
          </div>
        )}
      </Card>

      <Card>
        <CardHeader>
          <SectionToggle section="awards" title="Certificações / Cursos" />
        </CardHeader>
        {sections.awards && (
          <div className="px-4 pb-4">
            <AwardsEditor
              awards={cv.awards}
              onAdd={onAddAward}
              onUpdate={onUpdateAward}
              onRemove={onRemoveAward}
            />
          </div>
        )}
      </Card>
    </div>
  );
}
