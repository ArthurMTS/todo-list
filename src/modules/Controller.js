class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.handleAddProject = (title, description) => {
      this.model.addProject(title, description);
      this.onProjectListChange(this.model.projects);
    }

    this.handleEditProject = (projectID, title, description) => {
      this.model.editProject(projectID, title, description);
      this.onProjectListChange(this.model.projects);
    }

    this.handleDeleteProject = (projectID) => {
      this.model.deleteProject(projectID);
      this.onProjectListChange(this.model.projects);
    }

    this.handleAddTodo = (projectID, title, description, dueData, priority) => {
      projectID = Number(projectID);

      this.model.addTodo(projectID, title, description, dueData, priority);
      this.onTodoListChange(projectID);
    }

    this.handleEditTodo = (projectID, todoID, title, description, dueData, priority) => {
      projectID = Number(projectID);
      todoID = Number(todoID);

      dueData = dueData.split('-').reverse().join('/');

      this.model.editTodo(projectID, todoID, title, description, dueData, priority);
      this.onTodoListChange(projectID);
    }

    this.handleDeleteTodo = (projectID, todoID) => {
      projectID = Number(projectID);
      todoID = Number(todoID);

      this.model.deleteTodo(projectID, todoID);
      this.onTodoListChange(projectID);
    }

    this.handleToggleTodo = (projectID, todoID) => {
      projectID = Number(projectID);
      todoID = Number(todoID);

      this.model.toggleTodo(projectID, todoID);
      this.onTodoListChange(projectID);
    }

    this.view.bindAddProject(this.handleAddProject);
    this.view.bindEditProject(this.handleEditProject);
    this.view.bindHandleDeleteProject(this.handleDeleteProject);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindHandleDeleteTodo(this.handleDeleteTodo);
    this.view.bindHandleToggleTodo(this.handleToggleTodo);
    this.view.bindHandleEditTodo(this.handleEditTodo);

    this.onProjectListChange(this.model.projects);
    if (this.model.projects.length > 0) this.view.displayProject(this.model.projects[0]);
  }

  onProjectListChange(projects) {
    this.view.displayProjectList(projects);
    this._commit(this.model.projects);
  }

  onTodoListChange(projectID) {
    const [ project ] = this.model.projects.map(project => projectID === project.id && project);
    this.view.displayTodos(project.todos);
    this._commit(this.model.projects);
  }

  _commit(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}

export default Controller;