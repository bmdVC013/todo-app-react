import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { STATUS } from "./constants";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(STATUS.ALL);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case STATUS.COMPLETED:
        setFilteredTodos(todos.filter((todo) => todo.is_completed));
        break;
      case STATUS.UNCOMPLETED:
        setFilteredTodos(todos.filter((todo) => !todo.is_completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const addNewItem = () => {
    const newItem = {
      id: uuidv4(),
      content: inputText,
      created_at: Date.now(),
      is_completed: status === STATUS.COMPLETED,
    };
    setTodos((currentTodos) => [newItem, ...currentTodos]);
    setInputText("");
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const todosStorage = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosStorage);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        addNewItem={addNewItem}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
