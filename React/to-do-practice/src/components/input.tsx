type Props = {
    onTextChange(value: string): void;
    text: string;
}

export default function Input (props: Props) {
    
    return (
        <>
            <input className="flex mx-auto border-blue-500 bg-amber-100" type="text" value={props.text} onChange={(e) => props.onTextChange(e.target.value)}  />
            <button className="flex mx-auto border-blue-500 bg-slate-700 text-white" onClick={() => props.onTextChange("")}>Add Task</button>
        </>
    );
}