// function to load tasks from local storage declared here
function loadTasks() {
    const taskList = JSON.parse(localStorage.getItem('task-list')) || []

    taskList.forEach(task => addTaskToDOM(task));
}

// function to add tasks to DOM declared here
function addTaskToDOM(task) {
    const taskList = document.getElementById('task-list')

    let li = document.createElement('li');

    li.innerHTML = `
        <span>
            <span class="task-id">${task.id}.</span>
            <span class="task-text">${task.text}</span>
        </span>
        <span>
            <span class="edit" onclick="editTask(this)">Edit</span>
            <span class="delete" onclick="deleteTask(this)">Delete</span>
        </span>
    `

    taskList.appendChild(li)
}

// function to add new task declared here
function addNewTask() {
    const taskInput = document.getElementById('task-input')

    if (!taskInput.value) {
        alert('Please, type your task first!!')
        return
    }

    const taskList = JSON.parse(localStorage.getItem('task-list')) || []

    const newTask = { id: taskList.length + 1, text: taskInput.value }

    addTaskToDOM(newTask)

    taskList.push(newTask)
    localStorage.setItem('task-list', JSON.stringify(taskList))

    taskInput.value = ''
}

// function to delete task from list declared here
function deleteTask(element) {
    const taskTextElement = element.parentElement.parentElement

    const taskId = taskTextElement.firstElementChild.firstElementChild.innerText.split('.')[0]

    taskTextElement.remove()

    // saving updated task into local storage here
    let taskList = JSON.parse(localStorage.getItem('task-list')) || []
    taskList = taskList.filter(task => task.id !== Number(taskId))
    localStorage.setItem('task-list', JSON.stringify(taskList))
}

loadTasks()