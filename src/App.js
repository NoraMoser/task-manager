import React, { useState, useEffect } from 'react';

function App() {
  // Define state variables
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [filterName, setFilterName] = useState('');
  const [taskId, setTaskId] = useState(0);
  const [edited, setEdited] = useState(false)
  const [filteredTask, setFilteredTask] = useState({})
  // useEffect to load tasks (can simulate a fetch operation)
  useEffect(() => {
    // Simulate fetching data from an API
    const fetchTasks = async () => {
      const data = await [
        { id: 1, name: 'Buy groceries', completed: false, dueDate: new Date('04-11-2025') },
        { id: 2, name: 'Finish homework', completed: false, dueDate: new Date('04-11-2025') },
      ];
      setTasks(data);
    };
    fetchTasks();
  }, []); // Empty dependency array, runs once on mount

  const addTask = () => {
    const newTask = { id: Date.now(), name: taskName , completed: false, dueDate: new Date('04-11-2025')};
    setTasks([...tasks, newTask]);
    setTaskName('');
  };

  const removeTask = (taskId) => {
    const newTask = tasks.filter((item) => item.id !== taskId)
    setTasks(newTask)
  }

  const editNameandId = (id, name) => {
    setTaskId(id)
    setTaskName(name)
    setEdited(true)
  }
  
  const editTask = (id) => {
    console.log('edit')
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, name: taskName } : task
    );
    setTasks(updatedTasks);
    setEdited(false)
  }

  const findFilteredTask = (name) => {
  setFilteredTask(tasks.find((item) => item.name === name)?? {})
  }
console.log(filteredTask, filterName)
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <input
        type="text"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
        placeholder="filter"
      />
      <button onClick={()=> findFilteredTask(filterName)}>Search for Filtered Shit</button>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter new task"
      />
      {edited ?
      <button onClick={() => editTask(taskId)}>Save Edited Name</button>
      :
      <button onClick={addTask}>Add Task</button>
      }
      {Object.keys(filteredTask).length > 0 ?
          <li key={filteredTask.id}>{filteredTask.name}
          <button onClick={() => removeTask(filteredTask.id)}>Delete Me</button>
          <button onClick={() => editNameandId(filteredTask.id, filteredTask.name)}>Edit Me</button></li>
      :
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}
          <button onClick={() => removeTask(task.id)}>Delete Me</button>
          <button onClick={() => editNameandId(task.id, task.name)}>Edit Me</button></li>
        ))}
      </ul> 
      }
    </div>
  );
}

export default App;
