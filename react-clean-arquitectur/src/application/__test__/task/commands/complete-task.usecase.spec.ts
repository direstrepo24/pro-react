import { test, describe, beforeEach } from "@jest/globals";
import { MockProxy, mock } from "jest-mock-extended";
import { Failure, Left, NoResult, Right } from "@core/index";
import { TaskRepository } from "@domain/tasks";
import { CompleteTaskUseCase } from "@application/task";
 
describe("Complete task usecase", () => {
  let taskRepositoryMock: MockProxy<TaskRepository>;
  beforeEach(() => {
    taskRepositoryMock = mock<TaskRepository>();
  });
 
  test("when complete task, should return a successful", async () => {
    // Prepare
    taskRepositoryMock.complete.mockReturnValue(
      Promise.resolve(new Right<NoResult>(NoResult))
    );
    const completeTaskUseCase = new CompleteTaskUseCase(taskRepositoryMock);
    // Execute
    const result = await completeTaskUseCase.execute(1);
    // Assert
    expect(result.isRight()).toBe(true);
  });
 
  test("when complte task, should return a failure", async () => {
    // Prepare
    taskRepositoryMock.complete.mockReturnValue(
      Promise.resolve(new Left<Failure>(new Failure("error")))
    );
    const completeTaskUseCase = new CompleteTaskUseCase(taskRepositoryMock);
    // Execute
    const result = await completeTaskUseCase.execute(1);
    // Assert
    expect(result.isLeft()).toBe(true);
  });
});