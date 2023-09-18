import React from 'react';
import NewTodo from './components/NewTodo';
import Todo from './components/Todo';


function App() {

  return (
    <div>
      <h1>Todo List</h1>
      <NewTodo/>
      <Todo/>
    </div>
  );
}

export default App;
