let taskAdder = document.getElementById('tasks__add');
let taskInput = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');

function createTaskElement(taskText) {
    let newTask = document.createElement('div');
    let taskTitle = document.createElement('div');
    let taskRemove = document.createElement('a');

    newTask.classList.add('task');
    taskTitle.classList.add('task__title');
    taskRemove.classList.add('task__remove');
    taskRemove.setAttribute('href', '#');

    taskTitle.textContent = taskText;
    taskRemove.textContent = '\u00D7';

    tasksList.appendChild(newTask);
    newTask.appendChild(taskTitle);
    newTask.appendChild(taskRemove);
}

document.addEventListener('DOMContentLoaded', function() {
    let savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        while (tasksList.firstChild) {
            tasksList.removeChild(tasksList.firstChild);
        }
        savedTasks.forEach(function(taskText) {
            createTaskElement(taskText);
        });
    }
});

taskAdder.addEventListener('click', function(event) {
    addTask();
  });
document.addEventListener('keydown', function(event){
  if (event.key === 'Enter') {
  addTask();
  };
});

function addTask() {
    let taskText = taskInput.value;
    if (taskText === '' || typeof taskText !== 'string') {
        return;
    }
    taskInput.value = '';
  
    createTaskElement(taskText);

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

tasksList.addEventListener('click', function(event) {
    if(event.target.classList.contains('task__remove')) {
        let taskToRemove = event.target.parentElement;
        taskToRemove.remove();

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        let taskIndex = tasks.indexOf(taskToRemove.textContent.slice(0, -1));
        if (taskIndex > -1) {
            tasks.splice(taskIndex, 1);
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});