import ProjectModel from './modules/ProjectModel';
import TodoModel from './modules/TodoModel';
import Controller from './modules/Controller';
import View from './modules/View';

new Controller(new View(), new ProjectModel(new TodoModel()));
