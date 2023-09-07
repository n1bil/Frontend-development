const task = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskListUl = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

taskListUl.addEventListener('click', (e) => {
    console.log(e);
    // const spanText = e.target.previousSibling;
    // spanText.classList.add('strikeThrough');
    if (e.target.tagName === 'BUTTON') {            // if we clicked the button
        // console.log('We clicked the button');       // output log
        e.target.parentElement.remove();
    }
    if (e.target.checked) {     // if checked = true
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