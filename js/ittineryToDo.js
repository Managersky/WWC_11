let todoList1 = null;
let todoList2 = null;
let todoForm1 = null;
let todoForm2 = null;

function addDestination() {
    //element todo
    const todo = document.createElement('div');
    todo.classList.add('added-destination');

    //upper bar
    const todoBar = document.createElement('div');
    todoBar.classList.add('top-element-bar');

    //delete btn
    const todoDelete = document.createElement('button');
    todoDelete.classList.add('todo-element-delete');
    todoDelete.classList.add('button');
    todoDelete.innerHTML = '<i class="fas fa-times-circle"></i>';

    //text element
    const todoText = document.createElement('p');
    todoText.classList.add('todo-element-text');
    todoText.innerText = "Lorem Ipsum";

    //merge all
    todoBar.appendChild(todoText);
    todoBar.appendChild(todoDelete);
    todo.appendChild(todoBar);

    todoList1.append(todo);
}

document.addEventListener('DOMContentLoaded', function () {
    todoList1 = document.getElementById('todoList1');
    todoForm1 = document.getElementById('todoForm1');
    todoList2 = document.getElementById('todoList2');
    todoForm2 = document.getElementById('todoForm2');
    console.log(todoForm1);
    todoForm1.addEventListener('click', function (e) {
        e.preventDefault();
        // const textarea = this.querySelector('textarea');
        // if (textarea.value !== '') {
        //     addDestination(textarea.value);
        //     textarea.value = '';
        // }
        console.log("klik");
        addDestination();
    });

    todoList1.addEventListener('click', function (e) {
        if (e.target.closest('.todo-element-delete') !== null) {
            e.target.closest('.todo-element').remove();
        }
    });

});