// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask);
    // clear task eevent
    clearbtn.addEventListener('click', clearTasks)
    // Filter task events
    filter.addEventListener('keyup', filterTasks);
}

// Add Task function
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    // Create textNode and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // clear Input
    taskInput.value = '';

    e.preventDefault();
}

// Remove task function
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }

    e.preventDefault();
}

// clear tasks function
function clearTasks(e) {
    // taskList.innerHTML = '';

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    e.preventDefault();
}

// filter tasks function
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(tasks) {
            const item = tasks.firstChild.textContent;
            if(item.toLocaleLowerCase().indexOf(text) != -1) {
                tasks.style.display = 'block';
            } else {
                tasks.style.display = 'none';
            }
        }
    );

    e.preventDefault();
}