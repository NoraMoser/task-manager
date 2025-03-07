import React from "react";
import { TaskProvider } from "./TaskContext"; // Import TaskProvider
import TaskManager from "./TaskManager"; // We'll move UI logic to a separate component

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskManager />
      </div>
    </TaskProvider>
  );
}

export default App;
