const deleteIcons = document.querySelectorAll(".fa-trash");
const cardTask = document.querySelectorAll(".Card-Task");

// deleteIcons.forEach(element => {
//     element.addEventListener("click", (event) => {
//         target = event.target;
//         console.log(target)
//         for (let index = 0; index < cardTask.length; index++) {
//             if (target.id == cardTask[index].getAttribute("iden")) {
//                 cardTask[index].remove()
//             }  
//         }
//     });
// });

import deleteRequest from "./modules/deleteRequest.js";

deleteIcons.forEach(icon => {
    icon.addEventListener('click', event => {
        const task = event.target.parentElement;
        deleteRequest(task, id);
    });
})