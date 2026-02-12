import React, { useRef,useState } from 'react'
import './index.css'
import Input from './components/input.tsx'
import Task from './components/task.tsx'

interface Task {
  id: number;
  text: string;
}

// const App = () => {
//   const [userInput, setUserInput] = useState("");
//   const [list, setList] = useState<Task[]>([]);
//   const nextId = useRef(1);

//   const addTask = () => {
//     const text = userInput.trim();
//     if (text.length === 0) return;
//     setList([...list, { id: nextId.current++, text }]);
//     setUserInput("");
//   }

//   const deleteTask = (id: number) => {
//     setList(list.filter((task) => task.id !== id));
//   }

//   const updateTask = (id: number, newText: string) => {
//     setList((prev) => prev.map((t) => (t.id === id ? { ...t, text: newText } : t)));
//   }
//   return (
//     <div className="w-full max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
//         <div className="mb-4">
//           <Input
//             value={userInput}
//             onChange={setUserInput}
//             onAdd={addTask}
//           />
//         </div>

//         <div className="space-y-2">
//           {list.length === 0 ? (
//             <div className="text-center text-red-500">No tasks yet. Add one above!</div>
//           ) : (
//             list.map((task) => (
//               <div key={task.id} className="shrink-0">
//               <Task
//                 task={task}
//                 onDelete={deleteTask}
//                 onUpdate={updateTask}
//               />
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

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
    setList(list.filter((task) => task.id !== id));
  }

  const updateTask = (id: number, newText: string) => {
    setList((prev) => prev.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  }

  return (
    <div>
      <div>
        <h1 className="text-center text-blue-500 font-bold text-5xl">Todo</h1>
        <div>
          <Input 
            value={input}
            onChange={setInput}
            onAdd={addTask}
            placeholder='balls'
          />
        </div>
        <div>
          {list.length > 0 ? (
            list.map((task) => (
              <div key={task.id} className="shrink-0">
              <Task
                task={task}
                onDelete={deleteTask}
                onUpdate={updateTask}
              />
              </div>
            ))
          ) : (
            <div>No tasks</div>
          )}
        </div>
      </div>
    </div>
  )
}
export default App;
