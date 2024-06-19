

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority-select');
    const categorySelect = document.getElementById('category-select');
    const dueDateInput = document.getElementById('due-date-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value;
        const priority = prioritySelect.value;
        const category = categorySelect.value;
        const dueDate = dueDateInput.value;

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');
        taskDetails.innerHTML = `
            <strong>${taskText}</strong> 
            <span>(${priority})</span> 
            <span>[${category}]</span> 
            <span>Due: ${dueDate}</span>
        `;
        taskItem.appendChild(taskDetails);

        const taskActions = document.createElement('div');
        taskActions.classList.add('task-actions');

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-button');
        completeButton.innerText = 'Complete';
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
        taskActions.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        taskActions.appendChild(deleteButton);

        taskItem.appendChild(taskActions);
        taskList.appendChild(taskItem);

        taskInput.value = '';
        prioritySelect.value = 'low';
        categorySelect.value = 'work';
        dueDateInput.value = '';
    });
});
