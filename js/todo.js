// way to store todos
// let todos = ['item1', 'item2', 'item3'];

// way to display todos
// console.log('My Todos:' + todos);

// way to add todos
// todos.push('item4');

// way to change todos
// todos[0] = 'item001';

// way to delete todos
// todos.splice(0,1);  //.splice removes (index of todo, no of items)


let todos = ['item1', 'item2', 'item3'];

//function to display todos
function displayTodos(){
    console.log('My Todos: ' + todos);
};

//function to add todos
function addTodos(todo){
    todos.push(todo);
    displayTodos();
};

addTodos('item4');

//function to change todos
function changeTodos(position, newValue){
    todos[position] = newValue;
    displayTodos();
};

//function to delete todos
function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
};


//CHANGE FUNCTION TO OBJECTS


const todoList = {
    todos: [],

    displayTodos: function(){ 
      if (this.todos.length === 0){
        console.log('Your todo list is empty!');
       } else{  
          console.log('My Todos:');    
          for ( i = 0; i < this.todos.length; i++){
            if (this.todos[i].completed === true){
              console.log('(x) ' + this.todos[i].todoText);
            } else {
              console.log('( ) ' + this.todos[i].todoText);
            }
          }
       }
    },

    addTodo: function(todoText){
      this.todos.push({
        todoText: todoText,
        completed: false
      });
      this.displayTodos();
    },

    changeTodos: function(position, todoText){
      this.todos[position].todoText = todoText;
      this.displayTodos();
    },
    
    deleteTodo: function(position){
      this.todos.splice(position, 1);
      this.displayTodos();
    },

    toggleCompleted: function(position){
      let todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
    }
  };

