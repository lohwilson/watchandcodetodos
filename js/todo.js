
const todoList = {
    todos: [],
    addTodo: function(todoText){
      this.todos.push({
        todoText: todoText,
        completed: false
      });
    },
    changeTodos: function(position, todoText){
      this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position){
      this.todos.splice(position, 1);
    },
    toggleCompleted: function(position){
      let todo = this.todos[position];
      todo.completed = !todo.completed;
    },
    
    toggleAll: function(){
      let totalTodos = this.todos.length;
      let completedTodos = 0;

      for (let i = 0; i < this.todos.length; i++){
        if (this.todos[i].completed === true){
          completedTodos++;
        }
      }
      if (completedTodos === totalTodos){
        for (let i = 0; i < totalTodos; i++){
          this.todos[i].completed = false;
        }
      } 
        else {
          for (let i = 0; i < totalTodos; i++){
            this.todos[i].completed = true;
        }
      }
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
    todoList.changeTodos(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position){
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function(){
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
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

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },

  createDeleteButton: function(){
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },

  setUpEventListeners: function(){
    let todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function(event){
      let elementClicked = event.target;
      if (elementClicked.className === 'deleteButton'){
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
  
};

view.setUpEventListeners();










