import React, { useState } from "react";

function ToDo() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        const trimmedTask = task.trim();
        if (trimmedTask) {
            setTasks([...tasks, { name: trimmedTask, completed: false }]);
            setTask("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    const handleIsDone = (e, taskIndex) => {
        const updatedTasks = [...tasks];
        updatedTasks[taskIndex].completed = e.target.checked;
        setTasks(updatedTasks);
    }

    return (
        <div className="container">
            <h1>TODO List App</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task..."
                />
                <button id="addTask" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <div key={index} className="task">
                        <li style={task.completed ? {textDecoration: 'line-through'} : {}}>
                            <span>{index + 1}. </span>
                            {task.name}
                            <input type="checkbox" id="isDone" onChange={(e) => handleIsDone(e, index)} checked={task.completed} />
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    </div>
                ))}
            </ol>
        </div>
    );
}

export default ToDo;

/*
const task = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskListUl = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

taskListUl.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
    if (e.target.checked) {
        e.target.previousElementSibling.style.textDecoration = 'line-through';
    } else {
        e.target.previousElementSibling.style.textDecoration = 'none';
    }
})

function addTask() {
    const taskName = task.value.trim();
    if (taskName) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskName}</span>
                        <input type='checkbox'>
                        <button>Delete</button>`;
        taskListUl.appendChild(li);
    }
    task.value = '';
}
*/