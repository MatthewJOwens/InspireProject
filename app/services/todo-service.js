import store from "../store.js";
import ToDo from "../models/todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/matt/todos",
  timeout: 8000
});

class TodoService {
  getTodos() {
    todoApi.get()
      //TODO Handle this response from the server
      .then(res => {
        let todos = res.data.data.map(t => new ToDo(t))
        console.log("Getting the Todo List", todos);
        store.commit("todos", todos)
      })
      .catch(err => console.error(err))
  }

  addTodoAsync(todo) {
    todoApi.post("", todo)
      //TODO Handle this response from the server (hint: what data comes back, do you want this?)
      .then(res => { this.getTodos() })
      .catch(err => console.log(err))
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    if (todo) {
      todo.completed = !todo.completed
    }

    //TODO do you care about this data? or should you go get something else?
    todoApi.put(todoId, todo)
      .then(res => { this.getTodos() })
      .catch(err => console.error(err))
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    todoApi.delete(todoId)
      .then(res => { this.getTodos() })
      .catch(err => console.error(err))
  }
}

const todoService = new TodoService();
export default todoService;
