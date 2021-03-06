import './modules/View';
import ProjectModel from './modules/ProjectModel';
import TodoModel from './modules/TodoModel';

const newProjectModel = new ProjectModel(new TodoModel());

console.log(newProjectModel.projects);