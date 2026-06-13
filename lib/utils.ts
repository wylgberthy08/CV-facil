export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  const months = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dez",
  ];
  return `${months[parseInt(month, 10) - 1]}/${year}`;
}

export function formatPeriod(start: string, end: string, current: boolean): string {
  const s = formatDate(start);
  const e = current ? "Presente" : formatDate(end);
  return `${s} — ${e}`;
}

export function languageLevelLabel(level: string): string {
  const labels: Record<string, string> = {
    basic: "Básico",
    intermediate: "Intermediário",
    advanced: "Avançado",
    fluent: "Fluente",
    native: "Nativo",
  };
  return labels[level] ?? level;
}
