(()=>{"use strict";new class{constructor(t,e){this.view=t,this.model=e,this.handleAddProject=(t,e)=>{this.model.addProject(t,e),this.onProjectListChange(this.model.projects)},this.handleEditProject=(t,e,i)=>{this.model.editProject(t,e,i),this.onProjectListChange(this.model.projects)},this.handleDeleteProject=t=>{this.model.deleteProject(t),this.onProjectListChange(this.model.projects)},this.handleAddTodo=(t,e,i,o,s)=>{t=Number(t),this.model.addTodo(t,e,i,o,s);const[r]=this.model.projects.map((e=>t===e.id&&e));this.view.displayTodos(r.todos)},this.handleEditTodo=()=>{},this.handleDeleteTodo=()=>{},this.handleToggleTodo=()=>{},this.view.bindAddProject(this.handleAddProject),this.view.bindEditProject(this.handleEditProject),this.view.bindHandleDeleteProject(this.handleDeleteProject),this.view.bindAddTodo(this.handleAddTodo),this.onProjectListChange(this.model.projects)}onProjectListChange(t){this.view.displayProjectList(t)}onTodoListChange(){}}(new class{constructor(){this.app=this.getElement("#root"),this.header=this.createElement("header"),this.header.id="main-header",this.headerTitle=this.createElement("h1"),this.headerTitle.textContent="Todo List",this.header.append(this.headerTitle),this.main=this.createElement("main"),this.main.id="main",this.projectContent=this.createElement("section"),this.projectContent.id="project-content",this.projectTitle=this.createElement("input"),this.projectDescription=this.createElement("textarea"),this.saveProjectButton=this.createElement("button","button"),this.saveProjectButton.textContent="Save",this.projectTodos=this.createElement("ul"),this.addTodoButton=this.createElement("img","add"),this.addTodoButton.src="./../src/assets/plus-circle.svg",this.addTodoButton.addEventListener("click",(()=>{this.todoForm.style.display="flex",this.getElement("body").classList.add("form-open")})),this.projectContent.append(this.projectTitle,this.projectDescription,this.saveProjectButton,this.projectTodos,this.addTodoButton),this.projects=this.createElement("aside"),this.projects.id="projects",this.projectsHeader=this.createElement("header"),this.projectsHeaderTitle=this.createElement("h2"),this.projectsHeaderTitle.textContent="Projects",this.addProjectButton=this.createElement("img"),this.addProjectButton.src="./../src/assets/plus-circle.svg",this.addProjectButton.addEventListener("click",(()=>{this.projectForm.style.display="flex",this.getElement("body").classList.add("form-open")})),this.projectList=this.createElement("ul"),this.projectList.id="project-list",this.projectsHeader.append(this.projectsHeaderTitle,this.addProjectButton),this.projects.append(this.projectsHeader,this.projectList),this.main.append(this.projects,this.projectContent),this.projectForm=this.createElement("form","form"),this.projectForm.style.display="none",this.inputProjectTitle=this.createElement("input","input"),this.inputProjectTitle.placeholder="Project Title",this.inputProjectTitle.required=!0,this.inputProjectDescription=this.createElement("textarea"),this.inputProjectDescription.placeholder="Project Description",this.submitProjectForm=this.createElement("button","submit"),this.submitProjectForm.textContent="Submit",this.closeProjectForm=this.createElement("img","close"),this.closeProjectForm.src="./../src/assets/x.svg",this.closeProjectForm.addEventListener("click",(()=>{this.projectForm.style.display="none",this.getElement("body").classList.remove("form-open")})),this.projectForm.append(this.inputProjectTitle,this.inputProjectDescription,this.submitProjectForm,this.closeProjectForm),this.todoForm=this.createElement("form","form"),this.todoForm.style.display="none",this.inputTodoTitle=this.createElement("input","input"),this.inputTodoTitle.placeholder="Todo Title",this.inputTodoTitle.required=!0,this.inputTodoDescription=this.createElement("textarea"),this.inputTodoDescription.placeholder="Todo Description",this.inputTodoDate=this.createElement("input","input"),this.inputTodoDate.type="date",this.inputTodoPriority=this.createElement("select","input"),this.inputTodoPriority.style.margin="10px 0",this._default=this.createElement("option"),this._default.disabled=!0,this._default.selected=!0,this._default.textContent="Select Priority",this._low=this.createElement("option"),this._low.value="low",this._low.textContent="Low",this._medium=this.createElement("option"),this._medium.value="medium",this._medium.textContent="Medium",this._high=this.createElement("option"),this._high.value="high",this._high.textContent="High",this.inputTodoPriority.append(this._default,this._low,this._medium,this._high),this.submitTodoForm=this.createElement("button","submit"),this.submitTodoForm.textContent="Submit",this.closeTodoForm=this.createElement("img","close"),this.closeTodoForm.src="./../src/assets/x.svg",this.closeTodoForm.addEventListener("click",(()=>{this.todoForm.style.display="none",this.getElement("body").classList.remove("form-open")})),this.todoForm.append(this.inputTodoTitle,this.inputTodoDescription,this.inputTodoDate,this.inputTodoPriority,this.submitTodoForm,this.closeTodoForm),this.app.append(this.header,this.main,this.projectForm,this.todoForm)}getElement(t){return document.querySelector(t)}createElement(t,e){const i=document.createElement(t);return e&&i.classList.add(e),i}bindHandleDeleteProject(t){this.handleDeleteProject=t}displayProjectList(t){this.projectList.innerHTML="",t.forEach((t=>{const e=this.createElement("li");e.id=t.id;const i=this.createElement("span");i.textContent=t.title;const o=this.createElement("img");o.src="./../src/assets/trash-2.svg",e.append(i,o),e.addEventListener("click",(e=>{"img"!==e.target.localName&&this.displayProject(t)})),this.projectList.append(e)})),this.bindDeleteProject(this.handleDeleteProject)}displayProject(t){this.projectTitle.value=t.title,this.projectTitle.id=t.id,this.projectDescription.value=t.description,this.displayTodos(t.todos)}displayTodos(t){this.projectTodos.innerHTML="",t.forEach((t=>{const e=this.createElement("li","todo");e.id=t.id;const i=this.createElement("input");i.type="checkbox",i.checked=t.checked;const o=this.createElement("span");o.textContent=t.title,t.checked&&(o.style.textDecoration="line-through");const s=this.createElement("img");s.src="./../src/assets/trash-2.svg",e.append(i,o,s),this.projectTodos.append(e)}))}bindAddProject(t){this.projectForm.addEventListener("submit",(e=>{e.preventDefault();const i=this.inputProjectTitle.value,o=this.inputProjectDescription.value;this.inputProjectTitle.value="",this.inputProjectDescription.value="",i&&t(i,o)}))}bindEditProject(t){this.saveProjectButton.addEventListener("click",(()=>{const e=Number(this.projectTitle.id),i=this.projectTitle.value,o=this.projectDescription.value;t(e,i,o)}))}bindDeleteProject(t){document.querySelectorAll("#project-list li img").forEach((e=>{e.addEventListener("click",(e=>{if(window.confirm("Are you sure?")){const i=Number(e.path[1].id);t(i)}}))}))}bindAddTodo(t){this.todoForm.addEventListener("submit",(e=>{if(e.preventDefault(),!this.projectTitle.id)return;const i=this.inputTodoTitle.value,o=this.inputTodoDescription.value,s=this.inputTodoDate.value,r=this.inputTodoPriority.value;t(this.projectTitle.id,i,o,s,r),this.inputTodoTitle.value="",this.inputTodoDescription.value="",this.inputTodoDate.value="",this._default.selected=!0}))}bindEditTodo(t){}bindDeleteTodo(t){}bindToggleTodo(t){}},new class{constructor(t){this.projects=[{id:1,title:"Default",description:"lorem ipsum dolor amet",todos:[{id:1,title:"Test",description:"lorem ipsum",dueData:"25/03/2021",priority:"low",checked:!0},{id:2,title:"Tesasdasdsdasdasdadt",description:"lorem ipsum",dueData:"25/03/2021",priority:"low",checked:!1},{id:3,title:"Test",description:"lorem ipsum",dueData:"25/03/2021",priority:"low",checked:!0}]}],this.addTodo=(e,i,o="",s="",r="low")=>{this.projects=this.projects.filter((d=>d.id===e?d.todos=t.addTodo(d.todos,i,o,s,r):d))},this.editTodo=(e,i,o,s,r,d)=>{this.projects=this.projects.filter((c=>c.id===e?c.todos=t.editTodo(c.todos,i,o,s,r,d):c))},this.deleteTodo=(e,i)=>{this.projects=this.projects.filter((o=>o.id===e?o.todos=t.deleteTodo(o.todos,i):o))},this.toggleTodo=(e,i)=>{this.projects=this.projects.filter((o=>o.id===e?o.todos=t.toggleTodo(o.todos,i):o))}}addProject(t,e=""){const i={id:this.projects.length>0?this.projects[this.projects.length-1].id+1:1,title:t,description:e,todos:[]};this.projects.push(i)}editProject(t,e,i){this.projects=this.projects.map((o=>o.id===t?{id:o.id,title:e||o.title,description:i||o.description,todos:o.todos}:o))}deleteProject(t){this.projects=this.projects.filter((e=>e.id!==t))}}(new class{addTodo(t,e,i,o,s){const r={id:t.length>0?t[t.length-1].id+1:1,title:e,description:i,dueData:o,priority:s,checked:!1};return t.push(r),t}editTodo(t,e,i,o,s,r){return t.map((t=>t.id===e?{id:t.id,title:i||t.title,description:o||t.description,dueData:s||t.dueData,priority:r||t.priority}:t))}deleteTodo(t,e){return t.filter((t=>t.id!==e))}toggleTodo(t,e){return t.map((t=>t.id===e?{id:t.id,title:t.title,description:t.description,dueData:t.dueData,priority:t.priority,checked:!t.checked}:t))}}))})();