document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateTaskStatus); 
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDateTime = document.getElementById('taskDateTime');

    const taskText = taskInput.value;
    const taskTime = taskDateTime.value;

    if (!taskText || !taskTime) {
        alert('Please fill out all fields.');
        return;
    }

    const li = document.createElement('li');
    li.className = 'pending';
    li.innerHTML = `
        <div class="check-icon-container">
            <svg class="check-icon" onclick="markAsCompleted(this)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <span>${taskText} <br> Due: ${taskTime}</span>
    `;
    li.dataset.time = taskTime;

    const taskList = document.getElementById('taskList');
    taskList.appendChild(li);

    taskInput.value = '';
    taskDateTime.value = '';
}
