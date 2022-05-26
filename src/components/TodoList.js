import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            setTodos={setTodos}
            key={todo.id}
            todo={todo}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
