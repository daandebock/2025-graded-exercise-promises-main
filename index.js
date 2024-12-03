// all imports
import displayToDo from "./displaytodo.js";
import addToDo from "./addToDo.js";

// setTimeout(function () {
//   document
//     .querySelector('input[type="checkbox"]')
//     .setAttribute("checked", true);
// }, 100);

function init() {
  displayToDo();
  addToDo();
}
init();
