class ProjectModel {
  constructor(TodoModel) {
    this.projects = JSON.parse(localStorage.getItem('projects')) || [
      { id: 1, title: 'Default', description: 'lorem ipsum dolor amet', todos: [
        {id: 1, title: 'Test', description: 'lorem ipsum', dueData: '10/04/2021', priority: 'medium', checked: true}
      ] }
    ];

    this.addTodo = (projectId, title, description = '', dueData = '', priority = 'low') => {
      this.projects = this.projects.filter(project => 
        project.id === projectId ?
          project.todos = TodoModel.addTodo(project.todos, title, description, dueData, priority) :
          project
      );
    }
  
    this.editTodo = (projectId, todoId, title, description, dueData, priority) => {
      this.projects = this.projects.filter(project =>
        project.id === projectId ?
          project.todos = TodoModel.editTodo(
            project.todos,
            todoId,
            title,
            description,
            dueData,
            priority
          ) :
          project
      );
    }
  
    this.deleteTodo = (projectId, todoId) => {
      this.projects = this.projects.filter(project => 
        project.id === projectId ?
          project.todos = TodoModel.deleteTodo(project.todos, todoId) :
          project
      );
    }

    this.toggleTodo = (projectId, todoId) => {
      this.projects = this.projects.filter(project => 
        project.id === projectId ?
          project.todos = TodoModel.toggleTodo(project.todos, todoId) :
          project
      );
    }
  }

  addProject(title, description = '') {
    const project = {
      id: this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 1,
      title,
      description,
      todos: [],
    }

    this.projects.push(project);
  }

  editProject(id, title, description) {
    this.projects = this.projects.map(project =>
      project.id === id ? 
        { 
          id: project.id,
          title: title ? title : project.title,
          description: description ? description : project.description,
          todos: project.todos,  
        } : 
        project
      );
  }

  deleteProject(id) {
    this.projects = this.projects.filter(project => project.id !== id);
  }
}

export default ProjectModel;