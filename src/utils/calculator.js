export default (state, input) => {
  let output = {
    left: null,
    right: null,
    operation: null,
  };

  output.left = input;

  return output;
}
