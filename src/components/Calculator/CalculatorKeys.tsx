// components/CalculatorButtons.tsx
import React from "react";
import cn from "@/utils/cn"; // Import utility for class name composition
import { VariantProps, cva } from "class-variance-authority"; // Import for managing class variants

// Define the button variants for different intents and sizes
const buttonVariants = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "rounded",
    "border-b-[3px]",
    "uppercase",
    "text-[32px]",
  ],
  {
    variants: {
      intent: {
        primary: [
          "text-white",
          "text-xl",
          "bg-primary",
          "border-primary-shd",
          "xl:text-3xl",
          "hover:bg-primary-shd",
          "hover:border-primary",
        ],
        secondary: [
          "text-[#000]",
          "bg-secondary",
          "border-secondary-shd",
          "hover:bg-secondary-shd",
          "hover:border-secondary",
        ],
        tertiary: [
          "text-1",
          "bg-tertiary",
          "border-tertiary-shd",
          "hover:bg-tertiary-shd",
          "hover:border-primary",
        ],
      },
      size: {
        default: ["px-3", "pb-1", "pt-2", "h-[60px]", "xl:w-[100px]"],
        large: ["col-span-2", "px-6", "py-4"],
      },
    },
  },
);

// Define the interface for button props, extending VariantProps for variant handling
interface CalculatorKeyProps extends VariantProps<typeof buttonVariants> {
  onClick: () => void; // Function to handle button click
  children: string; // Content of the button
  className?: string; // Optional additional class name
}

export function CalculatorKey({
  children,
  onClick,
  size,
  className,
  intent,
}: CalculatorKeyProps) {
  // Generate the appropriate class names based on variants and extra classes
  const buttonClassname = cn(buttonVariants({ size, intent, className }));

  return (
    <button className={buttonClassname} onClick={onClick}>
      {children}
    </button>
  );
}
