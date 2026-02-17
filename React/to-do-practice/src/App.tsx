import * as React from 'react'
import './index.css'

const { useState } = React;
import Input from './components/input.tsx';
import Task from './components/task.tsx';

const App = () => {
  // const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  return (
    <div>
      <Input text={text} onTextChange={setText} />
      {tasks.map((task, index) => (
        <Task key={index} name={task} />
      ))}
    </div>

  )
}
  

export default App;
