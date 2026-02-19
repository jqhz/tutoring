import React, {useState, useRef} from 'react';
import './index.css';
import Task from './components/task.tsx';
import Input from './components/input.tsx'

interface task {
  id: number;
  text: string;
}

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<task[]>([]);
  const nextId = useRef(1)

  const addTask = () => {
    const text = input.trim();
    if (text.length === 0) return;
    setList([...list, {id:nextId.current++, text}])
    setInput("");
  }

  const deleteTask = (id:number) => {
    setList(list.filter((task) => task.id !== id));
  }

  return (
    <div>
      <Input 
        text={input}
        onAdd={addTask}
        onChange={setInput}
      />
      { list.length > 0 ? (
        list.map((task) => 
          <div key={task.id}>
            <Task
              task={task}
              onDelete={deleteTask}

            />
          </div>
        )
      ) : (
        <div>None</div>
      )}
    </div>
  )
}

export default App;