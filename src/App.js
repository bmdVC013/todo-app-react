import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const addNewItem = () => {
    const newItem = {
      id: uuidv4(),
      content: inputText,
      created_at: Date.now(),
      is_completed: false,
    };
    setTodos((currentTodos) => [newItem, ...currentTodos]);
    setInputText("");
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
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
