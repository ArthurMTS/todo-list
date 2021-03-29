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

    this.handleEditTodo = () => {}

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

    this.onProjectListChange(this.model.projects);
  }

  onProjectListChange(projects) {
    this.view.displayProjectList(projects);
  }

  onTodoListChange(projectID) {
    const [ project ] = this.model.projects.map(project => projectID === project.id && project);
    this.view.displayTodos(project.todos);
  }
}

export default Controller;