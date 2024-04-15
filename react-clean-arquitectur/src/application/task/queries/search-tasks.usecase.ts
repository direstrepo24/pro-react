
import { inject, injectable } from "inversify";
import  { Command, Failure, Result } from "@core/index";
import { TASK_SYMBOLS, TaskDom, type TaskRepository } from "@domain/tasks";

@injectable()
export class SearchTasksUseCase extends Command<Promise<Result<TaskDom[], Failure>>,string> {
    constructor(
        @inject(TASK_SYMBOLS.TASK_REPOSITORY)
        private readonly _taskRepository: TaskRepository,
    ) {
        super()
    }
    execute = (params: string): Promise<Result<TaskDom[], Failure>> => this._taskRepository.search(params);
}