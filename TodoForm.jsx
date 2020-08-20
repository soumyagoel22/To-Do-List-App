import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [valueState, setValueState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valueState) return;
    addTodo(valueState);
    setValueState("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={valueState}
        onChange={(e) => setValueState(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
