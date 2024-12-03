export default function deleteToDo(id) {
  fetch(`https://dummyjson.com/todos/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(console.log);
}
