const task = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskListUl = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

taskListUl.addEventListener('click', (e) => {
    console.log(e);
    const spanText = e.target.previousSibling;
    spanText.classList.add('strikeThrough');
})

function addTask() {
    const taskName = task.value.trim();
    if (taskName) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskName}</span><button id="deleteButton">Delete</button>`;
        taskListUl.appendChild(li);
    }
    task.value = '';
}