// Indicate that this component should be rendered on the client side
"use client";

// Import components for header, footer, and calculator
import Calculator from "@/components/Calculator/Calculator";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-7 p-6 md:h-screen">
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}
