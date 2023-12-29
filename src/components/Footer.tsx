import { useTheme } from "next-themes";

export function Footer() {
  // Access current theme information
  const { theme } = useTheme();
  return (
    <footer className={`text-center ${theme === "dark" ? "text-2" : "text-1"}`}>
      {/* Display footer content with conditional styling */}
      Challenge by{" "}
      <a
        className="text-secondary"
        rel="noopener"
        target="_blank"
        href="https://www.frontendmentor.io?ref=challenge"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="text-secondary"
        rel="noopener"
        target="_blank"
        href="https://www.frontendmentor.io/profile/Barcaca"
      >
        Luan Barcaça
      </a>
      .
    </footer>
  );
}
