
const todoList = {
  todos: [],

    // this will display a todo
  displayTodos: function(){ 
    if (this.todos.length === 0){
      console.log('Your todo list is empty!');
     } else{  
        console.log('My Todos:');    
        for (let i = 0; i < this.todos.length; i++){
          if (this.todos[i].completed === true){
            console.log('(x) ' + this.todos[i].todoText);
          } else {
            console.log('( ) ' + this.todos[i].todoText);
          }
        }
     }
  },

    // this will add a todo
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  
  // this will change a todo
  changeTodos: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  
  // this will delete a todo
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  },

    // this will change the completed from true to false, vice versa
  toggleCompleted: function(position){
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  
  toggleAll: function(){
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    // get completed no of todos
    for (let i = 0; i < this.todos.length; i++){
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }
    //case 1 , if everything true, make everything false
    if (completedTodos === totalTodos){
      for (let i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    } 
    // otherwise, make everything true
      else {
        for (let i = 0; i < totalTodos; i++){
          this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};


const handlers = {

addTodo: function(){
  let addTodoTextInput = document.getElementById('addTodoTextInput');
  todoList.addTodo(addTodoTextInput.value);
  addTodoTextInput.value = '';
  view.displayTodos();
},
changeTodos: function(){
  let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
  let changeTodoTextInput = document.getElementById('changeTodoTextInput');
  todoList.changeTodos(changeTodoPositionInput.valueAsNumber - 1, changeTodoTextInput.value);
  changeTodoPositionInput.value = '';
  changeTodoTextInput.value = '';
  view.displayTodos();
},
deleteTodo: function(){
  let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
  todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber - 1);
  deleteTodoPositionInput.value = '';
  view.displayTodos();
},
toggleCompleted: function(){
  let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
  todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber - 1);
  toggleCompletedPositionInput.value = '';
  view.displayTodos();
},
toggleAll: function(){
  todoList.toggleAll();
  view.displayTodos();
}
};

const view = {
displayTodos: function(){
  const todosUl = document.querySelector('ul');
  todosUl.innerHTML = '';
  for (let i = 0; i < todoList.todos.length; i++){
    const todoLi = document.createElement('li');
    let todo = todoList.todos[i];
    let todoTextWithCompletion = '';

    if (todo.completed === true){
      todoTextWithCompletion = '(x) ' + todo.todoText;
    } else {
      todoTextWithCompletion = '( ) ' + todo.todoText;
    }

    todoLi.textContent = todoTextWithCompletion;
    todosUl.appendChild(todoLi);
  }
}
};












