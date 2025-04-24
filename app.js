let tasks = [];
let currentFilter = 'all';

function addTask() {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({
            id: Date.now().toString(),
            text: text,
            completed: false
        });
        taskInput.value = '';
        renderTasks();
    }
}

// Add task event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    renderTasks();
}

function renderTasks() {
    // Filter tasks
    const filteredTasks = tasks.filter(task => {
        if (currentFilter === 'active') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
        return true;
    });

    // Update task list
    taskList.innerHTML = filteredTasks.map(task => `
        <li class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
            <span class="task-text">${task.text}</span>
            <button class="delete-btn">Delete</button>
        </li>
    `).join('');

    // Update remaining tasks
    const remainingTasks = tasks.filter(task => !task.completed).length;
    remainingTasksSpan.textContent = `${remainingTasks} ${remainingTasks === 1 ? 'task' : 'tasks'} remaining`;
}

// Initial render
renderTasks();