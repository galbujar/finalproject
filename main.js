const main = document.querySelector('main');
const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todo');
const todoList = document.querySelector('ul');

let thingsTodo = [];

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todo = todoInput.value;
    let object = {
        "thingsTodo" : todo,
        "done": false
    }

    if (thingsTodo.length < 10) {
    thingsTodo.push(todo);    
    }
    console.log(thingsTodo);
    todoInput.value = '';
    renderTodoList();
})

function renderTodoList() {
    const template = thingsTodo.map(item => `<li>${item}</li>`);
    todoList.innerHTML = template.join('');
}

todoList.addEventListener('click', function(event) {
    if(event.target.matches('.done')) {
        todoList[index].done = !thingsTodo[index].done;
        renderTodoList();
    }
})

todoList.addEventListener('click', function(event) {
    if(event.target.matches('.delete')) {
        const index = event.target.dataset.index;
        todoList.splice(index, 1);
        renderTodoList();
    }
})