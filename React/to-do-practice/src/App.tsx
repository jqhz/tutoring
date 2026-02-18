import React, { useState, useRef } from 'react'
import './index.css'
import Input from './components/input.tsx';
import Task from './components/task.tsx';

interface Task {
  id: number;
  text: string;
}

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<Task[]>([]);
  const nextId = useRef(1);
  const addTask = () => {
    const text = input.trim();
    if (text.length === 0) return;
    setList([...list, { id: nextId.current++, text }]);
    setInput("");
  }

  const deleteTask = (id: number) => {
    setList(list.filter((task)=>task.id !== id));
  }
  
  return (
    <div className="w-70 mx-auto ">
      <Input 
        value={input}
        onChange={setInput}
        onAdd={addTask}
      />
        { list.length > 0 ? (
            list.map((task) => 
              <div key={task.id} className="shrink-0">
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
