import React from 'react';

interface TodoItemProps {
  text: string;
  date:string;
  onRemoveTodo: () => void;
}

function TodoItem({ text, date, onRemoveTodo }: TodoItemProps) {
  return <li className="bg-b-orange p-4 shadow my-4 rounded" onClick={onRemoveTodo}>{text}
  <div className=" font-bold text-end">{date}</div></li>;
}

export default TodoItem;