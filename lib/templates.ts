import type { TemplateDefinition, CVTheme } from "./types";

export const templates: TemplateDefinition[] = [
  {
    id: "classic",
    name: "Clássico",
    description: "Layout de duas colunas com sidebar azul escuro",
    thumbnail: "classic",
  },
  {
    id: "modern",
    name: "Moderno",
    description: "Layout com header colorido e conteúdo em duas colunas",
    thumbnail: "modern",
  },
  {
    id: "simple",
    name: "Simples",
    description: "Layout de coluna única, ideal para impressão",
    thumbnail: "simple",
  },
];

export const themes: CVTheme[] = [
  {
    id: "classic-blue",
    name: "Azul Clássico",
    primaryColor: "#1a365d",
    accentColor: "#2b6cb0",
    sidebarBg: "#1a365d",
    sidebarText: "#ffffff",
  },
  {
    id: "dark-green",
    name: "Verde Escuro",
    primaryColor: "#22543d",
    accentColor: "#38a169",
    sidebarBg: "#22543d",
    sidebarText: "#ffffff",
  },
  {
    id: "slate",
    name: "Grafite",
    primaryColor: "#1e293b",
    accentColor: "#64748b",
    sidebarBg: "#1e293b",
    sidebarText: "#ffffff",
  },
  {
    id: "warm-brown",
    name: "Marrom",
    primaryColor: "#5d4037",
    accentColor: "#8d6e63",
    sidebarBg: "#5d4037",
    sidebarText: "#ffffff",
  },
  {
    id: "modern-teal",
    name: "Teal Moderno",
    primaryColor: "#0d9488",
    accentColor: "#14b8a6",
    sidebarBg: "#0d9488",
    sidebarText: "#ffffff",
  },
];
