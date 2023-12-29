"use client";
import { useTheme } from "next-themes";
import ThemeSwitch from "./ThemeChanger";

export function Header() {
  // Access current theme information
  const { theme } = useTheme();
  return (
    <header className="w-full max-w-[564px] ">
      <div
        className={`flex items-center justify-between ${
          theme === "dark" ? "text-2" : "text-1"
        }`}
      >
        {/* Main header title */}
        <div className="text-4xl font-bold">calc</div>
        {/* Theme controls container */}
        <div className="flex gap-4">
          {/* Theme label */}
          <h3 className="flex items-end uppercase tracking-widest">theme</h3>
          {/* Theme settings */}
          <div>
            {/* Placeholder elements for potential theme settings */}
            <div className={`flex gap-4 px-1`}>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            {/* Theme switch component */}
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}
