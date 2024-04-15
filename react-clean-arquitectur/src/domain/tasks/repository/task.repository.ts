import { Failure, NoResult, Result } from "@core/index"
import { TaskDom } from "../models/task-response.dom"
import { CreateTaskRequestDom } from "../models/task-request.dom"

export interface TaskRepository{
    complete(id: number) : Promise<Result<NoResult, Failure>>
    search(query: String) : Promise<Result<TaskDom[], Failure>>
    list() : Promise<Result<TaskDom[], Failure>>
    create(request: CreateTaskRequestDom): Promise<Result<TaskDom, Failure>>
    deleteById(id: number): Promise<Result<NoResult, Failure>>
}