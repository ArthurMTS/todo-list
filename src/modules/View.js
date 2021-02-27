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