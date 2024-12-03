import displayToDo from "./displaytodo.js";
const inputForm = document.querySelector("#inputForm");
export default function addToDo() {
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputQuery = e.target.input.value;
    inputForm.reset();
    postDataToApi(inputQuery);
  });
}

function postDataToApi(data) {
  fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: `${data}`,
      completed: false,
      userId: 5,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      displayToDo();
    });
}
