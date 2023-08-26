import updateRequest from "./modules/putRequest.js";

const inputTask = document.getElementById("task-input");
const addButton = document.getElementById("btn");

const createTaskDom = (taskTitle) => {
    const newTask = document.createElement('div');
    newTask.classList.add('Card-Task');
    newTask.innerHTML = `
        <p class="task-txt">${ taskTitle }</p>
        <input class="check-box" type="checkbox", name="isCompleted"/>
        <i class="fa-solid fa-trash"></i>
    `
    return newTask;
}

const cleanContainer = (tasksContainer) => {
    const tasksDom = tasksContainer.innerHTML;
    if(!tasksDom.match('Card-Task')) {
        tasksContainer.innerHTML = '';
    }
}

const createTask = (data) => {
    const tasksContainer = document.getElementById('tasks');
    const newTask = createTaskDom(data.task.title);
    const checkBox = newTask.querySelector('.check-box');
    checkBox.addEventListener('click', () => {
        const taskTitle = newTask.querySelector('.task-txt');
        const id = newTask.dataset.id = data.task.id;
        updateRequest(checkBox, taskTitle, id);
    });
    cleanContainer(tasksContainer);
    tasksContainer.append(newTask);
}

addButton.addEventListener("click", () => {
    fetch('/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: inputTask.value })
    })
    .then(response => {
        if (response.ok) return response.json();
    })
    .then(data => {
        console.log(data);
        createTask(data);
    })
    .catch(err => {
        console.error(err);
    })
});

