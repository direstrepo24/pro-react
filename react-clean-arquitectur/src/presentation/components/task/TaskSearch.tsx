interface TaskSearchProps {
    onChange: (query: string) => void;
}
const TaskSearch = ({ onChange }: Readonly<TaskSearchProps>) => {
    return (
        <div>
                <input
                type="text"
                placeholder="Buscar tarea..."
                    onChange={(event) => onChange ? onChange(event.target.value) : null}
                />
        </div>
    );
}
export default TaskSearch