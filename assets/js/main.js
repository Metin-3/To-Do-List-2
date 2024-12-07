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

    const modal = document.querySelector(".modal")

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
        modal.classList.add("modal-active")

        modal.innerHTML = `
        <div class="modal-todo-container">
            <div class="modal-input-section">
                <input type="text" value=${span.textContent} id="modal-todo-input" placeholder="Add your new ToDo...">
            </div>
        </div>
        `


        //! Edit modal
        const completeButtonModal = document.createElement('button');
        const editButtonModal = document.createElement('button');
        const deleteButtonModal = document.createElement('button');

        completeButtonModal.innerHTML = '<i class="fa-solid fa-check"></i>';
        editButtonModal.innerHTML = '<i class="fa-solid fa-pencil"></i>';
        deleteButtonModal.innerHTML = '<i class="fa-solid fa-trash"></i>';

        completeButtonModal.classList.add('complete');
        editButtonModal.classList.add('edit');
        deleteButtonModal.classList.add('delete');


        editButtonModal.addEventListener('click', () => {
            const inputElement = document.getElementById("modal-todo-input");
            const newText = inputElement.value;
            if (newText !== null && newText.trim() !== '') {
                span.textContent = newText.trim();
            }

            modal.classList.remove("modal-active")
        });


        modal.appendChild(completeButtonModal);
        modal.appendChild(editButtonModal);
        modal.appendChild(deleteButtonModal);

        //! Delete
        deleteButtonModal.addEventListener('click', () => {
            li.remove();
            modal.classList.remove("modal-active")
        });

        //! Complet modal
        completeButtonModal.addEventListener('click', () => {
            modal.classList.remove("modal-active")
            li.classList.toggle('completed');
        });
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
