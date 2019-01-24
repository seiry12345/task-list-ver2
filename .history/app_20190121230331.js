const taskInput = document.querySelector('#task');
const taskForm = document.querySelector('#task-form');





// Events
taskForm.addEventListener('submit', addTask);



function addTask(e) {
	if(taskInput.value == "null") {
		console.log('type valid value');
	} else {
		console.log('all ok');
	}

	e.preventDefault();
}