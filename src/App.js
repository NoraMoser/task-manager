import React, { useContext } from "react";
import { TaskProvider } from "./TaskStuff/TaskContext";
import { ThemeContext, ThemeProvider } from "./StateManagement/ThemeContext";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AppRouter from './Router'

const queryClient = new QueryClient();
const ThemedApp = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div style={{ background: theme === "light" ? "#f5f5f5" : "#222", color: theme === "light" ? "#000" : "#fff", height: "100vh" }}>
      <QueryClientProvider client={queryClient}>
        <TaskProvider>
          <div className="App">
          <AppRouter />
          </div>
        </TaskProvider>
      </QueryClientProvider>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
