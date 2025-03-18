// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicForm from './Form/Form';
import TaskManager from './TaskStuff/TaskManager';
import Memo from './MemoStuff/Memo'
import Effect from './EffectStuff/Effect'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<BasicForm />} />
        <Route path="/task" element={<TaskManager />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/effect" element={<Effect />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
