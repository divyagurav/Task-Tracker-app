import React, { useState } from "react";
import "./App.css";
import Task from "./Components/Task";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  // Add task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Mark as complete/incomplete
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Edit task
  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
    setIsEditing(false);
    setCurrentTaskId(null);
    setNewTask("");
  };

  // Set task for editing
  const setTaskForEditing = (id, text) => {
    setIsEditing(true);
    setCurrentTaskId(id);
    setNewTask(text);
  };

  return (
    <div className="app-container">
      <h1>Task Tracker</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={isEditing ? () => editTask(currentTaskId, newTask) : addTask}
        >
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            setTaskForEditing={setTaskForEditing}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
