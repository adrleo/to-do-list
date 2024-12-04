import React from "react";

const ToDoForm = ({ text, setText, handleSubmit }) => {
  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="rounded w-full p-2"
        value={text}
        placeholder="Add a new task..."
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        +
      </button>
    </form>
  );
};

export default ToDoForm;
