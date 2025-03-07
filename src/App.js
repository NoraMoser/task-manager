import React, { useState, useEffect } from 'react';

function App() {
  // Define state variables
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  
  // useEffect to load tasks (can simulate a fetch operation)
  useEffect(() => {
    // Simulate fetching data from an API
    const fetchTasks = async () => {
      const data = await [
        { id: 1, name: 'Buy groceries' },
        { id: 2, name: 'Finish homework' },
      ];
      setTasks(data);
    };
    fetchTasks();
  }, []); // Empty dependency array, runs once on mount

  const addTask = () => {
    const newTask = { id: Date.now(), name: taskName };
    setTasks([...tasks, newTask]);
    setTaskName('');
  };

  const removeTask = (taskId) => {
    console.log('remove')
    const newTask = tasks.filter((item) => item.id !== taskId)
    setTasks(newTask)
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}
          <button onClick={() => removeTask(task.id)}>Delete Me</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
