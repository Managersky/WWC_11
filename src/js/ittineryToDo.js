let todoList1 = null;
let todoList2 = null;
let todoForm1 = null;
let todoForm2 = null;

function addDestination(todoList, todoForm) {

    this.init = function () {
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

    todoList.append(todo);

    //text for form list 1
    subDestination1 = todoList1.querySelectorAll(".top-element-bar");
    replaceText(subDestination1[0].firstChild, "Climbing with a guide");

    if (subDestination1.length === 3) {
        replaceText(subDestination1[1].firstChild, "Sheep gazing");
    }

    };

    this.removeElement = function () {
    todoList.addEventListener('click', function (e) {
        if (e.target.closest('.todo-element-delete') !== null) {
            e.target.closest('.added-destination').remove();
            if (todoForm.parentNode.style.visibility === 'hidden') {
                todoList.lastElementChild.remove();
            }
            todoForm.parentNode.style.visibility = 'visible';
        }
    });
    };

    this.addInformation = function () {
        const todo = document.createElement('p');
        todo.classList.add('added-destination-info');
        todo.innerText = "That's all we have to offer. Thank you!";
        todoList.append(todo);
    };

    function replaceText(el, str) {
        el.textContent ? el.textContent = str : el.innerText = str;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    todoList1 = document.getElementById('todoList1');
    todoForm1 = document.getElementById('todoForm1');
    todoList2 = document.getElementById('todoList2');
    todoForm2 = document.getElementById('todoForm2');

    const destination1 = new addDestination(todoList1, todoForm1);
    todoForm1.addEventListener('click', function (e) {
        e.preventDefault();
        if (todoList1.childElementCount < 3) {
            destination1.init();
        } else  {
            todoForm1.parentNode.style.visibility = 'hidden';
            destination1.addInformation();
        }
    });
    destination1.removeElement();

    const destination2 = new addDestination(todoList2, todoForm2);
    todoForm2.addEventListener('click', function (e) {
        e.preventDefault();
        if (todoList2.childElementCount < 3) {
            destination2.init();
        } else  {
            todoForm2.parentNode.style.visibility = 'hidden';
            destination2.addInformation();
        }
    });
    destination2.removeElement();
});
