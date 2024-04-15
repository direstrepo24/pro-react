import { test, describe, beforeEach } from "@jest/globals";
import { MockProxy, mock } from "jest-mock-extended";
import { Failure, Left, Right } from "@core/index";
import { CreateTaskRequestDom, TaskDom, TaskRepository } from "@domain/tasks";
import { CreateTaskUseCase } from "@application/task";
 
describe("Create task usecase", () => {
  let taskRepositoryMock: MockProxy<TaskRepository>;
  let taskResponse = new TaskDom(1, "test 1", false);
  let createTaskRequest = new CreateTaskRequestDom(
    "test 1",
    false
  );
  beforeEach(() => {
    taskRepositoryMock = mock<TaskRepository>();
  });
 
  test("when created task should return a successful", async () => {
    // Prepare
    taskRepositoryMock.create.mockReturnValue(
      Promise.resolve(new Right<TaskDom>(taskResponse))
    );
    const createTaskUseCase = new CreateTaskUseCase(taskRepositoryMock);
    // Execute
    const result = await createTaskUseCase.execute(createTaskRequest);
    // Assert
    expect(result.isRight()).toBe(true);
    expect(result.value?.name).toBe(createTaskRequest.name);
  });
 
  test("when created user should return a failure", async () => {
    // Prepare
    taskRepositoryMock.create.mockReturnValue(
      Promise.resolve(new Left<Failure>(new Failure("error")))
    );
    const createTaskUseCase = new CreateTaskUseCase(taskRepositoryMock);
    // Execute
    const result = await createTaskUseCase.execute(createTaskRequest);
    // Assert
    expect(result.isLeft()).toBe(true);
  });
});