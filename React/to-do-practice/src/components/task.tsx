// import { useState } from 'react';

// interface TaskItem {
//     id: number;
//     text: string;
// }

// type Props = {
//     task: TaskItem;
//     onDelete: (id: number) => void;
//     onUpdate: (id: number, newText: string) => void;
// }

// const Task = ({task, onDelete, onUpdate}: Props) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [editText, setEditText] = useState(task.text);

//     const startEdit = () => {
//         setEditText(task.text);
//         setIsEditing(true);
//     }
//     const saveEdit = () => {
//         const next = editText.trim();
//         if (next.length === 0) return;
//         if (next !== task.text) onUpdate(task.id, next);
//         setIsEditing(false);
//     }

//     const cancelEdit = () => {
//         setEditText(task.text);
//         setIsEditing(false);
//     }

//     return(
//         <div className="bg-blue-300 gap-4">
//             <div className="flex-1">
//                 {!isEditing ? (
//                     <p>{task.text}</p>
//                 ) : (
//                     <input
//                         className="w-full p-2 border border-gray-300 rounded"
//                         type="text"
//                         value={editText}
//                         onChange={(e) => setEditText(e.target.value)}
//                         onKeyDown={(e) => {
//                             if (e.key === "Enter") saveEdit();
//                             if (e.key === "Escape") cancelEdit();
//                         }}
//                     />
//                 )}
//             </div>
//             <div className="flex gap-2">
//                 {!isEditing ? (
//                     <>
//                         <button
//                             onClick={startEdit}
//                             className="px-4 py-2 bg-green-500 text-white rounded"
//                         >
//                             Edit
//                         </button>
//                         <button
//                             onClick={() => onDelete(task.id)}
//                             className="px-4 py-2 bg-red-500 text-white rounded"
//                         >
//                             Delete
//                         </button>
//                     </>
//                 ) : (
//                     <>
//                         <button
//                             onClick={saveEdit}
//                             className="px-4 py-2 bg-green-500 text-white rounded"
//                         >
//                             Save
//                         </button>
//                         <button
//                             onClick={cancelEdit}
//                             className="px-4 py-2 bg-gray-400 text-white rounded"
//                         >
//                             Cancel
//                         </button>
//                     </>
//                 )}            
//             </div>
//         </div>
//     )    
// }

// export default Task;
import React, { useState } from 'react';
interface TaskItem {
    id: number;
    text: string;
}

type Props = {
    task: TaskItem;
    onDelete: (id: number) => void;
    onUpdate: (id: number, newText: string) => void;
}

const Task = ({task, onUpdate, onDelete}: Props) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const startEdit = () => {
        setEditText(task.text);
        setIsEditing(true);
    }
    const saveEdit = () => {
        const next = editText.trim();
        if (next.length === 0) return;
        if (next !== task.text) onUpdate(task.id, next);
        setIsEditing(false);
    }

    const cancelEdit = () => {
        setEditText(task.text);
        setIsEditing(false);
    }
    return (
        <div className="bg-blue-300 gap-4">
             <div className="flex-1">
                 {!isEditing ? (
                     <p>{task.text}</p>
                 ) : (
                     <input
                         className="w-full p-2 border border-gray-300 rounded"
                         type="text"
                         value={editText}
                         onChange={(e) => setEditText(e.target.value)}
                         onKeyDown={(e) => {
                             if (e.key === "Enter") saveEdit();
                             if (e.key === "Escape") cancelEdit();
                         }}
                     />
                 )}
             </div>
             <div className="flex gap-2">
                 {!isEditing ? (
                     <>
                         <button
                             onClick={startEdit}
                             className="px-4 py-2 bg-green-500 text-white rounded"
                         >
                             Edit
                         </button>
                         <button
                             onClick={() => onDelete(task.id)}
                             className="px-4 py-2 bg-red-500 text-white rounded"
                         >
                             Delete
                         </button>
                     </>
                 ) : (
                     <>
                         <button
                             onClick={saveEdit}
                             className="px-4 py-2 bg-green-500 text-white rounded"
                         >
                             Save
                         </button>
                         <button
                             onClick={cancelEdit}
                             className="px-4 py-2 bg-gray-400 text-white rounded"
                         >
                             Cancel
                         </button>
                     </>
                 )}            
             </div>
         </div>
    )
} 

export default Task;