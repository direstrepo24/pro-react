import { Container } from 'inversify';
import 'reflect-metadata';
import { userModule } from '@infrastructure/users';
import { USER_SYMBOLS, UserRepository } from '@domain/users';
import { AllUsersUseCase, CreateUserUseCase, DeleteUserByIdUseCase, UpdateUserUseCase } from '@application/users';
import { UserImplRepository } from '../../users/user-impl.repository';
import { httpClientModule } from '@core/index';
 
describe('UserModule Test', () => {
  let container: Container;
  beforeEach(() => {
    container = new Container();
    container.load(httpClientModule);
    container.load(userModule);
  });
 
  test('should resolve the dependency on UserRepository', () => {
    // Execute
    const userRepository = container.get<UserRepository>(USER_SYMBOLS.USER_REPOSITORY);
    // Assert
    expect(userRepository).toBeInstanceOf(UserImplRepository);
  });
 
  test('should resolve the dependency on AllUsersUseCase', () => {
    // Execute
    const result = container.get<AllUsersUseCase>(USER_SYMBOLS.USER_LIST);
    // Assert
    expect(result).toBeInstanceOf(AllUsersUseCase);
  });
 
  test('should resolve the dependency on CreateUserUseCase', () => {
    // Execute
    const result = container.get<CreateUserUseCase>(USER_SYMBOLS.USER_CREATE);
    // Assert
    expect(result).toBeInstanceOf(CreateUserUseCase);
  });
 
  test('should resolve the dependency on UpdateUserUseCase', () => {
    // Execute
    const result = container.get<UpdateUserUseCase>(USER_SYMBOLS.USER_UPDATE);
    // Assert
    expect(result).toBeInstanceOf(UpdateUserUseCase);
  });
 
  test('should resolve the dependency on DeleteUserByIdUseCase', () => {
    // Execute
    const result = container.get<DeleteUserByIdUseCase>(USER_SYMBOLS.USER_DELETE);
    // Assert
    expect(result).toBeInstanceOf(DeleteUserByIdUseCase);
  });
});