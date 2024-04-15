import { UserRepository } from "@domain/users";
import { test, describe, beforeEach } from "@jest/globals";
import { MockProxy, mock } from "jest-mock-extended";
import { Failure, Left, NoResult, Right } from "@core/index";
import { DeleteUserByIdUseCase } from "@application/users";
 
describe("Delete user by id usecase", () => {
  let userRepositoryMock: MockProxy<UserRepository>;
  beforeEach(() => {
    userRepositoryMock = mock<UserRepository>();
  });
 
  test("when deleted user, should return a successful", async () => {
    // Prepare
    userRepositoryMock.deleteById.mockReturnValue(
      Promise.resolve(new Right<NoResult>(NoResult))
    );
    const deleteUserByIdUseCase = new DeleteUserByIdUseCase(userRepositoryMock);
    // Execute
    const result = await deleteUserByIdUseCase.execute(1);
    // Assert
    expect(result.isRight()).toBe(true);
    expect(result.value).toBe(NoResult);
  });
 
  test("when deleted user, should return a failure", async () => {
    // Prepare
    userRepositoryMock.deleteById.mockReturnValue(
      Promise.resolve(new Left<Failure>(new Failure("error")))
    );
    const deleteUserByIdUseCase = new DeleteUserByIdUseCase(userRepositoryMock);
    // Execute
    const result = await deleteUserByIdUseCase.execute(1);
    // Assert
    expect(result.isLeft()).toBe(true);
  });
});