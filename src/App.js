import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import SwitchButton from "./components/SwitchButton";
import { calculateProgress, sortTodos } from "./util";

function App() {
  const [todos, setTodos] = useState([]); //list
  const [text, setText] = useState(""); //input text
  const [isOn, setIsOn] = useState(false); //switch button for sort by done tasks

  const addToDo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addToDo({ id: Date.now(), done: false, text });
    setText("");
  };

  const toggleToDo = (id) => {
    setTodos(
      todos.map(
        (todo) => (id === todo.id ? { ...todo, done: !todo.done } : todo) //toggle done status on checked or unchecked checkbox
      )
    );
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSwitch = () => {
    setIsOn(!isOn);
  };

  const sortedCompletedTask = sortTodos(todos, isOn);
  const progress = calculateProgress(todos);
  return (
    <div className="flex flex-col h-screen bg-gradient-to-bl from-blue-100 to-indigo-100 text-blue-500">
      <header className="border-b-2 border-blue-400 mx-4 py-4">
        <h1 className="text-2xl text-blue-400 ">To Do List</h1>
        <h3 className="text-sm text-gray-400">Add things to do</h3>
      </header>
      <main className="flex flex-col flex-grow lg:flex-row lg:p-8">
        <section className="flex-1">
          <ProgressBar progress={progress} />
          <div className="m-4 border-blue-400 max-h-todolist-height overflow-y-auto">
            <ToDoList
              todos={sortedCompletedTask}
              toggleToDo={toggleToDo}
              deleteToDo={deleteToDo}
            />
          </div>
          <div className="mx-4 py-2 flex flex-row-reverse gap-2 border-t-2 border-blue-400">
            <SwitchButton isOn={isOn} handleSwitch={handleSwitch} />
          </div>
        </section>
        <section className="lg-w-1/3">
          <div className="sticky top-4 p-4 border-t">
            <ToDoForm
              text={text}
              setText={setText}
              handleSubmit={handleSubmit}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
