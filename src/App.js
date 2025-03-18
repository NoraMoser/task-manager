import React from "react";
import { TaskProvider } from "./TaskStuff/TaskContext"; // Import TaskProvider
import AppRouter from './Router'

function App() {
  return (
    <TaskProvider>
      <div className="App">
       <AppRouter />
      </div>
    </TaskProvider>
  );
}

export default App;
