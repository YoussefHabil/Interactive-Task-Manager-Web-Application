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