
import { UserDom, UserRepository } from '@domain/users';
import { test, describe, beforeEach } from '@jest/globals'
import { MockProxy, mock } from 'jest-mock-extended';
import { Failure, Left, NoParams, Right } from '@core/index';
import { AllUsersUseCase } from '@application/users';

describe('All users usecase', () => {
  let userRepositoryMock: MockProxy<UserRepository>; 
  beforeEach(() => {
    userRepositoryMock = mock<UserRepository>();
  });
    
  test('when should return all users successful', async () => {
    // Prepare
    userRepositoryMock.list.mockReturnValue(Promise.resolve(new Right<UserDom[]>([])));
    const allUsersUseCase = new AllUsersUseCase(userRepositoryMock);
    // Execute
    const result = await allUsersUseCase.execute(NoParams);
    // Assert
    expect(result.isRight()).toBe(true);
    expect(result.value).toEqual([]);
  });

  test('when should return a failure', async () => {
    // Prepare
    userRepositoryMock.list.mockReturnValue(Promise.resolve(new Left<Failure>(new Failure("error"))));
    const allUsersUseCase = new AllUsersUseCase(userRepositoryMock);
    // Execute
    const result = await allUsersUseCase.execute(NoParams);
    // Assert
    expect(result.isLeft()).toBe(true);
  });
})
