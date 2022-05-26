import React from "react";

const TodoItem = ({ todo, todos, setTodos }) => {
  const onCheck = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    console.log(index);

    if (index > -1) {
      // setTodos([...todos]);
    }
  };

  const onDelete = (id) => {
    console.log("Delete");
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.is_completed ? "completed" : ""}`}>
        {todo.content}
      </li>
      <button onClick={onCheck(todo.id)} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={onDelete(todo.id)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
