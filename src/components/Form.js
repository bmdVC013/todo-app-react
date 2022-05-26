import React from "react";

const Form = ({ inputText, setInputText, addNewItem }) => {
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
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
