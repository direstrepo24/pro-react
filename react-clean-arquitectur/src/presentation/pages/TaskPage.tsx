
import { CreateTaskRequestDom, TASK_SYMBOLS, TaskDom } from '@domain/tasks'
import { useTranslation } from 'react-i18next';
import { di } from '@di/app.container';
import { AllTasksUseCase, CompleteTaskUseCase, CreateTaskUseCase, DeleteTaskByIdUseCase, SearchTasksUseCase } from '@application/task';
import { useTask } from '@presentation/hooks/use-task'
import Button from '@presentation/components/atomic/atoms/Button';
import TaskSearch from '@presentation/components/task/TaskSearch';
import TaskList from '@presentation/components/task/TaskList';
 
function TaskPage() {
  const {t} = useTranslation();
  const {
    tasks,
    loading,
    completeTask,
    allTasks,
    searchTasks,
    deleteTask,
    addTask } = useTask(
      di.get<AllTasksUseCase>(TASK_SYMBOLS.TASK_LIST),
      di.get<CompleteTaskUseCase>(TASK_SYMBOLS.TASK_COMPLETE),
      di.get<DeleteTaskByIdUseCase>(TASK_SYMBOLS.TASK_DELETE),
      di.get<SearchTasksUseCase>(TASK_SYMBOLS.TASK_SEARCH),
      di.get<CreateTaskUseCase>(TASK_SYMBOLS.TASK_CREATE)
    );
  return (
    <>
      <h1 className='text-red-500 uppercase text-lg mt-5'>{t("title")}</h1>
      <TaskSearch onChange={(query: string) => query ? searchTasks(query): allTasks()} />
      {loading && ( <h1>Cargando...</h1>)}
      {(!loading && tasks.length === 0) && <p> {t("emptyRecords")} </p>}
      <TaskList
        items={tasks}
        onDelete={(_: TaskDom) => deleteTask(_.id)}
        onComplete={(_: TaskDom) => completeTask(_.id)} />
      <br></br>
      <Button  onClick={() => addTask(new CreateTaskRequestDom(`Task ${tasks.length++}`, false))} >Agregar Tarea</Button>
    </>
  )
}
export default TaskPage