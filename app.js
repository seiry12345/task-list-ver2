window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  const taskInput = document.querySelector("#task");
  const taskForm = document.querySelector("#task-form");
  const taskList = document.querySelector(".collection");
  let taskItem = document.querySelectorAll('.collection li');
  const clearBtn = document.querySelector(".clear-task");
  const filter = document.querySelector('#filter');

  // Events
  taskForm.addEventListener("submit", addTask);
  clearBtn.addEventListener("click", removeAllTasks);
  taskList.addEventListener("click", removeTask);
  filter.addEventListener('input', filterTask);
  getTasks();

  function addTask(e) {
    let task = taskInput.value;
    if (task.length < 3) {
      console.log("please type valid value");
    } else {
      let li = document.createElement("li");
      li.className = "collection-item";
      li.innerHTML =
        task +
        '<a href="#" class="remove-task" style="float: right;"><i class="fa fa-times" aria-hidden="true"></i></a>';
      taskList.appendChild(li);

      storeTask(task);
      clearFields();
    }

    e.preventDefault();
  }

  function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(elem) {
      let li = document.createElement("li");
      li.className = "collection-item";
      li.innerHTML =
      elem +
        '<a href="#" class="remove-task" style="float: right;"><i class="fa fa-times" aria-hidden="true"></i></a>';
      taskList.appendChild(li);
    });
  }

  function removeStoreTask(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(elem, i) {
      if(taskItem.textContent === elem) {
        tasks.splice(i, 1);
      }

      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  }

  function storeTask(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function clearFields() {
    taskInput.value = "";
  }

  function removeAllTasks(e) {
    while (taskList.firstElementChild) {
      taskList.firstElementChild.remove();
    }
    
    localStorage.removeItem('tasks');
    e.preventDefault();
  }

  function removeTask(e) {
    let target = e.target;
    if (target.classList.contains("fa-times")) {
      target.parentElement.parentElement.remove();
    }

    removeStoreTask(target.parentElement.parentElement);
    e.preventDefault();
  }

  function filterTask(e) {
    let filterVal = filter.value;
    taskItem = Array.from(taskItem);
    taskItem.forEach(elem => {
      let elemText = elem.textContent.toLowerCase();
      if (elemText.indexOf(filterVal.toLowerCase()) == -1) {
        elem.style.display = 'none';
      } else {
        elem.style.display = 'block';
      }

      if (filterVal == '') {
        elem.style.display = 'block';
      }
    });
  }
});