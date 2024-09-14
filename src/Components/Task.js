import React from "react";
import "./Task.css";

const Task = ({
  task,
  deleteTask,
  toggleTaskCompletion,
  setTaskForEditing,
}) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>
      <div className="task-buttons">
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button onClick={() => setTaskForEditing(task.id, task.text)}>
          Edit
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
