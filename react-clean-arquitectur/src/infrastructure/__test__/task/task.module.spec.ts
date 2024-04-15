import { Container } from 'inversify';
import 'reflect-metadata';
import { taskModule } from '@infrastructure/task';
import { TASK_SYMBOLS, TaskRepository } from '@domain/tasks';
import { TaskImplRepository } from '../../task/task-impl.repository';
import { DeleteTaskByIdUseCase } from '@application/task/commands/delete-task-by-id.usecase';
import { CompleteTaskUseCase } from '@application/task/commands/complete-task.usecase';
import { CreateTaskUseCase } from '@application/task/commands/create-task.usecase';
import { SearchTasksUseCase } from '@application/task/queries/search-tasks.usecase';
import { AllTasksUseCase } from '@application/task/queries/all-tasks.usecase';
 
describe('TaskModule Test', () => {
  let container: Container;
  beforeEach(() => {
    container = new Container();
    container.load(taskModule);
  });
 
  test('should resolve the dependency on TaskRepository', () => {
    // Execute
    const repository = container.get<TaskRepository>(TASK_SYMBOLS.TASK_REPOSITORY);
    // Assert
    expect(repository).toBeInstanceOf(TaskImplRepository);
  });
 
  test('should resolve the dependency on AllTasksUseCase', () => {
    // Execute
    const result = container.get<AllTasksUseCase>(TASK_SYMBOLS.TASK_LIST);
    // Assert
    expect(result).toBeInstanceOf(AllTasksUseCase);
  });
 
  test('should resolve the dependency on SearchTasksUseCase', () => {
    // Execute
    const result = container.get<SearchTasksUseCase>(TASK_SYMBOLS.TASK_SEARCH);
    // Assert
    expect(result).toBeInstanceOf(SearchTasksUseCase);
  });
 
  test('should resolve the dependency on CreateTaskUseCase', () => {
    // Execute
    const result = container.get<CreateTaskUseCase>(TASK_SYMBOLS.TASK_CREATE);
    // Assert
    expect(result).toBeInstanceOf(CreateTaskUseCase);
  });
 
  test('should resolve the dependency on CompleteTaskUseCase', () => {
    // Execute
    const result = container.get<CompleteTaskUseCase>(TASK_SYMBOLS.TASK_COMPLETE);
    // Assert
    expect(result).toBeInstanceOf(CompleteTaskUseCase);
  });
  test('should resolve the dependency on DeleteTaskByIdUseCase', () => {
    // Execute
    const result = container.get<DeleteTaskByIdUseCase>(TASK_SYMBOLS.TASK_DELETE);
    // Assert
    expect(result).toBeInstanceOf(DeleteTaskByIdUseCase);
  });
});
