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
        <div>
            <p>
                {task.text}
            </p>
            <button
                onClick={() => onDelete(task.id)}
            >
                Delete
            </button>

        </div>
    )
}

export default Task;