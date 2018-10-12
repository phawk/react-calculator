import {
  togglePolarity,
  evaluate
} from "./helpers";

describe("togglePolarity", () => {
  it("flips polarity of numbers", () => {
    expect(togglePolarity("12")).toBe("-12");
    expect(togglePolarity("-8")).toBe("8");
    expect(togglePolarity("0")).toBe("0");
  });
});

describe("evaluate", () => {
  it("does maths", () => {
    expect(evaluate({ left: "12", right: "10", operation: "add" })).toBe(22);
    expect(evaluate({ left: "-3", right: "-7", operation: "subtract" })).toBe(4);
    expect(evaluate({ left: "3", right: "4", operation: "multiply" })).toBe(12);
    expect(evaluate({ left: "3", right: "1", operation: "divide" })).toBe(3);
  });
});
