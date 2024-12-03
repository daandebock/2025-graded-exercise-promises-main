import listenToUpdates from "./listentoupdates.js";

let data = [];
const listsDom = document.querySelector(".todo-list");
export default function displayToDo() {
  fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((json) => {
      data = json.todos;
      console.log(data);
      displayInDom(data);
    })
    .then(() => listenToUpdates());
}

function displayInDom(data) {
  listsDom.innerHTML = "";
  const toDoItems = data.map((todo) => {
    let isChecked = "";
    if (todo.completed) {
      isChecked = "checked";
    }
    return `<label class="todo" id="${todo.id}">
         <input class="todo__state" type="checkbox" ${isChecked} />
         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25"
            class="todo__icon">
            <use xlink:href="#todo__line" class="todo__line"></use>
            <use xlink:href="#todo__box" class="todo__box"></use>
            <use xlink:href="#todo__check" class="todo__check"></use>
            <use xlink:href="#todo__circle" class="todo__circle"></use>
         </svg>
         <div class="todo__text">${todo.todo}</div>
         <button class="delete"> delete </button>
      </label>`;
  });
  listsDom.innerHTML = toDoItems;
}
