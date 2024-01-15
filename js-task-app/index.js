let idCount = 1;

const documentBody = document.querySelector("body");

//creating and appending heading
const h1 = document.createElement("h1");
h1.textContent = "Task List App";
documentBody.appendChild(h1);

//creating form and adding input and button
const taskForm = document.createElement("form");
taskForm.id = "taskForm";
taskForm.addEventListener("submit", (e) => handleSubmit(e));

const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.id = "taskInput";
taskInput.placeholder = "Add a new task";
taskInput.name = "task";
taskForm.appendChild(taskInput);

const addTaskButton = document.createElement("button");
addTaskButton.textContent = "Add Task";
addTaskButton.type = "submit";
taskForm.appendChild(addTaskButton);
documentBody.appendChild(taskForm);

const listContainer = document.createElement("div");
listContainer.id = "taskContainer";
documentBody.appendChild(listContainer);

const ul = document.createElement("ul");
ul.id = "taskList";
listContainer.appendChild(ul);

//submit event handler (creates a new task li with a delete button)
function handleSubmit(e) {
  e.preventDefault();
  const newLi = document.createElement("li");
  newLi.className = "taskItem";
  newLi.textContent = e.target.task.value;
  newLi.id = `task${idCount}`;
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "Done!";
  deleteBtn.addEventListener("click", clickHandler);
  deleteBtn.id = `delete${idCount}`
  newLi.appendChild(deleteBtn);
  ul.appendChild(newLi);
  idCount++;
  taskForm.reset();
}

//click event handler to remove task from list
function clickHandler(e){
    const id = e.target.id
    const idNum = id.charAt(id.length - 1)
    const taskToRemove = document.querySelector(`#task${idNum}`)
    ul.removeChild(taskToRemove)
}
