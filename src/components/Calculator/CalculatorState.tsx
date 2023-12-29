import { useState } from "react";

// Hook for managing calculator state and logic
export const useCalculatorState = () => {
  // State variables for display, operation, and stored operand
  const [currentDisplay, setCurrentDisplay] = useState("0");
  const [operation, setOperation] = useState("");
  const [storedOperand, setStoredOperand] = useState("0");

  // Function to handle button clicks based on button type
  const handleButtonClick = (buttonValue: string) => {
    if (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "*" ||
      buttonValue === "/"
    ) {
      handleOperation(buttonValue); // Handle operations
    } else if (buttonValue === "=") {
      calculateResult(); // Calculate final result
    } else if (buttonValue === "Del") {
      deleteLastDigit(); // Delete last digit from display
    } else if (buttonValue === "Reset") {
      clearCalculator(); // Clear all values
    } else {
      handleInputChange(buttonValue); // Handle numerical input
    }
  };

  // Function to handle numerical input, preventing multiple decimals
  const handleInputChange = (input: string) => {
    if (input === "." && currentDisplay.includes(".")) {
      return;
    }
    setCurrentDisplay((prevDisplay) =>
      prevDisplay === "0" && input !== "." ? input : prevDisplay + input,
    );
  };

  // Function to handle operation selection
  const handleOperation = (op: string) => {
    if (currentDisplay !== "0") {
      if (storedOperand && operation) {
        // If a previous operation exists, calculate result before setting the new operation
        calculateResult();
        setOperation(op);
      } else {
        // If no previous operation, directly set the new operation and operand
        setOperation(op);
        setStoredOperand(currentDisplay);
      }
      setCurrentDisplay("0"); // Clear display for new input
    }
  };

  // Function to perform arithmetic operations
  const performOperation = (
    operand1: number,
    operand2: number,
    operator: string,
  ): number => {
    switch (operator) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "/":
        return operand1 / operand2;
      default:
        return 0;
    }
  };

  // Function to calculate the final result
  const calculateResult = () => {
    if (storedOperand && currentDisplay && operation) {
      const result = performOperation(
        parseFloat(storedOperand),
        parseFloat(currentDisplay),
        operation,
      );

      setStoredOperand(result.toString()); // Store result for potential chained calculations
      setOperation(""); // Clear operation for next calculation
      setCurrentDisplay(result.toString()); // Display the result
    }
  };

  // Function to delete the last digit from the display
  const deleteLastDigit = () => {
    setCurrentDisplay((prevDisplay) => {
      const newDisplay = prevDisplay.toString().slice(0, -1);
      return newDisplay === "" ? "0" : newDisplay; // Ensure display doesn't become empty
    });
  };

  // Function to clear all calculator values
  const clearCalculator = () => {
    setCurrentDisplay("0");
    setOperation("");
    setStoredOperand("0");
  };

  return {
    currentDisplay,
    operation,
    storedOperand,
    handleButtonClick,
  }; // Return state values and main interaction function
};
