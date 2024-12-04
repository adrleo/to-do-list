import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, toggleToDo, deleteToDo }) => {
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => {
        return (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
          />
        );
      })}
    </ul>
  );
};

export default ToDoList;
