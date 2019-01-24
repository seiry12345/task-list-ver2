const taskInput = document.querySelector("#task");
const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");

// Events
taskForm.addEventListener("submit", addTask);

function addTask(e) {
  if (taskInput.value.length < 3) {
    console.log("please type valid value");
  } else {
    let li = document.createElement("li");
    li.className = "collection-item";
    li.innerHTML = taskInput.value + '<a href="#" style="float: right;"><i class="fa fa-times" aria-hidden="true"></i></a>';
		taskList.appendChild(li);
  }

  e.preventDefault();
}
