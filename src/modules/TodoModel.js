class TodoModel {
  addTodo(todos, title, description, dueData, priority) {
    const todo = {
      id: todos.length > 0 ?
            todos[todos.length - 1].id + 1 :
            1,
      title,
      description,
      dueData,
      priority,
      checked: false,
    }

    todos.push(todo);

    return todos;
  }

  editTodo(todos, todoId, title, description, dueData, priority) {
    todos = todos.map(todo => 
      todo.id === todoId ?  
        {
          id: todo.id,
          title: title ? title : todo.title,
          description: description ? description : todo.description,
          dueData: dueData ? dueData : todo.dueData,
          priority: priority ? priority : todo.priority,
        } :
        todo
    );

    return todos;
  }

  deleteTodo(todos, todoId) {
    todos = todos.filter(todo => todo.id !== todoId);

    return todos;
  }

  toggleTodo(todos, todoId) {
    todos = todos.map(todo => 
      todo.id === todoId ?  
        {
          id: todo.id,
          title: todo.title,
          description: todo.description,
          dueData: todo.dueData,
          priority: todo.priority,
          checked: !todo.checked,
        } :
        todo
    );

    return todos;
  }
}

export default TodoModel;