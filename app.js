const form = document.querySelector("form");
const toDoList = document.querySelector("#todo-list");
const buttons = document.querySelectorAll("li #remove");
const newLi = document.createElement("li");
const buttons2 = document.querySelectorAll("li #mark-completed");

for (let button of buttons) {
  button.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
}

for (let button of buttons2) {
  button.addEventListener("click", function (event) {
    event.target.parentElement.style.textDecoration = "line-through";
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newToDoInput = document.querySelector("#todo_item");
  const newLi = document.createElement("li");
  const newButton = document.createElement("button");
  newLi.innerText = newToDoInput.value;
  newButton.innerText = "Remove";

  newButton.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });

  const newButton2 = document.createElement("button");
  newButton2.innerText = "Mark Completed";

  newButton2.addEventListener("click", function (event) {
    event.target.parentElement.style.textDecoration = "line-through";
  });
  newLi.append(" ", newButton);
  newLi.append(" ", newButton2);
  toDoList.append(" ", newLi);
  form.reset();
});
