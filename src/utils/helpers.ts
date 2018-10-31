import CalculatorState from "./CalculatorState"

export const isOperation = (str: string): boolean => (
  ["divide", "multiply", "subtract", "add"].indexOf(str) > -1
);

export const hasLeftNumber = (state: CalculatorState): boolean => !!state.left && state.left.length > 0;

export const hasRightNumber = (state: CalculatorState): boolean => !!state.right && state.right.length > 0;

export const hasOperation = (state: CalculatorState): boolean => !!state.operation;

export const hasPendingOperation = (state: CalculatorState): boolean => (
  hasLeftNumber(state) &&
  hasRightNumber(state) &&
  hasOperation(state)
);

export const togglePolarity = (number: string): string => {
  return String(parseFloat(number) * -1);
};

export const evaluate = (state: CalculatorState): number => {
  if (state.left && state.right) {
    const left = parseFloat(state.left);
    const right = parseFloat(state.right);
    switch (state.operation) {
      case "divide":
        return left / right;
      case "multiply":
        return left * right;
      case "subtract":
        return left - right;
      case "add":
        return left + right;
      default:
        return 0;
    }
  } else {
    return 0;
  }
};

export default {
  isOperation,
  hasLeftNumber,
  hasRightNumber,
  hasOperation,
  hasPendingOperation,
  togglePolarity,
  evaluate
};
