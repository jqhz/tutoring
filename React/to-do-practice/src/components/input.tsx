type Props = {
    value: string;
    onChange: (s:string) => void;
    onAdd: () => void;
    placeholder?:string;
    isAdding?:boolean;
}

const Input: React.FC<Props> = ({value, onChange, onAdd, placeholder, isAdding}) => {
    return(
        <div className="w-full flex gap-2 items-center">
            <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder || "Add a new task"}
            />
            <button
                className={`px-4 py-2 rounded ${isAdding ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                onClick={onAdd}
                disabled={isAdding}
            >
                {isAdding ? 'Adding...' : 'Add'}
            </button>
        </div>
    )
}

export default Input;