const taskInput = document.querySelector('#task');
const taskForm = document.querySelector('#task-form');





// Events
taskForm.addEventListener('submit', addTask);



function addTask(e) {
	console.log(123);

	e.preventDefault();
}