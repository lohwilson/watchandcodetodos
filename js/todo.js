// // way to store todos
// // let todos = ['item1', 'item2', 'item3'];

// // way to display todos
// // console.log('My Todos:' + todos);

// // way to add todos
// // todos.push('item4');

// // way to change todos
// // todos[0] = 'item001';

// // way to delete todos
// // todos.splice(0,1);  //.splice removes (index of todo, no of items)


// let todos = ['item1', 'item2', 'item3'];

// //function to display todos
// function displayTodos(){
//     console.log('My Todos: ' + todos);
// };

// //function to add todos
// function addTodos(todo){
//     todos.push(todo);
//     displayTodos();
// };

// addTodos('item4');

// //function to change todos
// function changeTodos(position, newValue){
//     todos[position] = newValue;
//     displayTodos();
// };

// //function to delete todos
// function deleteTodo(position){
//     todos.splice(position, 1);
//     displayTodos();
// };


//CHANGE FUNCTION TO OBJECTS


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
 
//we want to get access to the display todos button
const displayTodosButton = document.getElementById('displayTodosButton');

console.log(displayTodosButton);


//we want to run display todos method, when someone clicks the display todos button

displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos();
})