import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";
import { ThemeContext } from "../StateManagement/ThemeContext";
import styles from './Task.module.css';
const TaskManager = () => {
  const {
    tasks,
    taskName,
    taskId,
    filterName,
    edited,
    filteredTask,
    setTaskName,
    setFilterName,
    addTask,
    removeTask,
    editNameandId,
    editTask,
    findFilteredTask,
  } = useContext(TaskContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
console.log(tasks)
  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "10px" }}>
      <h1 className={styles.title}>Task Manager</h1>
      <input type="text" value={filterName} onChange={(e) => setFilterName(e.target.value)} placeholder="Filter" />
      <button onClick={() => findFilteredTask(filterName)}>Search</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Enter new task" />
      {edited ? <button onClick={() => editTask(taskId)}>Save Edited Name</button> : <button onClick={addTask}>Add Task</button>}

      {Object.keys(filteredTask).length > 0 ? (
        <li key={filteredTask.id}>
          {filteredTask.name}
          <button onClick={() => removeTask(filteredTask.id)}>Delete</button>
          <button onClick={() => editNameandId(filteredTask.id, filteredTask.name)}>Edit</button>
        </li>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.name}
              <button onClick={() => removeTask(task.id)}>Delete</button>
              <button onClick={() => editNameandId(task.id, task.name)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
//this will memoize the return to prevent re-renders (unless taskManager changes)
export default React.memo(TaskManager);
