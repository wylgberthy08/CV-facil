"use client";

import { useState, useEffect, useCallback } from "react";

export function useDarkMode(): [boolean, () => void] {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cv-facil-dark");
    if (stored !== null) {
      setIsDark(stored === "true");
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("cv-facil-dark", String(isDark));
  }, [isDark]);

  const toggle = useCallback(() => setIsDark((prev) => !prev), []);

  return [isDark, toggle];
}
