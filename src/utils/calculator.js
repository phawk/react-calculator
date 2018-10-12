const isOperation = str => ["divide", "multiply", "subtract", "add"].indexOf(str) > -1;
const hasLeftNumber = state => state.left.length;
const hasRightNumber = state => state.right.length;
const hasOperation = state => !!state.operation;
const hasPendingOperation = state => (
  hasLeftNumber(state) &&
  hasRightNumber(state) &&
  hasOperation(state)
);
const evaluate = state => {
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
  }
};
const togglePolarity = number => {
  number = parseFloat(number, 10);
  return String(number * -1);
};

export default (state, input) => {
  let output = {
    left: state.left || "",
    right: state.right || "",
    operation: state.operation || null,
  };

  if (output.left === "0") output.left = "";

  if (hasPendingOperation(output) && isOperation(input)) {
    output.left = String(evaluate(output));
    output.right = "";
  }

  switch (input) {
    case "clear":
      output.left = "";
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
        if ((input !== "." && input !== 0) || hasRightNumber(output)) {
          output.right += input;
        }
      } else {
        // Working on the LHS
        if ((input !== "." && input !== 0) || hasLeftNumber(output)) {
          output.left += input;
        }
      }
      break;
  }

  if (output.left === "") output.left = "0";

  return output;
}
