
import { inject, injectable } from "inversify";
import  { Command, Failure, NoResult, Result } from "@core/index";
import { TASK_SYMBOLS, type TaskRepository } from "@domain/tasks";

@injectable()
export class CompleteTaskUseCase extends Command<Promise<Result<NoResult, Failure>>,number> {
    constructor(
        @inject(TASK_SYMBOLS.TASK_REPOSITORY)
        private readonly _taskRepository: TaskRepository,
    ) {
        super()
    }
    execute = (params: number): Promise<Result<NoResult, Failure>> => this._taskRepository.complete(params);
}