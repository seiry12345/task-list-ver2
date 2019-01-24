const taskInput = document.querySelector('#task');
const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');





// Events
taskForm.addEventListener('submit', addTask);


function addTask(e) {
	if(taskInput.value.length < 3) {
		let li = document.createElement('li');
		li.className = 'collection-item';
		li.innerHTML = taskInput.value;
		taskList.appendChild = li;


		console.log('type valid value');
	} else {
		console.log('all ok');
	}


	e.preventDefault();
}