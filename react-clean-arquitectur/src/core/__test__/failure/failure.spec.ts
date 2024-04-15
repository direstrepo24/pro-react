import { Failure, UnknowFailure } from "@core/index";
import { test, describe } from "@jest/globals";
 
describe("Failure test", () => {
  test("when creating a new instance with a message", async () => {
    // Prepare
    const message = "Something went wrong"
    // Execute
    const result = new Failure(message);
    // Assert
    expect(result.message).toBe(message);
    expect(result.name).toBe('Failure');
  });
});
 
describe("UnknowFailure test", () => {
    test("when creating a new instance with a message", async () => {
      // Prepare
      const message = "Something went wrong"
      // Execute
      const result = new UnknowFailure(message);
      // Assert
      expect(result.message).toBe(message);
      expect(result.name).toBe('UnknowFailure');
    });
  });