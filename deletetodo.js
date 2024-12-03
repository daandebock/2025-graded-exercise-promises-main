import displayToDo from "./displaytodo.js";
export default function deleteToDo(id) {
  fetch(`https://dummyjson.com/todos/${id}`, {
    method: "DELETE",
  }).then(() => displayToDo());
}
