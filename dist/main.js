/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ProjectModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ProjectModel */ \"./src/modules/ProjectModel.js\");\n/* harmony import */ var _modules_TodoModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/TodoModel */ \"./src/modules/TodoModel.js\");\n/* harmony import */ var _modules_Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Controller */ \"./src/modules/Controller.js\");\n/* harmony import */ var _modules_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/View */ \"./src/modules/View.js\");\n\n\n\n\n\nnew _modules_Controller__WEBPACK_IMPORTED_MODULE_2__.default(new _modules_View__WEBPACK_IMPORTED_MODULE_3__.default(), new _modules_ProjectModel__WEBPACK_IMPORTED_MODULE_0__.default(new _modules_TodoModel__WEBPACK_IMPORTED_MODULE_1__.default()));\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Controller.js":
/*!***********************************!*\
  !*** ./src/modules/Controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Controller {\n  constructor(view, model) {\n    this.view = view;\n    this.model = model;\n\n    this.handleAddProject = (title, description) => {\n      this.model.addProject(title, description);\n      this.onProjectListChange(this.model.projects);\n    }\n\n    this.handleEditProject = (projectID, title, description) => {\n      this.model.editProject(projectID, title, description);\n      this.onProjectListChange(this.model.projects);\n    }\n\n    this.handleDeleteProject = () => {}\n\n    this.handleRenderProject = () => {}\n\n    this.handleAddTodo = () => {}\n\n    this.handleEditTodo = () => {}\n\n    this.handleDeleteTodo = () => {}\n\n    this.handleToggleTodo = () => {}\n\n    this.view.bindAddProject(this.handleAddProject);\n    this.view.bindEditProject(this.handleEditProject);\n\n    this.onProjectListChange(this.model.projects);\n  }\n\n  onProjectListChange(projects) {\n    this.view.displayProjectList(projects);\n  }\n\n  onTodoListChange() {}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);\n\n//# sourceURL=webpack://todo-list/./src/modules/Controller.js?");

/***/ }),

/***/ "./src/modules/ProjectModel.js":
/*!*************************************!*\
  !*** ./src/modules/ProjectModel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ProjectModel {\n  constructor(TodoModel) {\n    this.projects = [\n      { id: 1, title: 'Default', description: 'lorem ipsum dolor amet', todos: [\n        {id: 1, title: 'Test', description: 'lorem ipsum', dueData: '25/03/2021', priority: 'low', checked: true},\n        {id: 2, title: 'Tesasdasdsdasdasdadt', description: 'lorem ipsum', dueData: '25/03/2021', priority: 'low', checked: false},\n        {id: 3, title: 'Test', description: 'lorem ipsum', dueData: '25/03/2021', priority: 'low', checked: true}\n      ] }\n    ];\n\n    this.addTodo = (projectId, title, description = '', dueData = '', priority = 'low') => {\n      this.projects = this.projects.filter(project => \n        project.id === projectId ?\n          project.todos = TodoModel.addTodo(project.todos, title, description, dueData, priority) :\n          project\n      );\n    }\n  \n    this.editTodo = (projectId, todoId, title, description, dueData, priority) => {\n      this.projects = this.projects.filter(project =>\n        project.id === projectId ?\n          project.todos = TodoModel.editTodo(\n            project.todos,\n            todoId,\n            title,\n            description,\n            dueData,\n            priority\n          ) :\n          project\n      );\n    }\n  \n    this.deleteTodo = (projectId, todoId) => {\n      this.projects = this.projects.filter(project => \n        project.id === projectId ?\n          project.todos = TodoModel.deleteTodo(project.todos, todoId) :\n          project\n      );\n    }\n\n    this.toggleTodo = (projectId, todoId) => {\n      this.projects = this.projects.filter(project => \n        project.id === projectId ?\n          project.todos = TodoModel.toggleTodo(project.todos, todoId) :\n          project\n      );\n    }\n  }\n\n  addProject(title, description = '') {\n    const project = {\n      id: this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 1,\n      title,\n      description,\n      todos: [],\n    }\n\n    this.projects.push(project);\n  }\n\n  editProject(id, title, description) {\n    this.projects = this.projects.map(project =>\n      project.id == id ? \n        { \n          id: project.id,\n          title: title ? title : project.title,\n          description: description ? description : project.description,\n          todos: project.todos,  \n        } : \n        project\n      );\n  }\n\n  deleteProject(id) {\n    this.projects = this.projects.filter(project => project.id !== id);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectModel);\n\n//# sourceURL=webpack://todo-list/./src/modules/ProjectModel.js?");

/***/ }),

