const cardTask = document.querySelectorAll(".Card-Task");
const deleteIcons = document.querySelectorAll(".fa-trash");

deleteIcons.forEach(element => {
    element.addEventListener("click", (event) => {
        target = event.target;
        console.log(target)
        for (let index = 0; index < cardTask.length; index++) {
            if (target.id == cardTask[index].getAttribute("iden")) {
                cardTask[index].remove();
            }
        }
    });
});