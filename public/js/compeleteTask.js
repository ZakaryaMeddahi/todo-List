let isCompeleted = false;
const tsk = document.querySelectorAll(".task-txt");
const checkBox = document.querySelectorAll(".check-Box");
checkBox.forEach(checkBox => {
    checkBox.addEventListener('click', event => {
        let target = event.target;
        let checkBoxIden = document.getElementById(target.id).getAttribute('iden');
        for (let index = 0; index < tsk.length; index++) {
            taskIden = tsk[index].getAttribute('iden');
            if (taskIden == checkBoxIden) {
                if (isCompeleted) {                    
                    document.getElementById(target.id).style.backgroundColor = 'transparent';
                    document.getElementById(tsk[index].id).style.textDecoration = 'none';
                } else {
                    document.getElementById(target.id).style.backgroundColor = 'white';
                    document.getElementById(tsk[index].id).style.textDecoration = 'line-through';
                }
                isCompeleted = !isCompeleted;
            }
            
        }
    });
});