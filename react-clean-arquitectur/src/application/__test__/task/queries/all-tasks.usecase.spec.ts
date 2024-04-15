import { test, describe, beforeEach } from '@jest/globals'
import { MockProxy, mock } from 'jest-mock-extended';
import { Failure, Left, NoParams, Right } from '@core/index';
import { TaskDom, TaskRepository } from '@domain/tasks';
import { AllTasksUseCase } from '@application/task';
 
describe('All tasks usecase', () => {
  let taskRepositoryMock: MockProxy<TaskRepository>;
  beforeEach(() => {
    taskRepositoryMock = mock<TaskRepository>();
  });
   
  test('when should return all tasks successful', async () => {
    // Prepare
    taskRepositoryMock.list.mockReturnValue(Promise.resolve(new Right<TaskDom[]>([])));
    const allTasksUseCase = new AllTasksUseCase(taskRepositoryMock);
    // Execute
    const result = await allTasksUseCase.execute(NoParams);
    // Assert
    expect(result.isRight()).toBe(true);
    expect(result.value).toEqual([]);
  });
 
  test('when should return a failure', async () => {
    // Prepare
    taskRepositoryMock.list.mockReturnValue(Promise.resolve(new Left<Failure>(new Failure("error"))));
    const allTasksUseCase = new AllTasksUseCase(taskRepositoryMock);
    // Execute
    const result = await allTasksUseCase.execute(NoParams);
    // Assert
    expect(result.isLeft()).toBe(true);
  });
})