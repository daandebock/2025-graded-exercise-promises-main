import deleteToDo from "./deletetodo.js";
import updateToDO from "./updatatodo.js";
import displayToDo from "./displaytodo.js";
export default function listenToUpdates() {
  // listeners to checkbox updates
  const labels = document.querySelectorAll(".todo");
  labels.forEach((label) => {
    label.addEventListener("change", (e) => {
      updateToDO(e.currentTarget.id, e.target.checked);
    });
  });

  // listeners to deletions
  labels.forEach((label) => {
    label.addEventListener("click", (e) => {
      if (e.target.className === "delete") {
        console.log(e.currentTarget.id);
        deleteToDo(e.currentTarget.id);
      }
    });
  });

  // listen to filter for completed task
  const completedTaskCheckbox = document.querySelector("#completed");
  completedTaskCheckbox.addEventListener("change", (e) => {
    e.preventDefault();
    displayToDo();
  });
}
