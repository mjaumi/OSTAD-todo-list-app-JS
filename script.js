// function to load tasks from local storage declared here
function loadTasks() {
    const taskList = JSON.parse(localStorage.getItem('task-list')) || []

    taskList.forEach(task => addTaskToDOM(task));
}

// function to add tasks to DOM declared here
function addTaskToDOM(taskText) {
    const taskList = document.getElementById('task-list')

    let li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText}</span>
        <span>
            <span class="edit" onclick="editTask(this)" >Edit</span>
            <span class="delete" onclick="deleteTask(this)" >Delete</span>
        </span>
    `

    taskList.appendChild(li)
}

// function to save tasks to local storage declared here
function saveTasksToLocalStorage(newTask) {
    const taskList = JSON.parse(localStorage.getItem('task-list')) || []

    taskList.push(newTask);

    localStorage.setItem('task-list', JSON.stringify(taskList))
}

// function to add new task declared here
function addNewTask() {
    const taskInput = document.getElementById('task-input')

    if (!taskInput.value) {
        alert('Please, type your task first!!')
        return
    }

    addTaskToDOM(taskInput.value)
    saveTasksToLocalStorage(taskInput.value)

    taskInput.value = ''
}

loadTasks()