export const isOperation = str => (
  ["divide", "multiply", "subtract", "add"].indexOf(str) > -1
);

export const hasLeftNumber = state => state.left.length;

export const hasRightNumber = state => state.right.length;

export const hasOperation = state => !!state.operation;

export const hasPendingOperation = state => (
  hasLeftNumber(state) &&
  hasRightNumber(state) &&
  hasOperation(state)
);

export const togglePolarity = number => {
  number = parseFloat(number, 10);
  return String(number * -1);
};

export const evaluate = state => {
  const left = parseFloat(state.left, 10);
  const right = parseFloat(state.right, 10);
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
