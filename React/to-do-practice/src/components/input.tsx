type Props = {
    text: string;
    onAdd: () => void; 
    onChange: (s:string) => void; 
}

const Input = ({text, onAdd, onChange}:Props) => {
    return (
        <div>
            <input
                value={text}
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