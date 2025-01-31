document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateTaskStatus); 
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDateTime = document.getElementById('taskDateTime');
    const taskAssignee = document.getElementById('taskAssignee');

    const taskText = taskInput.value;
    const taskTime = taskDateTime.value;
    const assignee = taskAssignee.value;

    if (!taskText || !taskTime || !assignee) {
        alert('Please fill out all fields.');
        return;
    }

    const li = document.createElement('li');
    li.className = 'pending';
    li.innerHTML = ` <div class="check-icon-container">
            <svg class="check-icon" onclick="markAsCompleted(this)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
    ${taskText} - <strong>${assignee}</strong>  
       
         <br> Due: ${taskTime}
    `;
    
    li.dataset.time = taskTime;

    const taskList = document.getElementById('taskList');

    taskList.appendChild(li);
    taskInput.value = '';
    taskDateTime.value = '';
    taskAssignee.value = '';
}
function markAsCompleted(svg) {
    const li = svg.parentElement.parentElement; 
    li.className = 'completed';
    svg.parentElement.remove(); 

    const completedTaskList = document.getElementById('completedTaskList');
    completedTaskList.appendChild(li);
}
function updateTaskStatus() {
    const now = new Date().toISOString();
    const tasks = document.querySelectorAll('#taskList li.pending');

    tasks.forEach(task => {
        const taskTime = task.dataset.time;
        if (now > taskTime) {
            task.className = 'past-due';
            const checkIconContainer = task.querySelector('.check-icon-container');
            if (checkIconContainer) {
                checkIconContainer.remove(); 
            }

            const pastDueTaskList = document.getElementById('pastDueTaskList');
            pastDueTaskList.appendChild(task);
        }
    });
}


