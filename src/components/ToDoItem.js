import React from "react";

const ToDoItem = ({ todo, toggleToDo, deleteToDo }) => {
  return (
    <li className="h-14 flex gap-2 items-center justify-between bg-white rounded px-4">
      <label className="cursor-pointer">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => {
            toggleToDo(todo.id);
          }}
        />
        <span className={`${todo.done ? "line-through" : ""} ml-3`}>
          {todo.text}
        </span>
      </label>
      <button
        className=""
        onClick={() => {
          deleteToDo(todo.id);
        }}
      >
        x
      </button>
    </li>
  );
};

export default ToDoItem;
