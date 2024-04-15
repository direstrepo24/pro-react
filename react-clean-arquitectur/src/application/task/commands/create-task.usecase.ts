
import { inject, injectable } from "inversify";
import  { Command, Failure, Result } from "@core/index";
import { TaskDom } from "@domain/tasks/models/task-response.dom";
import { CreateTaskRequestDom, TASK_SYMBOLS, type TaskRepository } from "@domain/tasks";

@injectable()
export class CreateTaskUseCase extends Command<Promise<Result<TaskDom, Failure>>,CreateTaskRequestDom> {
    constructor(
        @inject(TASK_SYMBOLS.TASK_REPOSITORY)
        private readonly _taskRepository: TaskRepository,
    ) {
        super()
    }
    execute = (params: CreateTaskRequestDom): Promise<Result<TaskDom, Failure>> => this._taskRepository.create(params);
}