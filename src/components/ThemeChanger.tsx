"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  // State to track component readiness for client-side rendering
  const [mounted, setMounted] = useState(false);
  // Access current theme and theme-setting function
  const { theme, setTheme } = useTheme();

  // Ensure UI renders only on the client side
  useEffect(() => {
    setMounted(true);
  }, []); // Empty dependency array ensures effect runs only once

  // Return null if component is not yet mounted on the client
  if (!mounted) {
    return null;
  }

  // Available theme options
  const themeOptions = ["light", "dark", "punk"];
  const currentIndex = themeOptions.indexOf(theme || "");

  // Handle theme toggle
  const handleToggle = () => {
    const nextIndex = (currentIndex + 1) % themeOptions.length;
    setTheme(themeOptions[nextIndex]); // Switch to the next theme
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`flex h-6 w-[70px] items-center rounded-full bg-toggle px-0.5`}
    >
      <span
        className={`h-[18px] w-[18px] rounded-full bg-secondary transition duration-500 ease-in-out
        ${theme === "light" ? "translate-x-0" : ""}
        ${theme === "dark" ? "translate-x-[20px]" : ""}
        ${theme === "punk" ? "translate-x-[42px]" : ""}`}
      ></span>
    </button>
  );
};

export default ThemeSwitch;
