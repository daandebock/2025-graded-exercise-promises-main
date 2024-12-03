import listenToUpdates from "./listentoupdates.js";

let data = [];
let listsDom = document.querySelector(".todo-list");

export default function displayToDo() {
  let filter = document.querySelector("#completed").checked;
  fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((json) => {
      data = json.todos;
      console.log(data);
      if (!filter) {
        displayInDom(data);
      } else {
        const filteredData = data.filter((todo) => {
          return todo.completed === true;
        });
        displayInDom(filteredData);
      }
    })
    .then(() => listenToUpdates());
}

function displayInDom(data) {
  listsDom.innerHTML = "";
  listsDom.innerHTML = `<div class="loader"></div>
`;
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
  listsDom = document.querySelector(".todo-list");
  listsDom.innerHTML = "";
  listsDom.innerHTML = toDoItems;
}