/***/ "./src/modules/TodoModel.js":
/*!**********************************!*\
  !*** ./src/modules/TodoModel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TodoModel {\n  addTodo(todos, title, description, dueData, priority) {\n    const todo = {\n      id: todos.length > 0 ?\n            todos[todos.length - 1].id + 1 :\n            1,\n      title,\n      description,\n      dueData,\n      priority,\n      checked: false,\n    }\n\n    todos.push(todo);\n\n    return todos;\n  }\n\n  editTodo(todos, todoId, title, description, dueData, priority) {\n    todos = todos.map(todo => \n      todo.id === todoId ?  \n        {\n          id: todo.id,\n          title: title ? title : todo.title,\n          description: description ? description : todo.description,\n          dueData: dueData ? dueData : todo.dueData,\n          priority: priority ? priority : todo.priority,\n        } :\n        todo\n    );\n\n    return todos;\n  }\n\n  deleteTodo(todos, todoId) {\n    todos = todos.filter(todo => todo.id !== todoId);\n\n    return todos;\n  }\n\n  toggleTodo(todos, todoId) {\n    todos = todos.map(todo => \n      todo.id === todoId ?  \n        {\n          id: todo.id,\n          title: todo.title,\n          description: todo.description,\n          dueData: todo.dueData,\n          priority: todo.priority,\n          checked: !todo.checked,\n        } :\n        todo\n    );\n\n    return todos;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoModel);\n\n//# sourceURL=webpack://todo-list/./src/modules/TodoModel.js?");

/***/ }),

