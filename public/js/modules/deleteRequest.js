

const deleteRequest = (task, id) => {
  fetch(`/${id}`, {
    method: 'DELETE'
  })
  .then(response => {
      if (response.ok) return response.json();
  })
  .then(data => {
      console.log(data.message);
      task.remove();
  })
  .catch(err => {
      console.error(err);
  })
}

export default deleteRequest