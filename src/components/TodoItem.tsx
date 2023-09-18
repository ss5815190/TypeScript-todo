import React from 'react';

interface TodoItemProps {
  text: string;
  onRemoveTodo: () => void;
}

function TodoItem({ text, onRemoveTodo }: TodoItemProps) {
  return <li onClick={onRemoveTodo}>{text}</li>;
}

export default TodoItem;