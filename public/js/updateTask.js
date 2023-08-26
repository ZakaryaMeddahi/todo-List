var updateValue;
var target;
var input = document.createElement("input");
const tasks = document.querySelectorAll(".task-txt");
const card_Task = document.querySelectorAll(".Card-Task");



tasks.forEach(element => {
    element.addEventListener("click", (event) => {
        target = event.target;
        target.remove();
        for (let index = 0; index < card_Task.length; index++) {
            if (card_Task[index].getAttribute("iden") === target.getAttribute("iden")) {
                card_Task[index].prepend(input);
                input.value = target.innerText;
                console.log(card_Task[index]);
                input.style.backgroundColor = "transparent";
                input.style.border = "none";
                input.style.fontSize = "32px";
                input.onblur = () => {
                    input.id = "updateTask";
                    updateValue = input.value;
                    input.remove();
                    target.innerText = updateValue;
                    card_Task[index].prepend(target);
                }
            }
            
        }
        
    });
});
