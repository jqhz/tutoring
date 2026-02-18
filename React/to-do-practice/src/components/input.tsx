type Props = {
    value: string;
    onChange: (s:string) => void;
    onAdd: () => void;

}

const Input = ({value, onChange, onAdd}: Props) => {
    return (
        <div className="flex justify-between items-center">
            <input 
                value={value}
                className="bg-amber-700"
                onChange={(e) => onChange(e.target.value)}
            >
            </input>
            <button className="bg-violet-700" onClick={onAdd}>
                Add
            </button>
        </div>
    )
}


export default Input;