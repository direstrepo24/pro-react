import React, { useState } from 'react'
import { Failure, NoParams, NoResult } from '@core/index';
import { CreateTaskRequestDom, TaskDom } from '@domain/tasks';
import { AllTasksUseCase, CompleteTaskUseCase, CreateTaskUseCase, DeleteTaskByIdUseCase, SearchTasksUseCase } from '@application/task';
 
function useTask(
    allTasksUseCase: AllTasksUseCase,
    completeTaskssUseCase: CompleteTaskUseCase,
    deleteTaskssUseCase: DeleteTaskByIdUseCase,
    searchTaskssUseCase: SearchTasksUseCase,
    createTaskssUseCase: CreateTaskUseCase) {
 
    const [tasks, setTasks] = useState<TaskDom[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
 
    React.useEffect(() => {
        allTasks()
    }, [allTasksUseCase])
 
    const searchTasks = async (query: string) => {
        const result = await searchTaskssUseCase?.execute(query)
        result.fold((data: TaskDom[]) => setTasks(data), (_: Failure) => setError(true))
    };
 
    const allTasks = async () => {
        setLoading(true)
        const result = await allTasksUseCase?.execute(NoParams)
        result.fold((data: TaskDom[]) => setTasks(data), (_: Failure) => setError(true))
        setLoading(false)
    };
 
    const completeTask = async (id: number) => {
        const result = await completeTaskssUseCase.execute(id)
        result.fold((_: NoResult) => {allTasks()}, (_: Failure) => setError(true))
    };
   
    const deleteTask = async (id: number) => {
        const result = await deleteTaskssUseCase.execute(id)
        result.fold((_: NoResult) => {allTasks()}, (_: Failure) => setError(true))
    };
 
    const addTask = async (newTask: CreateTaskRequestDom) => {
        const result = await createTaskssUseCase?.execute(newTask)
        result.fold((_: TaskDom) => {allTasks()}, (_: Failure) => setError(true))
    };
   
    return {
        tasks,
        loading,
        error,
        completeTask,
        deleteTask,
        searchTasks,
        allTasks,
        addTask
    };
}
export { useTask }