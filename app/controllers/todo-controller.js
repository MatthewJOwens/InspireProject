import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos
  let template = /*html*/`
  <p class="m-0 p-1">Total items: ${todos.length}</p>
  `

  todos.forEach(todo => template += todo.Template)

  document.getElementById("todos").innerHTML = template
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe("todos", _drawTodos)
    TodoService.getTodos();
  }

  addTodo(e) {
    e.preventDefault();
    let form = e.target;
    let todo = {
      //TODO build the todo object from the data that comes into this method
      description: form.description.value,
    };
    TodoService.addTodoAsync(todo);
    form.reset()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
