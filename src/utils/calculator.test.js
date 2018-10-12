import calculator from './calculator';

describe("Calculator", () => {
  describe("when input is empty", () => {
    it("allows number entry", () => {
      const ouput = calculator({}, 7)

      expect(ouput).toEqual({
        left: "7",
        right: null,
        operation: null
      });
    });

    it("doesn't allow 0 to input", () => {
      const ouput = calculator({}, 0)

      expect(ouput).toEqual({
        left: "",
        right: null,
        operation: null
      });
    });
    it("doesn't allow . to input", () => {});
    it("doesn't operations", () => {});
  });
});
