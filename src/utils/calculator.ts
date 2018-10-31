import {
  isOperation,
  hasLeftNumber,
  hasRightNumber,
  hasPendingOperation,
  togglePolarity,
  evaluate
} from "./helpers";

import CalculatorState from "./CalculatorState"

export default (state: CalculatorState, input: string): CalculatorState => {
  let output = {
    left: state.left || "0",
    right: state.right || null,
    operation: state.operation || null,
  };

  if (hasPendingOperation(output) && isOperation(input)) {
    output.left = String(evaluate(output));
    output.right = null;
  }

  switch (input) {
    case "clear":
      output.left = "0";
      output.right = null;
      output.operation = null;
      break;
    case "togglePositive":
      if (hasRightNumber(output)) {
        output.right = togglePolarity(output.right || "0");
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
        output.right = null;
        output.operation = null;
      }
      break;
    default:
      if (state.operation) {
        // Working on the RHS
        if (output.right === null && input === ".") output.right = "0";
        if (output.right === null) output.right = "";
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
