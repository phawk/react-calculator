export default (state, input) => {
  let output = {
    left: state.left || "",
    right: state.right || null,
    operation: state.operation || null,
  };

  switch (input) {
    case "clear":
      break;
    case "togglePositive":
      break;
    case "percent":
      break;
    case "divide":
      break;
    case "multiply":
      break;
    case "subtract":
      break;
    case "add":
      break;
    case "equals":
      break;
    default:
      if (input !== 0 || input.length) {
        output.left += input;
      }
      break;
  }

  return output;
}