/***/ "./src/modules/View.js":
/*!*****************************!*\
  !*** ./src/modules/View.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass View {\n  constructor() {\n    this.app = this.getElement('#root');\n\n    /* HEADER */\n    this.header = this.createElement('header');\n    this.header.id = 'main-header';\n\n    this.headerTitle = this.createElement('h1');\n    this.headerTitle.textContent = 'Todo List';\n\n    this.header.append(this.headerTitle);\n    /* HEADER END */\n\n    /* MAIN */\n    this.main = this.createElement('main');\n    this.main.id = 'main';\n\n    /* SECTION */\n    this.projectContent = this.createElement('section');\n    this.projectContent.id = 'project-content';\n\n    this.projectTitle = this.createElement('input');\n\n    this.projectDescription = this.createElement('textarea');\n\n    this.saveProjectButton = this.createElement('button', 'button');\n    this.saveProjectButton.textContent = 'Save';\n\n    this.projectTodos = this.createElement('ul');\n\n    this.addTodoButton = this.createElement('img', 'add');\n    this.addTodoButton.src = './../src/assets/plus-circle.svg';\n    this.addTodoButton.addEventListener('click', () => {\n      this.todoForm.style.display = 'flex';\n    });\n\n    this.projectContent.append(\n      this.projectTitle, \n      this.projectDescription, \n      this.saveProjectButton,\n      this.projectTodos, \n      this.addTodoButton\n    );\n    /* SECTION END */\n\n    /* ASIDE */\n    this.projects = this.createElement('aside');\n    this.projects.id = 'projects';\n\n    this.projectsHeader = this.createElement('header');\n\n    this.projectsHeaderTitle = this.createElement('h2');\n    this.projectsHeaderTitle.textContent = 'Projects';\n\n    this.addProjectButton = this.createElement('img');\n    this.addProjectButton.src = './../src/assets/plus-circle.svg';\n    this.addProjectButton.addEventListener('click', () => {\n      this.projectForm.style.display = 'flex';\n    });\n\n    this.projectList = this.createElement('ul');\n    this.projectList.id = 'project-list';\n    \n    this.projectsHeader.append(this.projectsHeaderTitle, this.addProjectButton);\n    this.projects.append(this.projectsHeader, this.projectList);\n    /* ASIDE END */\n\n    this.main.append(this.projects, this.projectContent);\n    /* MAIN END */\n\n    /* PROJECT FORM */\n    this.projectForm = this.createElement('form', 'form');\n    this.projectForm.style.display = 'none';\n\n    this.inputProjectTitle = this.createElement('input', 'input');\n    this.inputProjectTitle.placeholder = 'Project Title';\n    this.inputProjectTitle.required = true;\n\n    this.inputProjectDescription = this.createElement('textarea');\n    this.inputProjectDescription.placeholder = 'Project Description';\n\n    this.submitProjectForm = this.createElement('button', 'submit');\n    this.submitProjectForm.textContent = 'Submit';\n\n    this.closeProjectForm = this.createElement('img', 'close');\n    this.closeProjectForm.src = './../src/assets/x.svg';\n    this.closeProjectForm.addEventListener('click', () => {\n      this.projectForm.style.display = 'none';\n    });\n\n    this.projectForm.append(\n      this.inputProjectTitle, \n      this.inputProjectDescription, \n      this.submitProjectForm,\n      this.closeProjectForm\n    );\n    /* PROJECT FORM END */\n\n    /* TODO FORM */\n    this.todoForm = this.createElement('form', 'form');\n    this.todoForm.style.display = 'none';\n\n    this.inputTodoTitle = this.createElement('input', 'input');\n    this.inputTodoTitle.placeholder = 'Todo Title';\n    this.inputTodoTitle.required = true;\n\n    this.inputTodoDescription = this.createElement('textarea');\n    this.inputTodoDescription.placeholder = 'Todo Description';\n\n    this.inputTodoDate = this.createElement('input', 'input');\n    this.inputTodoDate.type = 'date';\n\n    this.inputTodoPriority = this.createElement('select', 'input');\n    this.inputTodoPriority.style.margin = '10px 0';\n    \n    this._default = this.createElement('option');\n    this._default.disabled = true;\n    this._default.selected = true;\n    this._default.textContent = 'Select Priority';\n\n    this._low = this.createElement('option');\n    this._low.value = 'low';\n    this._low.textContent = 'Low';\n\n    this._medium = this.createElement('option');\n    this._medium.value = 'medium';\n    this._medium.textContent = 'Medium';\n\n    this._high = this.createElement('option');\n    this._high.value = 'high';\n    this._high.textContent = 'High';\n\n    this.inputTodoPriority.append(this._default, this._low, this._medium, this._high);\n\n    this.submitTodoForm = this.createElement('button', 'submit');\n    this.submitTodoForm.textContent = 'Submit';\n\n    this.closeTodoForm = this.createElement('img', 'close');\n    this.closeTodoForm.src = './../src/assets/x.svg';\n    this.closeTodoForm.addEventListener('click', () => {\n      this.todoForm.style.display = 'none';\n    });\n\n    this.todoForm.append(\n      this.inputTodoTitle, \n      this.inputTodoDescription, \n      this.inputTodoDate,\n      this.inputTodoPriority,\n      this.submitTodoForm,\n      this.closeTodoForm\n    );\n    /* TODO FORM END */\n\n    this.app.append(this.header, this.main, this.projectForm, this.todoForm);\n  }\n\n  getElement(element) {\n    return document.querySelector(element);\n  }\n\n  createElement(tag, className) {\n    const element = document.createElement(tag);\n    if (className) element.classList.add(className);\n\n    return element;\n  }\n\n  displayProjectList(projectList) {\n    this.projectList.innerHTML = '';\n\n    projectList.forEach(project => {\n      const projectItem = this.createElement('li');\n      projectItem.id = project.id;\n\n      const text = this.createElement('span');\n      text.textContent = project.title;\n\n      const deleteButton = this.createElement('img');\n      deleteButton.src = './../src/assets/trash-2.svg';\n\n      projectItem.append(text, deleteButton);\n\n      projectItem.addEventListener('click', () => {\n        this.displayProject(project);\n      });\n\n      this.projectList.append(projectItem);\n    });\n  }\n\n  displayProject(project) {\n    this.projectTitle.value = project.title;\n    this.projectTitle.id = project.id;\n    this.projectDescription.value = project.description;\n    this.displayTodos(project.todos);\n  }\n\n  displayTodos(todoList) {\n    this.projectTodos.innerHTML = '';\n\n    todoList.forEach(todo => {\n      const todoItem = this.createElement('li', 'todo');\n      todoItem.id = todo.id;\n\n      const toggle = this.createElement('input');\n      toggle.type = 'checkbox';\n      toggle.checked = todo.checked;\n\n      const text = this.createElement('span');\n      text.textContent = todo.title;\n      if (todo.checked) text.style.textDecoration = 'line-through';\n\n      const deleteButton = this.createElement('img');\n      deleteButton.src = './../src/assets/trash-2.svg';\n\n      todoItem.append(toggle, text, deleteButton);\n\n      this.projectTodos.append(todoItem);\n    });\n  }\n\n  bindAddProject(handler) {\n    this.projectForm.addEventListener('submit', event => {\n      event.preventDefault();\n\n      const title = this.inputProjectTitle.value;\n      const description = this.inputProjectDescription.value;\n\n      this.inputProjectTitle.value = '';\n      this.inputProjectDescription.value = '';\n\n      if (title) {\n        handler(title, description);\n      }\n    });\n  }\n\n  bindEditProject(handler) {\n    this.saveProjectButton.addEventListener('click', () => {\n      const id = this.projectTitle.id;\n      const title = this.projectTitle.value;\n      const description = this.projectDescription.value;\n\n      handler(id, title, description);\n    });\n  }\n\n  bindDeleteProject(handler) {}\n\n  bindAddTodo(handler) {}\n\n  bindEditTodo(handler) {}\n\n  bindDeleteTodo(handler) {}\n\n  bindToggleTodo(handler) {}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);\n\n//# sourceURL=webpack://todo-list/./src/modules/View.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;