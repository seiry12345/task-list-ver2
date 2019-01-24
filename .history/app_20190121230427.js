const taskInput = document.querySelector('#task');
const taskForm = document.querySelector('#task-form');





// Events
taskForm.addEventListener('submit', addTask);



function addTask(e) {
	// if(taskInput.value == undefined) {
	// 	console.log('type valid value');
	// } else {
	// 	console.log('all ok');
	// }

	console.log(taskInput.value);
	e.preventDefault();
}