import updateRequest from "./modules/putRequest.js";
import deleteRequest from "./modules/deleteRequest.js";

const inputTask = document.getElementById("task-input");
const addButton = document.getElementById("btn");

const createTaskDom = (taskTitle) => {
    const newTask = document.createElement('div');
    newTask.classList = 'Card-Task grid gap-3.5 grid-cols-auto bg-amber-200 p-2.5 mb-1.5 border border-solid border-orange-400 rounded items-center';
    newTask.innerHTML = `
        <p class="task-txt text-xl text-black">${ taskTitle }</p>
        <input class="check-box h-5 w-5" type="checkbox"/>
        <i class="fa-solid fa-trash text-xl text-red-700 cursor-pointer"></i>
    `
    return newTask;
}

const cleanContainer = (tasksContainer) => {
    const tasksDom = tasksContainer.innerHTML;
    if(!tasksDom.match('Card-Task')) {
        tasksContainer.innerHTML = '';
    }
}

const updateListener = (newTask, checkBox, id) => {
    checkBox.addEventListener('click', () => {
        const taskTitle = newTask.querySelector('.task-txt');
        updateRequest(checkBox, taskTitle, id);
    });
}

const deleteListener = (deleteIcon, id) => {
    deleteIcon.addEventListener('click', event => {
        const task = event.target.parentElement;
        deleteRequest(task, id);
    })
}

const createTask = (data) => {
    const tasksContainer = document.getElementById('tasks');
    const newTask = createTaskDom(data.task.title);
    const checkBox = newTask.querySelector('.check-box');
    const deleteIcon = newTask.querySelector('.fa-trash');
    const id = newTask.dataset.id = data.task.id;
    updateListener(newTask, checkBox, id);
    deleteListener(deleteIcon, id);
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

