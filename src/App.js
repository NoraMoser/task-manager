import React from "react";
import { TaskProvider } from "./TaskStuff/TaskContext"; // Import TaskProvider
import TaskManager from "./TaskStuff/TaskManager"; // We'll move UI logic to a separate component
import styles from './TaskStuff/Task.module.css';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1 className={styles.title}>Task Manager</h1>
        <TaskManager />
      </div>
    </TaskProvider>
  );
}

export default App;
