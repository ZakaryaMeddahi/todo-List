var tasks = ['Listning English In Youtube', 'Practice English Speaking With People In Discord','Read Books','Write Short graph', 'play valo']

const deleteIcons = document.querySelectorAll(".fa-trash");
const cardTask = document.querySelectorAll(".Card-Task");

deleteIcons.forEach(element => {
    element.addEventListener("click", (event) => {
        target = event.target;
        console.log(target)
        for (let index = 0; index < cardTask.length; index++) {
            if (target.id == cardTask[index].getAttribute("iden")) {
                cardTask[index].remove()
            }  
        }
    });
});