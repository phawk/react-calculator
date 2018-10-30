import {
  isOperation,
  hasLeftNumber,
  hasRightNumber,
  hasPendingOperation,
  togglePolarity,
  evaluate
} from "./helpers";

interface CalculatorState {
  left: string;
  right?: string;
  operation?: string | null;
}

export default (state: CalculatorState, input: string): CalculatorState => {
  let output = {
    left: state.left || "0",
    right: state.right || "",
    operation: state.operation || null,
  };

  if (hasPendingOperation(output) && isOperation(input)) {
    output.left = String(evaluate(output));
    output.right = "";
  }

  switch (input) {
    case "clear":
      output.left = "0";
      output.right = "";
      output.operation = null;
      break;
    case "togglePositive":
      if (hasRightNumber(output)) {
        output.right = togglePolarity(output.right);
      } else {
        output.left = togglePolarity(output.left);
      }
      break;
    case "percent":
      break;
    case "divide":
    case "multiply":
    case "subtract":
    case "add":
      if (hasLeftNumber(output)) {
        output.operation = input;
      }
      break;
    case "equals":
      if (hasPendingOperation(output)) {
        output.left = String(evaluate(output));
        output.right = "";
        output.operation = null;
      }
      break;
    default:
      if (state.operation) {
        // Working on the RHS
        if (output.right === "" && input === ".") output.right = "0";
        output.right += input;
      } else {
        // Working on the LHS
        if (output.left === "0" && input !== ".") output.left = "";
        output.left += input;
      }
      break;
  }

  return output;
}
