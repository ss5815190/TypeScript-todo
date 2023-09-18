import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { todoListAction } from '../store/todoSlice';
import TodoItem from './TodoItem';

function Todo() {
    const todoList = useSelector((state:RootState)=>state.todoListSlice);
    const dispatch =useDispatch();
    const removeHandler =(id:string)=>{
        dispatch(todoListAction.deleteTodo(id));
    }
  return (
    <ul className="w-8/12 max-w-2xl">
      {todoList.todos.map((item)=>(
        <TodoItem key={item.id} text={item.text} onRemoveTodo={()=>removeHandler(item.id)} />
      ))}
    </ul>
  )
};

export default Todo;