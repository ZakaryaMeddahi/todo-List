
const modifyCheckbox = (taskTitle, checkBox) => {
  if(checkBox.checked) {
      taskTitle.style.textDecoration = 'line-through';
      return;
  }
  if(!checkBox.checked) {
      taskTitle.style.textDecoration = 'none';
  }
}

export default modifyCheckbox