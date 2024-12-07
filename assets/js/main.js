const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
    const todoText = input.value.trim();
    if (todoText) {
        addTodoItem(todoText);
        input.value = '';
    }
});

function addTodoItem(text) {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    const span = document.createElement('span');
    span.classList.add('text');
    span.textContent = text;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    //! Complete
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completeButton.classList.add('complete');
    completeButton.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    //! Edit
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    editButton.classList.add('edit');
    editButton.addEventListener('click', () => {
        const newText = prompt('Edit your task:', span.textContent);
        if (newText !== null && newText.trim() !== '') {
            span.textContent = newText.trim();
        }
    });

    //! Delete
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    buttonsDiv.appendChild(completeButton);
    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(buttonsDiv);
    todoList.appendChild(li);
}
