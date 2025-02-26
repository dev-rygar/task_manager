import React, { useState } from "react";
import NewTask from "./components/NewTask";
import TasksList from "./components/TaskList";

const App = () => {
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, [name]: value })); // Only updates fields
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;

    setAllTasks((prev) => [{ ...newTask, id: Date.now() }, ...prev]); // Assign id here
    setNewTask({}); // Reset form
  };

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
};

export default App;
