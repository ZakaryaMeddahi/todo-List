let target;
let checkBoxIden;
isCompeleted = false;
const tasks = document.querySelectorAll(".task-txt");
const checkBox = document.querySelectorAll(".check-Box");


checkBox.forEach(checkBox => {
    checkBox.addEventListener('click', event => {
        target = event.target;
        checkBoxIden = document.getElementById(target.id).getAttribute('iden');
        for (let index = 0; index < tasks.length; index++) {
            taskIden = tasks[index].getAttribute('iden');
            if (taskIden == checkBoxIden) {
                if (isCompeleted) {                    
                    document.getElementById(target.id).style.backgroundColor = 'transparent';
                    document.getElementById(tasks[index].id).style.textDecoration = 'none';
                } else {
                    document.getElementById(target.id).style.backgroundColor = 'white';
                    document.getElementById(tasks[index].id).style.textDecoration = 'line-through';
                }
                isCompeleted = !isCompeleted;
            }
            
        }
    });
});