//all utility functions here
export const calculateProgress = (todos) => {
  const totalList = todos.length;
  const doneList = todos.filter((todo) => todo.done).length;

  return totalList > 0 ? Math.round((doneList / totalList) * 100) : 0;
};

export const sortTodos = (todos, isOn) => {
  return [...todos].sort((a, b) => (isOn ? a.done - b.done : a.id - b.id));
};
