class View {
  constructor() {
    this.app = this.getElement('#root');

    /* HEADER */
    this.header = this.createElement('header');
    this.header.id = 'main-header';

    this.headerTitle = this.createElement('h1');
    this.headerTitle.textContent = 'Todo List';

    this.header.append(this.headerTitle);
    /* HEADER END */

    /* MAIN */
    this.main = this.createElement('main');
    this.main.id = 'main';

    /* SECTION */
    this.projectContent = this.createElement('section');
    this.projectContent.id = 'project-content';

    this.projectTitle = this.createElement('input');

    this.projectDescription = this.createElement('textarea');

    this.saveProjectButton = this.createElement('button', 'button');
    this.saveProjectButton.textContent = 'Save';

    this.projectTodos = this.createElement('ul');

    this.addTodoButton = this.createElement('img', 'add');
    this.addTodoButton.src = './../src/assets/plus-circle.svg';
    this.addTodoButton.addEventListener('click', () => {
      this.todoForm.style.display = 'flex';
    });

    this.projectContent.append(
      this.projectTitle, 
      this.projectDescription, 
      this.saveProjectButton,
      this.projectTodos, 
      this.addTodoButton
    );
    /* SECTION END */

    /* ASIDE */
    this.projects = this.createElement('aside');
    this.projects.id = 'projects';

    this.projectsHeader = this.createElement('header');

    this.projectsHeaderTitle = this.createElement('h2');
    this.projectsHeaderTitle.textContent = 'Projects';

    this.addProjectButton = this.createElement('img');
    this.addProjectButton.src = './../src/assets/plus-circle.svg';
    this.addProjectButton.addEventListener('click', () => {
      this.projectForm.style.display = 'flex';
    });

    this.projectList = this.createElement('ul');
    this.projectList.id = 'project-list';
    
    this.projectsHeader.append(this.projectsHeaderTitle, this.addProjectButton);
    this.projects.append(this.projectsHeader, this.projectList);
    /* ASIDE END */

    this.main.append(this.projects, this.projectContent);
    /* MAIN END */

    /* PROJECT FORM */
    this.projectForm = this.createElement('form', 'form');
    this.projectForm.style.display = 'none';

    this.inputProjectTitle = this.createElement('input', 'input');
    this.inputProjectTitle.placeholder = 'Project Title';
    this.inputProjectTitle.required = true;

    this.inputProjectDescription = this.createElement('textarea');
    this.inputProjectDescription.placeholder = 'Project Description';

    this.submitProjectForm = this.createElement('button', 'submit');
    this.submitProjectForm.textContent = 'Submit';

    this.closeProjectForm = this.createElement('img', 'close');
    this.closeProjectForm.src = './../src/assets/x.svg';
    this.closeProjectForm.addEventListener('click', () => {
      this.projectForm.style.display = 'none';
    });

    this.projectForm.append(
      this.inputProjectTitle, 
      this.inputProjectDescription, 
      this.submitProjectForm,
      this.closeProjectForm
    );
    /* PROJECT FORM END */

    /* TODO FORM */
    this.todoForm = this.createElement('form', 'form');
    this.todoForm.style.display = 'none';

    this.inputTodoTitle = this.createElement('input', 'input');
    this.inputTodoTitle.placeholder = 'Todo Title';
    this.inputTodoTitle.required = true;

    this.inputTodoDescription = this.createElement('textarea');
    this.inputTodoDescription.placeholder = 'Todo Description';

    this.inputTodoDate = this.createElement('input', 'input');
    this.inputTodoDate.type = 'date';

    this.inputTodoPriority = this.createElement('select', 'input');
    this.inputTodoPriority.style.margin = '10px 0';
    
    this._default = this.createElement('option');
    this._default.disabled = true;
    this._default.selected = true;
    this._default.textContent = 'Select Priority';

    this._low = this.createElement('option');
    this._low.value = 'low';
    this._low.textContent = 'Low';

    this._medium = this.createElement('option');
    this._medium.value = 'medium';
    this._medium.textContent = 'Medium';

    this._high = this.createElement('option');
    this._high.value = 'high';
    this._high.textContent = 'High';

    this.inputTodoPriority.append(this._default, this._low, this._medium, this._high);

    this.submitTodoForm = this.createElement('button', 'submit');
    this.submitTodoForm.textContent = 'Submit';

    this.closeTodoForm = this.createElement('img', 'close');
    this.closeTodoForm.src = './../src/assets/x.svg';
    this.closeTodoForm.addEventListener('click', () => {
      this.todoForm.style.display = 'none';
    });

    this.todoForm.append(
      this.inputTodoTitle, 
      this.inputTodoDescription, 
      this.inputTodoDate,
      this.inputTodoPriority,
      this.submitTodoForm,
      this.closeTodoForm
    );
    /* TODO FORM END */

    this.app.append(this.header, this.main, this.projectForm, this.todoForm);
  }

  getElement(element) {
    return document.querySelector(element);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  bindHandlerDeleteProject(handler) {
    this.handlerDeleteProject = handler;
  }

  displayProjectList(projectList) {
    this.projectList.innerHTML = '';

    projectList.forEach(project => {
      const projectItem = this.createElement('li');
      projectItem.id = project.id;

      const text = this.createElement('span');
      text.textContent = project.title;

      const deleteButton = this.createElement('img');
      deleteButton.src = './../src/assets/trash-2.svg';

      projectItem.append(text, deleteButton);

      projectItem.addEventListener('click', () => {
        this.displayProject(project);
      });

      this.projectList.append(projectItem);
    });

    this.bindDeleteProject(this.handlerDeleteProject);
  }

  displayProject(project) {
    this.projectTitle.value = project.title;
    this.projectTitle.id = project.id;
    this.projectDescription.value = project.description;
    this.displayTodos(project.todos);
  }

  displayTodos(todoList) {
    this.projectTodos.innerHTML = '';

    todoList.forEach(todo => {
      const todoItem = this.createElement('li', 'todo');
      todoItem.id = todo.id;

      const toggle = this.createElement('input');
      toggle.type = 'checkbox';
      toggle.checked = todo.checked;

      const text = this.createElement('span');
      text.textContent = todo.title;
      if (todo.checked) text.style.textDecoration = 'line-through';

      const deleteButton = this.createElement('img');
      deleteButton.src = './../src/assets/trash-2.svg';

      todoItem.append(toggle, text, deleteButton);

      this.projectTodos.append(todoItem);
    });
  }

  bindAddProject(handler) {
    this.projectForm.addEventListener('submit', event => {
      event.preventDefault();

      const title = this.inputProjectTitle.value;
      const description = this.inputProjectDescription.value;

      this.inputProjectTitle.value = '';
      this.inputProjectDescription.value = '';

      if (title) {
        handler(title, description);
      }
    });
  }

  bindEditProject(handler) {
    this.saveProjectButton.addEventListener('click', () => {
      const id = Number(this.projectTitle.id);
      const title = this.projectTitle.value;
      const description = this.projectDescription.value;

      handler(id, title, description);
    });
  }

  bindDeleteProject(handler) {
    const deleteButtons = document.querySelectorAll('#project-list li img');
    deleteButtons.forEach(deleteButton => {
      deleteButton.addEventListener('click', (e) => {
        const id = Number(e.path[1].id);
        handler(id);
      });
    });
  }

  bindAddTodo(handler) {}

  bindEditTodo(handler) {}

  bindDeleteTodo(handler) {}

  bindToggleTodo(handler) {}
}

export default View;