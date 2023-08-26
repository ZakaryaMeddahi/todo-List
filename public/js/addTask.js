const inputTask = document.getElementById("task-input");
const myButton = document.getElementById("btn");

myButton.addEventListener("click", () => {
    console.log(inputTask.value);
});