class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.handleAddProject = (title, description) => {
      this.model.addProject(title, description);
      this.onProjectListChange(this.model.projects);
    }

    this.handleRenderProject = () => {}

    this.handleEditProject = () => {}

    this.handleDeleteProject = () => {}

    this.handleAddTodo = () => {}

    this.handleEditTodo = () => {}

    this.handleDeleteTodo = () => {}

    this.handleToggleTodo = () => {}

    this.view.bindAddProject(this.handleAddProject);

    this.onProjectListChange(this.model.projects);
  }

  onProjectListChange(projects) {
    this.view.displayProjectList(projects);
  }

  onTodoListChange() {}
}

export default Controller;