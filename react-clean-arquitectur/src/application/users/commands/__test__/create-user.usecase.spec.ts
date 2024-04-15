import { UserDom, UserRepository } from "@domain/users";
import { test, describe, beforeEach } from "@jest/globals";
import { MockProxy, mock } from "jest-mock-extended";
import { Failure, Left, Right } from "@core/index";
import { CreateUserUseCase } from "@application/users";
import { CreateUserRequestDom } from "@domain/users/models/user-request.dom";

describe("Create user usecase", () => {
  let userRepositoryMock: MockProxy<UserRepository>;
  let userResponse = new UserDom("test name", "test username", "test email");
  let createUserRequest = new CreateUserRequestDom(
    "test name",
    "test username",
    "test email"
  );
  beforeEach(() => {
    userRepositoryMock = mock<UserRepository>();
  });

  test("when created user should return a successful", async () => {
    // Prepare
    userRepositoryMock.create.mockReturnValue(
      Promise.resolve(new Right<UserDom>(userResponse))
    );
    const createUserUseCase = new CreateUserUseCase(userRepositoryMock);
    // Execute
    const result = await createUserUseCase.execute(createUserRequest);
    // Assert
    expect(result.isRight()).toBe(true);
    expect(result.value?.email).toBe(createUserRequest.email);
  });

  test("when created user should return a failure", async () => {
    // Prepare
    userRepositoryMock.create.mockReturnValue(
      Promise.resolve(new Left<Failure>(new Failure("error")))
    );
    const createUserUseCase = new CreateUserUseCase(userRepositoryMock);
    // Execute
    const result = await createUserUseCase.execute(createUserRequest);
    // Assert
    expect(result.isLeft()).toBe(true);
  });
});
