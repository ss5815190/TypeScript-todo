import React from 'react';
import NewTodo from './components/NewTodo';
import Todo from './components/Todo';


function App() {

  return (
    <div className="flex flex-col w-screen items-center">
      <NewTodo/>
      <Todo/>
    </div>
  );
}

export default App;
