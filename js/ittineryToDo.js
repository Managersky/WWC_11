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
    todoText.textContent = "Free beer on the top of the mountain";

    //merge all
    todoBar.appendChild(todoText);
    todoBar.appendChild(todoDelete);
    todo.appendChild(todoBar);

    todoList1.append(todo);

    foo = todoList1.querySelectorAll(".top-element-bar");
    replaceText(foo[0].firstChild, "Climbing with a guide");
    console.log(foo.length);
    if (foo.length === 3) {
        replaceText(foo[1].firstChild, "Sheep gazing");
    }
}

function addInformation() {
    const todo = document.createElement('p');
    todo.classList.add('added-destination-info');
    todo.innerText = "That's all we have to offer. Thank you!";
    todoList1.append(todo);
}

function replaceText(el, str) {
    el.textContent ? el.textContent = str : el.innerText = str;
}

document.addEventListener('DOMContentLoaded', function () {
    todoList1 = document.getElementById('todoList1');
    todoForm1 = document.getElementById('todoForm1');
    todoList2 = document.getElementById('todoList2');
    todoForm2 = document.getElementById('todoForm2');

    todoForm1.addEventListener('click', function (e) {
        e.preventDefault();
        if (todoList1.childElementCount < 3) {
            addDestination();
        } else  {
            todoForm1.parentNode.style.visibility = 'hidden';
            addInformation();
        }
    });

    todoList1.addEventListener('click', function (e) {
        if (e.target.closest('.todo-element-delete') !== null) {
            e.target.closest('.added-destination').remove();
            if (todoForm1.parentNode.style.visibility === 'hidden') {
                todoList1.lastElementChild.remove();
            }
            todoForm1.parentNode.style.visibility = 'visible';
        }
    });

});