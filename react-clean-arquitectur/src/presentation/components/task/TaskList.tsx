import { TaskDom } from "@domain/tasks";
import CheckIcon from "@presentation/assets/icons/CheckIcon";
import DeleteIcon from "@presentation/assets/icons/DeleteIcon";
interface TaskListProps {
    items: TaskDom[];
    onComplete: (task: TaskDom) => void;
    onDelete: (task: TaskDom) => void;
}
const TaskList = ({ items = [], onComplete, onDelete }: Readonly<TaskListProps>) => {
    return (
        <>
            {items.map(task => (
                <li key={task.id} className="item-list bg-white">
                    <CheckIcon className="icon-button" width="38" height="38" fill={task.completed ? 'green' : 'gray'} onClick={() => onComplete(task)} />
                    <p className={`item-list-p  ${task.completed ? "item-list-p--complete" : ""} `}>
                        {task.name}
                    </p>
                    <DeleteIcon className="icon-button" width="38" height="38" onClick={() => onDelete(task)} />
                </li>
            ))}
        </>
    )
}
export default TaskList