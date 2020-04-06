export default class ToDo {
  constructor(data) {
    this._id = data._id;
    this.description = data.description || "Unknown";
    this.completed = data.completed || false;
    this.user = data.user;
  }

  get Template() {
    let template = /*html*/`
      <dd>
      <div class="form-check form-check-inline">
      `
    if (this.completed) {
      template += /*html*/`
          <label class="form-check-label">
            <input onclick="app.todoController.toggleTodoStatus('${this._id}')" class="form-check-input" type="checkbox" name="checkbox" id="${this._id}" checked> <strike>${this.description}</strike>
          </label>`
    } else {
      template += /*html*/`
            <label class="form-check-label">
              <input onclick="app.todoController.toggleTodoStatus('${this._id}')" class="form-check-input" type="checkbox" name="checkbox" id="${this._id}"> ${this.description}
            </label>`
    }
    template += /*html*/`
    </div>
  <i class="far fa-trash-alt" onclick="app.todoController.removeTodo('${this._id}')"></i>
    </dd>
    `
    return template
  }
}