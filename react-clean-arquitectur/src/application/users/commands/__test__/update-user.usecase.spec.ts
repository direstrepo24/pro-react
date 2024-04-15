import { UserDom, UserRepository } from "@domain/users";
import { test, describe, beforeEach } from "@jest/globals";
import { MockProxy, mock } from "jest-mock-extended";
import { Failure, Left, Right } from "@core/index";
import { UpdateUserUseCase } from "@application/users";
import { UpdateUserRequestDom } from "@domain/users/models/user-request.dom";

describe("Update user usecase", () => {
  let userRepositoryMock: MockProxy<UserRepository>;
  let userResponse = new UserDom("test name", "test username", "test email");
  let updateUserRequest = new UpdateUserRequestDom(
    1,
    "test name",
    "test username"
  );
  beforeEach(() => {
    userRepositoryMock = mock<UserRepository>();
  });

  test("when updated user, should return a successful", async () => {
    // Prepare
    userRepositoryMock.update.mockReturnValue(
      Promise.resolve(new Right<UserDom>(userResponse))
    );
    const updateUserUseCase = new UpdateUserUseCase(userRepositoryMock);
    // Execute
    const result = await updateUserUseCase.execute(updateUserRequest);
    // Assert
    expect(result.isRight()).toBe(true);
    expect(result.value?.name).toBe(updateUserRequest.name);
  });

  test("when updated user, should return a failure", async () => {
    // Prepare
    userRepositoryMock.update.mockReturnValue(
      Promise.resolve(new Left<Failure>(new Failure("error")))
    );
    const updateUserUseCase = new UpdateUserUseCase(userRepositoryMock);
    // Execute
    const result = await updateUserUseCase.execute(updateUserRequest);
    // Assert
    expect(result.isLeft()).toBe(true);
  });
});
