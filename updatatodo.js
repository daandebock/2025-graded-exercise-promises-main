import displayToDo from "./displaytodo.js";
export default function updateToDO(id, checked) {
  fetch(`https://dummyjson.com/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed: checked,
    }),
  })
    .then((res) => res.json())
    .then(() => displayToDo());
}
