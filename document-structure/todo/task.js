const addBtn = document.getElementById('tasks__add');
const input = document.getElementById('task__input');
const taskForm = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value.trim()) {
        addTask(input.value); 
    }
});

function addTask(taskName) {
    // основной div
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskList.insertAdjacentElement("beforeend", taskDiv);
    // div с названием задачи
    taskDiv.innerHTML +=`<div class="task__title">${taskName}</div>`;
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

