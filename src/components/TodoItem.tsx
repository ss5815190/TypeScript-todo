import React from 'react';

interface TodoItemProps {
  text: string;
  onRemoveTodo: () => void;
}

function TodoItem({ text, onRemoveTodo }: TodoItemProps) {
  return <li className=" bg-orange-200 p-4 shadow my-4 rounded" onClick={onRemoveTodo}>{text}</li>;
}

export default TodoItem;