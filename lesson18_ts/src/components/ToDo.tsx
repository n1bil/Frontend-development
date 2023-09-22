import React, { ChangeEvent, MouseEvent, useState } from 'react'
import './ToDo.css';

interface ITask {
    name: string, 
    completed: boolean
}

const ToDo: React.FC = (): JSX.Element => {
    const [tasks, setTasks] = useState<ITask[]>([]);   // useState<{name: string, completed: boolean}[]>([]);
    const [task, setTask] = useState<ITask>( {name: '', completed: false} );
    const [check, setCheck] = useState<boolean>(false);

    // task = {name: '', completed: false} - wrong
    // setTask({name: '', completed: false}) - correct

    const handleTaskNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask({
            name: e.target.value, 
            completed: false
        });
    };

    const handleAddTask = (e: MouseEvent<HTMLButtonElement>) => {
        setTasks((prev) => [...prev, task]);
        setTask({
            name: '',
            completed: false
        })
    }

    const handleIsDone = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked);
        setCheck(e.target.checked);

        const copy = [...tasks];

        const arr = copy.filter(task => {
            return task.name === e.target.value;    // get one element
        });
        arr[0].completed = e.target.checked;        // get status checked (true or false)
        const index = copy.findIndex(task => {
            return arr[0].name = task.name;         // find index by name
        });

        copy[index] = arr[0];                       // 
        setTasks(copy);
        
    }

    const handleRemoveTask = (index: number): void => {
        const updatedTask = [...tasks];

        updatedTask.splice(index, 1);
        
        setTasks(updatedTask);
    }


  return (
    <div className='container'>
        <h1 className='title' style={{ fontSize: '24px', marginBottom: '10px'}}>ToDo App</h1>
        <input onChange={handleTaskNameChange} value={task.name} type="text" placeholder='Enter a task...' className='newInputClass' />
        <button id='addTask' onClick={handleAddTask}>Add</button>
        <ol id='taskList'>
            {tasks.map((task, index) => (
               <div key={index} className='task'>
                    <li style={task.completed ? {textDecoration: 'line-through'} : {}}>
                        <span>{index + 1}. </span>
                        {task.name}
                        <input type="checkbox" style={{ marginLeft: '10px' }} id="isDone" onChange={handleIsDone} name='completed' value={task.name}/>
                        <button onClick={() => handleRemoveTask(index)} className='removeButton'>Remove</button>
                    </li>
               </div>
            ))}
        </ol>
    </div>
  );
}

export default ToDo;

// export function ToDo() {

// const task = (document.getElementById("taskInput") as HTMLInputElement).value;
// const addTaskButton: HTMLElement | null = document.getElementById("addTask");
// const taskListUl: HTMLElement | null = document.getElementById("taskList");

// addTaskButton?.addEventListener("click", addTask);

// if (taskListUl) {
//     taskListUl.addEventListener("click", (e) => {
//         const target = e.target as HTMLElement;
//         if (target.tagName === "Button") {
//             if (target.parentElement) {
//                 target.parentElement.remove();
//             }
//         }

//         const check = e.target as HTMLInputElement;
//         if (check) {
//             const previousElement =
//                 target.previousElementSibling as HTMLElement;
//             if (previousElement) {
//                 previousElement.style.textDecoration = "line-through";
//             }
//         }
//     });
// }

// function addTask() {
//     const taskName = task.trim();
//     if (taskName) {
//         const li = document.createElement('li');
//         li.innerHTML = `<span>${taskName}</span>
//                         <input type='checkbox'>
//                         <button>Delete</button>`;
//         taskListUl?.appendChild(li);
//     }
// }
// }