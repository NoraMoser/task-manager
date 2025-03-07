import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"; // We’ll create this next

export const store = configureStore({
  reducer: {
    tasks: taskReducer, // Register task slice
  },
});
