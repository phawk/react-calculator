import calculator from './calculator';

describe("Calculator", () => {
  describe("when input is empty", () => {
    it("allows number entry", () => {
      const ouput = calculator({}, 7)

      expect(ouput).toEqual({
        left: "7",
        right: "",
        operation: null
      });
    });

    it("doesn't allow 0 to input", () => {
      const ouput = calculator({}, 0)

      expect(ouput).toEqual({
        left: "",
        right: "",
        operation: null
      });
    });

    it("doesn't allow . to input", () => {
      const ouput = calculator({}, ".")

      expect(ouput).toEqual({
        left: "",
        right: "",
        operation: null
      });
    });

    it("doesn't allow operations", () => {
      const ouput = calculator({}, "divide")

      expect(ouput).toEqual({
        left: "",
        right: "",
        operation: null
      });
    });
  });

  describe("when left is provided", () => {
    it("concatenates number entry", () => {
      const ouput = calculator({ left: "13" }, 0)

      expect(ouput).toEqual({
        left: "130",
        right: "",
        operation: null
      });
    });

    it("allows . to input", () => {
      const ouput = calculator({ left: "7" }, ".")

      expect(ouput).toEqual({
        left: "7.",
        right: "",
        operation: null
      });
    });

    it("doesn't allow operations", () => {
      const ouput = calculator({ left: "65" }, "divide")

      expect(ouput).toEqual({
        left: "65",
        right: "",
        operation: "divide"
      });
    });
  });

  describe("when left and operation are provided", () => {
    it("edits right number", () => {
      const ouput = calculator({ left: "13", operation: "add" }, 2)

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
        right: "",
        operation: "divide"
      });
    });
  });

  describe("when full input is provided", () => {
    it("can be calculated", () => {
      const ouput = calculator({ left: "13", right: "12", operation: "add" }, "equals")

      expect(ouput).toEqual({
        left: "25",
        right: "",
        operation: null
      });
    });

    it("operation evaluates and then sets new operation", () => {
      const ouput = calculator({ left: "2", right: "2", operation: "add" }, "divide")

      expect(ouput).toEqual({
        left: "4",
        right: "",
        operation: "divide"
      });
    });
  });

  describe("basic operations", () => {
    it("can add", () => {
      const ouput = calculator({ left: "13", right: "12", operation: "add" }, "equals")

      expect(ouput).toEqual({
        left: "25",
        right: "",
        operation: null
      });
    });

    it("can subtract", () => {
      const ouput = calculator({ left: "13", right: "14", operation: "subtract" }, "equals")

      expect(ouput).toEqual({
        left: "-1",
        right: "",
        operation: null
      });
    });
  });
});
