import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { todoListAction } from '../store/todoSlice';

function NewTodo() {

  const dispatch = useDispatch();
  const inputRef =useRef<HTMLInputElement>(null);
  const dateRef =useRef<HTMLInputElement>(null);

  const submitHandler=(event: React.FormEvent)=>{
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    const enteredDate = dateRef.current!.value;
    if (enteredText.trim().length === 0)return;
    dispatch(todoListAction.addTodo({text:enteredText,date:enteredDate}));
    inputRef.current!.value='';
  };

  return (
    <form className="flex flex-col w-8/12 max-w-2xl my-8" onSubmit={submitHandler}>
      <label className="font-bold mb-2" htmlFor="text">Todo text</label>
      <input className=" bg-orange-200 font text-2xl p-2 border-b-2 border-black mb-2 rounded" type="text" id="text" ref={inputRef}/>
      <input className=" bg-orange-200 font text-2xl p-2 border-b-2 border-black mb-2 rounded" type="date" ref={dateRef}/>
      <button className=" max-w-max px-6 py-2 bg-orange-300 rounded hover:bg-orange-200">Add todo</button>
    </form> 
  )
};

export default NewTodo;