import { createContext, useState } from "react";

// Create context
export const TaskContext = createContext();

// Create provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy groceries", completed: false, dueDate: new Date("04-11-2025") },
    { id: 2, name: "Finish homework", completed: false, dueDate: new Date("04-11-2025") },
  ]);
  const [taskName, setTaskName] = useState("");
  const [filterName, setFilterName] = useState("");
  const [taskId, setTaskId] = useState(0);
  const [edited, setEdited] = useState(false);
  const [filteredTask, setFilteredTask] = useState({});

  // Define actions
  const addTask = () => {
    const newTask = { id: Date.now(), name: taskName, completed: false, dueDate: new Date("04-11-2025") };
    setTasks([...tasks, newTask]);
    setTaskName("");
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((item) => item.id !== taskId));
  };

  const editNameandId = (id, name) => {
    setTaskId(id);
    setTaskName(name);
    setEdited(true);
  };

  const editTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, name: taskName } : task)));
    setEdited(false);
  };

  const findFilteredTask = (name) => {
    setFilteredTask(tasks.find((item) => item.name === name) ?? {});
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        taskName,
        filterName,
        taskId,
        edited,
        filteredTask,
        setTaskName,
        setFilterName,
        addTask,
        removeTask,
        editNameandId,
        editTask,
        findFilteredTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
