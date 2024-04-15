import { injectable } from "inversify";
import { Failure, NoResult, Result, Right } from "@core/index";
import { CreateTaskRequestDom, TaskDom, TaskRepository } from "@domain/tasks";
import { TaskDto } from "./dtos/task.dto";
import { TaskMapper } from "./mapper/task.mapper";

@injectable()
export class TaskImplRepository implements TaskRepository {
    baseURL: any = "https://jsonplaceholder.typicode.com"
    keyTask = "KEY_TASK"
    constructor() { }

    get items(): TaskDto[] {
        return JSON.parse(localStorage.getItem(this.keyTask) || "[]");
    }

    async complete(id: number): Promise<Result<NoResult, Failure>> {
        let data = this.items;
        const index = data.findIndex(task => task.id === id);
        if (index !== -1) data[index].complete = true;
        localStorage.setItem(this.keyTask, JSON.stringify(data))
        return new Right(NoResult)
    }
    async search(query: String): Promise<Result<TaskDom[], Failure>> {
        let data = this.items;
        const listaFiltrada = data.filter(task => task.name.toLowerCase().includes(query.toLowerCase()));
        return new Right(listaFiltrada.map(TaskMapper.toDom))
    }
    async list(): Promise<Result<TaskDom[], Failure>> {
        await this.sleep(1000);
        return new Right(this.items.map(TaskMapper.toDom))
    }
    async create(request: CreateTaskRequestDom): Promise<Result<TaskDom, Failure>> {
        let data = this.items;
        let dto = TaskMapper.toDto(request)
        let list = [...data,dto]
        localStorage.setItem(this.keyTask, JSON.stringify(list))
        await this.sleep(500);
        return new Right(new TaskDom(dto.id, dto.name, dto.complete))
    }
    async deleteById(id: number): Promise<Result<NoResult, Failure>> {
        let data = this.items;
        const index = data.findIndex(task => task.id === id);
        if (index !== -1) data.splice(index, 1);
        localStorage.setItem(this.keyTask, JSON.stringify(data))
        return new Right(NoResult)
    }

    sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

}