interface TaskItem {
    id: number;
    text: string;
}

type Props = {
    task: TaskItem;
    onDelete: (id:number) => void;
}

const Task = ({task, onDelete}: Props) => {
    return (
        <div className="flex justify-between items-center">
            <p>{task.text}</p>
            <button className="bg-blue-600" onClick={() => onDelete(task.id) }>
                Delete
            </button>
        </div>
    )
}

export default Task;