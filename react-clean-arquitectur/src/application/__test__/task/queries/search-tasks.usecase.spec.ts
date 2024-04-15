import { test, describe, beforeEach } from '@jest/globals'
import { MockProxy, mock } from 'jest-mock-extended';
import { Failure, Left, Right } from '@core/index';
import { TaskDom, TaskRepository } from '@domain/tasks';
import { SearchTasksUseCase } from '@application/task';
 
describe('Search tasks usecase', () => {
  let taskRepositoryMock: MockProxy<TaskRepository>;
  let taskResponse = new TaskDom(1, "test 1", false);
 
  beforeEach(() => {
    taskRepositoryMock = mock<TaskRepository>();
  });
   
  test('when should return all tasks successful', async () => {
    // Prepare
    taskRepositoryMock.search.mockReturnValue(Promise.resolve(new Right<TaskDom[]>([
        taskResponse
    ])));
    const searchTasksUseCase = new SearchTasksUseCase(taskRepositoryMock);
    // Execute
    const result = await searchTasksUseCase.execute("task test");
    // Assert
    expect(result.isRight()).toBe(true);
    expect(result.value?.length).toEqual(1);
  });
 
  test('when should return a failure', async () => {
    // Prepare
    taskRepositoryMock.search.mockReturnValue(Promise.resolve(new Left<Failure>(new Failure("error"))));
    const searchTasksUseCase = new SearchTasksUseCase(taskRepositoryMock);
    // Execute
    const result = await searchTasksUseCase.execute("task test");
    // Assert
    expect(result.isLeft()).toBe(true);
  });
})