const taskInput = document.querySelector("#task");
const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");

// Events
taskForm.addEventListener("submit", addTask);
clearBtn.addEventListener('click', clearAllTask);

function addTask(e) {
  if (taskInput.value.length < 3) {
    console.log("please type valid value");
  } else {
    let li = document.createElement("li");
    li.className = "collection-item";
    li.innerHTML =
      taskInput.value +
      '<a href="#" class="remove-task" style="float: right;"><i class="fa fa-times" aria-hidden="true"></i></a>';
    taskList.appendChild(li);
  }

  e.preventDefault();
  clearFields();
}

function clearFields() {
  taskInput.value = "";
}

function clearAllTask(e) {
	taskList.children.forEach(function(item) {
		console.log(item);
	})

	e.preventDefault();
}
