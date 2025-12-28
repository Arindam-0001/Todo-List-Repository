const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";

  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", function () {
    todoItem.remove();
  });

  todoItem.appendChild(span);
  todoItem.appendChild(deleteBtn);
  todoList.appendChild(todoItem);

  todoInput.value = "";
}