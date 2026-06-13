import type { CVData } from "./types";

const STORAGE_KEY = "cv-facil-data";
const META_KEY = "cv-facil-meta";

interface CVMeta {
  ids: string[];
  activeId: string | null;
}

function getMeta(): CVMeta {
  if (typeof window === "undefined") return { ids: [], activeId: null };
  try {
    const raw = localStorage.getItem(META_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { ids: [], activeId: null };
}

function saveMeta(meta: CVMeta): void {
  localStorage.setItem(META_KEY, JSON.stringify(meta));
}

export function listCVs(): { id: string; name: string; updatedAt: string }[] {
  const meta = getMeta();
  return meta.ids
    .map((id) => {
      const cv = loadCV(id);
      if (!cv) return null;
      return { id: cv.id, name: cv.name, updatedAt: cv.updatedAt };
    })
    .filter(Boolean) as { id: string; name: string; updatedAt: string }[];
}

export function loadCV(id?: string): CVData | null {
  if (typeof window === "undefined") return null;
  const targetId = id ?? getMeta().activeId;
  if (!targetId) return null;
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY}-${targetId}`);
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
}

export function saveCV(cv: CVData): void {
  const meta = getMeta();
  if (!meta.ids.includes(cv.id)) {
    meta.ids.push(cv.id);
  }
  meta.activeId = cv.id;
  cv.updatedAt = new Date().toISOString();
  saveMeta(meta);
  localStorage.setItem(`${STORAGE_KEY}-${cv.id}`, JSON.stringify(cv));
}

export function deleteCV(id: string): void {
  const meta = getMeta();
  meta.ids = meta.ids.filter((i) => i !== id);
  if (meta.activeId === id) {
    meta.activeId = meta.ids[0] ?? null;
  }
  saveMeta(meta);
  localStorage.removeItem(`${STORAGE_KEY}-${id}`);
}

export function getActiveId(): string | null {
  return getMeta().activeId;
}

export function setActiveId(id: string): void {
  const meta = getMeta();
  meta.activeId = id;
  saveMeta(meta);
}
