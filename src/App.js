import React from "react";
import { TaskProvider } from "./TaskStuff/TaskContext";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AppRouter from './Router'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <TaskProvider>
      <div className="App">
       <AppRouter />
      </div>
    </TaskProvider>
    </QueryClientProvider>
  );
}

export default App;
