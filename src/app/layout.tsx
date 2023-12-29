import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "../styles/globals.css";
import { Providers } from "./providers";

// Load the League Spartan font
const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

// Define app metadata
export const metadata: Metadata = {
  title: "Calculator App",
  generator: "Next.js",
  applicationName: "Calculator App",
  referrer: "origin-when-cross-origin",
  keywords: [
    "calculator",
    "math",
    "arithmetic",
    "Next.js",
    "React",
    "JavaScript",
    "frontend mentor",
  ],
  authors: [
    { name: "Barcaca", url: "https://www.frontendmentor.io/profile/Barcaca" },
  ],
  creator: "Barcaca",
  publisher: "Barcaca",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Export the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-main  ${league_spartan.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
