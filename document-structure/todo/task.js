const input = document.getElementById('task__input');
const taskForm = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (input.value) {
            addTask(input.value); 
        }
    }
});

function addTask(taskName) {
    // основной div
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskList.insertAdjacentElement("beforeend", taskDiv);
    // div с названием задачи
    const taskText = document.createElement('div');
    taskText.className = 'task__title';
    taskText.textContent = taskName;
    taskDiv.insertAdjacentElement("beforeend", taskText);
    // кнопка удаления
    taskDiv.innerHTML +='<a href="#" class="task__remove">&times;</a>';
    // очистка формы
    taskForm.reset();
    // удаление элемента из списка при нажатии кнопки
    const remove = taskDiv.querySelector('.task__remove');
    remove.addEventListener('click', (element) => {
        element.target.parentElement.remove();
    })
}

