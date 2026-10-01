"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return <button aria-label="Toggle colour theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] transition hover:bg-[var(--ink)] hover:text-[var(--bg)]">{resolvedTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}</button>;
}
