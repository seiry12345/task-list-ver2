const taskInput = document.querySelector('#task');
const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');





// Events
taskForm.addEventListener('submit', addTask);


function addTask(e) {
	let li = document.createElement('li');
	

	if(taskInput.value.length < 3) {
		li.appendChild(document.createTextNode(taskInput.value));

		console.log('type valid value');
	} else {
		console.log('all ok');
	}


	e.preventDefault();
}