
import { inject, injectable } from "inversify";
import  { Command, Failure, NoParams, Result } from "@core/index";
import { TASK_SYMBOLS, TaskDom, type TaskRepository } from "@domain/tasks";

@injectable()
export class AllTasksUseCase extends Command<Promise<Result<TaskDom[], Failure>>,NoParams> {
    constructor(
        @inject(TASK_SYMBOLS.TASK_REPOSITORY)
        private readonly _taskRepository: TaskRepository,
    ) {
        super()
    }
    execute = (_: NoParams): Promise<Result<TaskDom[], Failure>> => this._taskRepository.list();
}