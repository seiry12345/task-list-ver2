const taskInput = document.querySelector('#task');
const taskForm = document.querySelector('#task-form');
const tasksList = document.querySelector('.collection');





// Events
taskForm.addEventListener('submit', addTask);



function addTask(e) {
	if(taskInput.value.length < 3) {
		console.log('type valid value');
	} else {
		console.log('all ok');
	}


	e.preventDefault();
}