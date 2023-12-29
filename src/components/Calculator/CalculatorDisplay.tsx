import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Define props for the component, ensuring correct types
interface DisplayProps {
  display: string; // Assuming display value is a string
  operation: string; // Assuming operation is a string
  previousDisplay: string; // Assuming previousDisplay is a string
}

// Export the CalculatorDisplay component
export function CalculatorDisplay({
  display,
  operation,
  previousDisplay,
}: DisplayProps) {
  // Manage formatted display value
  const [printValue, setPrintValue] = useState("");
  // Access theme information
  const { theme } = useTheme();

  // Update formatted display value when display prop changes
  useEffect(() => {
    setPrintValue(formatNumber(display));
  }, [display]);

  // Format a number string for display
  const formatNumber = (numberString: string) => {
    const number = parseFloat(numberString);

    return number.toLocaleString("en-US", {
      maximumFractionDigits: 15,
    });
  };
  // Render the display with conditional styling
  return (
    <div
      className={`flex h-[88px] w-full flex-col justify-center rounded-md bg-screen px-6 text-right text-1 outline-none xl:h-32 ${
        theme === "dark" ? "text-white" : ""
      }`}
    >
      <span
        className={`text-2xl ${operation ? "text-sm text-1/70" : "hidden"}`}
      >
        {operation && `${previousDisplay} ${operation} `}
      </span>
      <span className={`text-[40px] xl:text-[56px] `}>{printValue}</span>
    </div>
  );
}
