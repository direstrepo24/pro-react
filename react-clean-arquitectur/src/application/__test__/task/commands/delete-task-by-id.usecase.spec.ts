import { test, describe, beforeEach } from "@jest/globals";
import { MockProxy, mock } from "jest-mock-extended";
import { Failure, Left, NoResult, Right } from "@core/index";
import { TaskRepository } from "@domain/tasks";
import { DeleteTaskByIdUseCase } from "@application/task";
 
describe("Delete task usecase", () => {
  let taskRepositoryMock: MockProxy<TaskRepository>;
  beforeEach(() => {
    taskRepositoryMock = mock<TaskRepository>();
  });
 
  test("when deleted task, should return a successful", async () => {
    // Prepare
    taskRepositoryMock.deleteById.mockReturnValue(
      Promise.resolve(new Right<NoResult>(NoResult))
    );
    const deleteTaskByIdUseCase = new DeleteTaskByIdUseCase(taskRepositoryMock);
    // Execute
    const result = await deleteTaskByIdUseCase.execute(1);
    // Assert
    expect(result.isRight()).toBe(true);
    expect(result.value).toBe(NoResult);
  });
 
  test("when deleted task, should return a failure", async () => {
    // Prepare
    taskRepositoryMock.deleteById.mockReturnValue(
      Promise.resolve(new Left<Failure>(new Failure("error")))
    );
    const deleteTaskByIdUseCase = new DeleteTaskByIdUseCase(taskRepositoryMock);
    // Execute
    const result = await deleteTaskByIdUseCase.execute(1);
    // Assert
    expect(result.isLeft()).toBe(true);
  });
});