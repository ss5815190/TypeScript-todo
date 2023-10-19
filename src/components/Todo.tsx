import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState,AppDispatch } from '../store/store';
import { todoListAction } from '../store/todoSlice';
import TodoItem from './TodoItem';

function Todo() {
    const {todos} = useSelector((state:RootState)=>state.todoListSlice);
    const dispatch:AppDispatch =useDispatch();
    const removeHandler =(id:string)=>{
        dispatch(todoListAction.deleteTodo(id));
    }
  return (
    <ul className="w-8/12 max-w-2xl">
      {todos.map((item)=>(
        <TodoItem key={item.id} text={item.text} date={item.date} onRemoveTodo={()=>removeHandler(item.id)} />
      ))}
    </ul>
  )
};

export default Todo;