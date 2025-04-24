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