// components/Calculator.tsx
import React from "react";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { CalculatorKey } from "./CalculatorKeys";
import { useCalculatorState } from "./CalculatorState";

// Main Calculator component, responsible for overall structure and interaction
const Calculator: React.FC = () => {
  // Extract calculator state and handleButtonClick function from useCalculatorState hook
  const { currentDisplay, operation, storedOperand, handleButtonClick } =
    useCalculatorState();

  // Define the arrangement of buttons on the calculator
  const buttonKey = [
    "7",
    "8",
    "9",
    "Del",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "*",
  ];

  return (
    <main className="bg-gray-200 mx-auto flex w-full max-w-[564px] flex-col gap-6 rounded-lg">
      {/* Render the display component */}
      <CalculatorDisplay
        display={currentDisplay}
        operation={operation}
        previousDisplay={storedOperand}
      />
      {/* Render the grid of calculator buttons */}
      <div className="grid grid-cols-4 gap-3 rounded-xl bg-toggle p-6 xl:gap-6 xl:p-8">
        {/* Map over buttonKey array to render individual buttons */}
        {buttonKey.map((value) => (
          <CalculatorKey
            key={value}
            size={"default"}
            intent={value === "Del" ? "primary" : "tertiary"}
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </CalculatorKey>
        ))}
        {/* Render "Reset" and "=" buttons separately with larger size */}
        {["Reset", "="].map((value) => (
          <CalculatorKey
            key={value}
            size={"large"}
            intent={value === "Reset" ? "primary" : "secondary"}
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </CalculatorKey>
        ))}
      </div>
    </main>
  );
};

export default Calculator;
