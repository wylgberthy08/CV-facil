"use client";

import { useState, useEffect, useCallback } from "react";
import type { CVData, Skill, Experience, Education, Language, Award } from "@/lib/types";
import { createDefaultCV } from "@/lib/defaults";
import * as storage from "@/lib/storage";
import { createId } from "@/lib/types";

export function useCVData() {
  const [cv, setCV] = useState<CVData | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const existing = storage.loadCV();
    if (existing) {
      setCV(existing);
    } else {
      const newCV = createDefaultCV();
      storage.saveCV(newCV);
      setCV(newCV);
    }
    setIsLoaded(true);
  }, []);

  const updateCV = useCallback((updater: (prev: CVData) => CVData) => {
    setCV((prev) => {
      if (!prev) return prev;
      const updated = updater(prev);
      updated.updatedAt = new Date().toISOString();
      storage.saveCV(updated);
      return updated;
    });
  }, []);

  const updatePersonalInfo = useCallback(
    (field: string, value: string) => {
      updateCV((prev) => ({
        ...prev,
        personalInfo: { ...prev.personalInfo, [field]: value },
      }));
    },
    [updateCV]
  );

  const updateContact = useCallback(
    (field: string, value: string) => {
      updateCV((prev) => ({
        ...prev,
        contact: { ...prev.contact, [field]: value },
      }));
    },
    [updateCV]
  );

  const updatePhoto = useCallback((photo: string) => {
    updateCV((prev) => ({ ...prev, photo }));
  }, [updateCV]);

  const addSkill = useCallback(() => {
    updateCV((prev) => ({
      ...prev,
      skills: [...prev.skills, { id: createId(), name: "", level: 3 }],
    }));
  }, [updateCV]);

  const updateSkill = useCallback(
    (id: string, field: keyof Skill, value: string | number) => {
      updateCV((prev) => ({
        ...prev,
        skills: prev.skills.map((s) => (s.id === id ? { ...s, [field]: value } : s)),
      }));
    },
    [updateCV]
  );

  const removeSkill = useCallback(
    (id: string) => {
      updateCV((prev) => ({
        ...prev,
        skills: prev.skills.filter((s) => s.id !== id),
      }));
    },
    [updateCV]
  );

  const addExperience = useCallback(() => {
    updateCV((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: createId(),
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
          highlights: [],
        },
      ],
    }));
  }, [updateCV]);

  const updateExperience = useCallback(
    (id: string, field: keyof Experience, value: unknown) => {
      updateCV((prev) => ({
        ...prev,
        experience: prev.experience.map((e) =>
          e.id === id ? { ...e, [field]: value } : e
        ),
      }));
    },
    [updateCV]
  );

  const removeExperience = useCallback(
    (id: string) => {
      updateCV((prev) => ({
        ...prev,
        experience: prev.experience.filter((e) => e.id !== id),
      }));
    },
    [updateCV]
  );

  const addHighlight = useCallback(
    (expId: string) => {
      updateCV((prev) => ({
        ...prev,
        experience: prev.experience.map((e) =>
          e.id === expId ? { ...e, highlights: [...e.highlights, ""] } : e
        ),
      }));
    },
    [updateCV]
  );

  const updateHighlight = useCallback(
    (expId: string, index: number, value: string) => {
      updateCV((prev) => ({
        ...prev,
        experience: prev.experience.map((e) => {
          if (e.id !== expId) return e;
          const highlights = [...e.highlights];
          highlights[index] = value;
          return { ...e, highlights };
        }),
      }));
    },
    [updateCV]
  );

  const removeHighlight = useCallback(
    (expId: string, index: number) => {
      updateCV((prev) => ({
        ...prev,
        experience: prev.experience.map((e) => {
          if (e.id !== expId) return e;
          return {
            ...e,
            highlights: e.highlights.filter((_, i) => i !== index),
          };
        }),
      }));
    },
    [updateCV]
  );

  const addEducation = useCallback(() => {
    updateCV((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: createId(),
          institution: "",
          degree: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  }, [updateCV]);

  const updateEducation = useCallback(
    (id: string, field: keyof Education, value: string) => {
      updateCV((prev) => ({
        ...prev,
        education: prev.education.map((e) =>
          e.id === id ? { ...e, [field]: value } : e
        ),
      }));
    },
    [updateCV]
  );

  const removeEducation = useCallback(
    (id: string) => {
      updateCV((prev) => ({
        ...prev,
        education: prev.education.filter((e) => e.id !== id),
      }));
    },
    [updateCV]
  );

  const addLanguage = useCallback(() => {
    updateCV((prev) => ({
      ...prev,
      languages: [
        ...prev.languages,
        { id: createId(), name: "", level: "basic" as const },
      ],
    }));
  }, [updateCV]);

  const updateLanguage = useCallback(
    (id: string, field: keyof Language, value: string) => {
      updateCV((prev) => ({
        ...prev,
        languages: prev.languages.map((l) =>
          l.id === id ? { ...l, [field]: value } : l
        ),
      }));
    },
    [updateCV]
  );

  const removeLanguage = useCallback(
    (id: string) => {
      updateCV((prev) => ({
        ...prev,
        languages: prev.languages.filter((l) => l.id !== id),
      }));
    },
    [updateCV]
  );

  const addAward = useCallback(() => {
    updateCV((prev) => ({
      ...prev,
      awards: [
        ...prev.awards,
        {
          id: createId(),
          title: "",
          date: "",
          description: "",
        },
      ],
    }));
  }, [updateCV]);

  const updateAward = useCallback(
    (id: string, field: keyof Award, value: string) => {
      updateCV((prev) => ({
        ...prev,
        awards: prev.awards.map((a) =>
          a.id === id ? { ...a, [field]: value } : a
        ),
      }));
    },
    [updateCV]
  );

  const removeAward = useCallback(
    (id: string) => {
      updateCV((prev) => ({
        ...prev,
        awards: prev.awards.filter((a) => a.id !== id),
      }));
    },
    [updateCV]
  );

  const changeTemplate = useCallback(
    (templateId: string) => {
      updateCV((prev) => ({ ...prev, templateId }));
    },
    [updateCV]
  );

  const changeTheme = useCallback(
    (themeId: string) => {
      updateCV((prev) => ({ ...prev, themeId }));
    },
    [updateCV]
  );

  const createNew = useCallback(() => {
    const newCV = createDefaultCV();
    storage.saveCV(newCV);
    setCV(newCV);
  }, []);

  const loadCV = useCallback((id: string) => {
    const data = storage.loadCV(id);
    if (data) {
      storage.setActiveId(id);
      setCV(data);
    }
  }, []);

  return {
    cv,
    isLoaded,
    updatePersonalInfo,
    updateContact,
    updatePhoto,
    addSkill,
    updateSkill,
    removeSkill,
    addExperience,
    updateExperience,
    removeExperience,
    addHighlight,
    updateHighlight,
    removeHighlight,
    addEducation,
    updateEducation,
    removeEducation,
    addLanguage,
    updateLanguage,
    removeLanguage,
    addAward,
    updateAward,
    removeAward,
    changeTemplate,
    changeTheme,
    createNew,
    loadCV,
  };
}
