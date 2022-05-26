import React from "react";

const TodoItem = ({ todo, todos, setTodos }) => {
  const onComplete = () => {
    const index = todos.findIndex((item) => item.id === todo.id);

    if (index > -1) {
      setTodos((currentTodos) => [
        ...currentTodos.slice(0, index),
        { ...currentTodos[index], is_completed: true },
        ...currentTodos.slice(index + 1),
      ]);
    }
  };

  const onDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.is_completed ? "completed" : ""}`}>
        {todo.content}
      </li>
      <button onClick={onComplete} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={onDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
