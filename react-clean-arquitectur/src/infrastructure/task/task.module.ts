import { TASK_SYMBOLS, TaskRepository } from "@domain/tasks";
import { ContainerModule } from "inversify";
import { TaskImplRepository } from "./task-impl.repository";
import { CreateTaskUseCase } from "@application/task/commands/create-task.usecase";
import { DeleteTaskByIdUseCase } from "@application/task/commands/delete-task-by-id.usecase";
import { SearchTasksUseCase } from "@application/task/queries/search-tasks.usecase";
import { AllTasksUseCase } from "@application/task/queries/all-tasks.usecase";
import { CompleteTaskUseCase } from "@application/task/commands/complete-task.usecase";
 
const taskModule = new ContainerModule((bind) => {
    bind<TaskRepository>(TASK_SYMBOLS.TASK_REPOSITORY)
      .to(TaskImplRepository)
      .inSingletonScope();
    bind<AllTasksUseCase>(TASK_SYMBOLS.TASK_LIST)
      .to(AllTasksUseCase)
      .inSingletonScope();
    bind<SearchTasksUseCase>(TASK_SYMBOLS.TASK_SEARCH)
      .to(SearchTasksUseCase)
        .inSingletonScope();
    bind<CreateTaskUseCase>(TASK_SYMBOLS.TASK_CREATE)
      .to(CreateTaskUseCase)
      .inSingletonScope();
    bind<CompleteTaskUseCase>(TASK_SYMBOLS.TASK_COMPLETE)
        .to(CompleteTaskUseCase)
        .inSingletonScope();
    bind<DeleteTaskByIdUseCase>(TASK_SYMBOLS.TASK_DELETE)
      .to(DeleteTaskByIdUseCase)
      .inSingletonScope();
   
  });
  export { taskModule };