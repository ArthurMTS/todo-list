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

    this.app.append(this.header, this.main);
  }

  getElement(element) {
    return document.querySelector(element);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }
}

export default new View();