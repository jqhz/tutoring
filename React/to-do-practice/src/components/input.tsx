type Props = {
    value: string;
    onAdd: () => void;
    onChange: (s:string) => void;
}

const Input = ({value, onAdd, onChange}: Props) => {
    return (
        <div>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
            </input>
            <button onClick={onAdd}>
                Add
            </button>
        </div>
    )
}
export default Input;