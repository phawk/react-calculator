import calculator from './calculator';

describe("Calculator", () => {
  describe("when input is empty", () => {
    it("allows number entry", () => {
      const ouput = calculator({ left: "" }, "7")

      expect(ouput).toEqual({
        left: "7",
        right: null,
        operation: null
      });
    });

    it("doesn't allow 0 to input", () => {
      const ouput = calculator({ left: "" }, "0")

      expect(ouput).toEqual({
        left: "0",
        right: null,
        operation: null
      });
    });
  });

  describe("when left is provided", () => {
    it("concatenates number entry", () => {
      const ouput = calculator({ left: "13" }, "0")

      expect(ouput).toEqual({
        left: "130",
        right: null,
        operation: null
      });
    });

    it("allows . to input", () => {
      const ouput = calculator({ left: "7" }, ".")

      expect(ouput).toEqual({
        left: "7.",
        right: null,
        operation: null
      });
    });

    it("allows operations", () => {
      const ouput = calculator({ left: "65" }, "divide")

      expect(ouput).toEqual({
        left: "65",
        right: null,
        operation: "divide"
      });
    });
  });

  describe("when left and operation are provided", () => {
    it("edits right number", () => {
      const ouput = calculator({ left: "13", operation: "add" }, "2")

      expect(ouput).toEqual({
        left: "13",
        right: "2",
        operation: "add"
      });
    });

    it("changes operation", () => {
      const ouput = calculator({ left: "65", operation: "add" }, "divide")

      expect(ouput).toEqual({
        left: "65",
        right: null,
        operation: "divide"
      });
    });

    it("prefills 0 before .", () => {
      const ouput = calculator({ left: "7", operation: "add" }, ".")

      expect(ouput).toEqual({
        left: "7",
        right: "0.",
        operation: "add"
      });
    });
  });

  describe("when full input is provided", () => {
    it("can be calculated", () => {
      const ouput = calculator({ left: "13", right: "12", operation: "add" }, "equals")

      expect(ouput).toEqual({
        left: "25",
        right: null,
        operation: null
      });
    });

    it("operation evaluates and then sets new operation", () => {
      const ouput = calculator({ left: "2", right: "2", operation: "add" }, "divide")

      expect(ouput).toEqual({
        left: "4",
        right: null,
        operation: "divide"
      });
    });
  });

  describe("basic operations", () => {
    it("can add", () => {
      const ouput = calculator({ left: "13", right: "12", operation: "add" }, "equals")

      expect(ouput).toEqual({
        left: "25",
        right: null,
        operation: null
      });
    });

    it("can subtract", () => {
      const ouput = calculator({ left: "13", right: "14", operation: "subtract" }, "equals")

      expect(ouput).toEqual({
        left: "-1",
        right: null,
        operation: null
      });
    });

    it("can multiply", () => {
      const ouput = calculator({ left: "13.5", right: "2", operation: "multiply" }, "equals")

      expect(ouput).toEqual({
        left: "27",
        right: null,
        operation: null
      });
    });

    it("can divide", () => {
      const ouput = calculator({ left: "13", right: "2", operation: "divide" }, "equals")

      expect(ouput).toEqual({
        left: "6.5",
        right: null,
        operation: null
      });
    });

    it("can clear", () => {
      const ouput = calculator({ left: "13", right: "2", operation: "divide" }, "clear");

      expect(ouput).toEqual({
        left: "0",
        right: null,
        operation: null
      });
    });

    it("can toggle polarity", () => {
      const ouput = calculator({ left: "-13", right: null, operation: null }, "togglePositive");

      expect(ouput).toEqual({
        left: "13",
        right: null,
        operation: null
      });

      const ouput2 = calculator({ left: "13", right: "2", operation: null }, "togglePositive");

      expect(ouput2).toEqual({
        left: "13",
        right: "-2",
        operation: null
      });
    });
  });
});
