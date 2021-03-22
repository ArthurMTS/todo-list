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

    this.handleRenderProject = () => {}

    this.handleAddTodo = () => {}

    this.handleEditTodo = () => {}

    this.handleDeleteTodo = () => {}

    this.handleToggleTodo = () => {}

    this.view.bindAddProject(this.handleAddProject);
    this.view.bindEditProject(this.handleEditProject);
    this.view.bindHandlerDeleteProject(this.handleDeleteProject);

    this.onProjectListChange(this.model.projects);
  }

  onProjectListChange(projects) {
    this.view.displayProjectList(projects);
  }

  onTodoListChange() {}
}

export default Controller;