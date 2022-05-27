import React from "react";
import { STATUS } from "../constants";

const Form = ({ inputText, setInputText, addNewItem, setStatus }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const onSubmitNewText = (e) => {
    e.preventDefault();
    addNewItem();
  };

  const onInputKeyPress = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      addNewItem();
    }
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={handleInputText}
        onKeyPress={onInputKeyPress}
      />
      <button onClick={onSubmitNewText} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value={STATUS.ALL}>All</option>
          <option value={STATUS.COMPLETED}>Completed</option>
          <option value={STATUS.UNCOMPLETED}>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
