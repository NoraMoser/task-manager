import React from "react";
import { TaskProvider } from "./TaskStuff/TaskContext"; // Import TaskProvider
import TaskManager from "./TaskStuff/TaskManager";
import Memo from './MemoStuff/Memo'
import Effect from './EffectStuff/Effect'

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <TaskManager />
        <Memo />
        <Effect />
      </div>
    </TaskProvider>
  );
}

export default App;
