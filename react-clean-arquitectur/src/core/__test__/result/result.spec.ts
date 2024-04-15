import { Failure, Left, Result, Right } from "@core/index";
import { test, describe } from "@jest/globals";
 
class ResultTest extends Result<number, Error>{
    constructor() {
        super(10, new Error('Test Error'));
      }
}
 
describe("Result test", () => {
  test("should throw an error if both value and error are defined", async () => {
    // Assert
    expect(()=> new ResultTest()).toThrow();
  });
 
  test("should return new instance is Right", async () => {
    // Prepare
    const value = 10
    // Execute
    const result = new Right(value);
    // Assert
    result.fold(_result=> expect(_result).toEqual(value), _=>{})
    result.foldRight(_result=> expect(_result).toEqual(value))
    expect(result.isRight()).toEqual(true)
  });
 
  test("should return new instance is Left", async () => {
    // Prepare
    const error = new Failure("error")
    // Execute
    const result = new Left(error);
    // Assert
    result.fold(__=> {}, _=>expect(_).toEqual(error))
    result.foldLeft(_=> expect(_).toEqual(error))
    expect(result.isLeft()).toEqual(true)
  });
});