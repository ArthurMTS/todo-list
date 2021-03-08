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

    this.projectTitle = this.createElement('h2');
    this.projectTitle.textContent = 'Project title';

    this.projectDescription = this.createElement('p');
    this.projectDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet libero nec quam semper molestie. Maecenas fermentum diam non neque sollicitudin, ut lobortis eros rutrum. Ut vitae ullamcorper sem. Ut ullamcorper urna ex, iaculis malesuada dolor laoreet vel. Nullam pharetra iaculis mollis. Ut ac rhoncus elit, vel gravida nunc. Nam nisi libero, volutpat et felis at, varius sodales nunc. Donec et porta sem. Nullam posuere vitae augue in eleifend. Praesent tristique egestas nisi, non imperdiet libero rutrum quis. Maecenas eleifend lectus nec dolor aliquet sagittis. Nulla porta consequat nunc eu gravida. Sed porta ipsum id libero aliquet, eu aliquam tortor pulvinar. Cras scelerisque a lacus vitae blandit.';

    this.projectTodos = this.createElement('ul');

    this.addTodoButton = this.createElement('img');
    this.addTodoButton.src = './../src/assets/plus-circle.svg';
    this.addTodoButton.addEventListener('click', () => {
      this.todoForm.style.display = 'flex';
    });

    this.projectContent.append(this.projectTitle, this.projectDescription, this.projectTodos, this.addTodoButton);
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
    
    this.projectItem = this.createElement('li');
    this.projectItem.textContent = 'Projeto';

    this.projectList.append(this.projectItem);
    
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

  bindAddProject(handler) {}

  bindEditProject(handler) {}

  bindDeleteProject(handler) {}

  bindAddTodo(handler) {}

  bindEditTodo(handler) {}

  bindDeleteTodo(handler) {}
}

export default View;