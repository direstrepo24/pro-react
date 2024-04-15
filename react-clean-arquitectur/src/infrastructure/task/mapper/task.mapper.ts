import { CreateTaskRequestDom, TaskDom } from "@domain/tasks";
import { TaskDto, TaskRequestDto } from "../dtos/task.dto";

export class TaskMapper{
    static toDto(request: CreateTaskRequestDom): TaskRequestDto {
        return  <TaskRequestDto>{
            id: new Date().getTime(),
            name: request.name,
            complete: request.complete
        }
    }

    static toDom(request: TaskDto): TaskDom {
        return  <TaskDom>{
            id: request.id,
            name: request.name,
            completed: request.complete
        }
    }
}