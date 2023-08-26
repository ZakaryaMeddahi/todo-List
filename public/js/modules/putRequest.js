import modifyCheckbox from "./checkbox.js";

const updateRequest = (checkBox, title, id) => {
    fetch(`/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title.textContent,
            isCompleted: checkBox.checked
        })
    })
    .then(response => {
        if (response.ok) return response.json();
    })
    .then(data => {
        console.log(data);
        modifyCheckbox(title, checkBox);
    })
    .catch(err => {
        console.error(err);
    })
}

export default updateRequest