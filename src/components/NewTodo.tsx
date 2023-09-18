import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { todoListAction } from '../store/todoSlice';

function NewTodo() {

  const dispatch = useDispatch();
  const inputRef =useRef<HTMLInputElement>(null);

  const submitHandler=(event: React.FormEvent)=>{
    event.preventDefault();
    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0)return;
    dispatch(todoListAction.addTodo(enteredText));
    inputRef.current!.value='';
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef}/>
      <button>Add todo</button>
    </form>
  )
};

export default NewTodo;