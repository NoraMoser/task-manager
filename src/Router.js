// Router.js
import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskManager from './TaskStuff/TaskManager';
import Memo from './MemoStuff/Memo'
import Effect from './EffectStuff/Effect'
import FetchingStuff from './FetchingStuff/FetchingStuff'

const LazyBasicForm = lazy(() => import('./Form/Form'));
const LazyBasic = lazy(() => import('./Basic/Basic'));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/form" element={<LazyBasicForm />} />
          <Route path="/task" element={<TaskManager />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/effect" element={<Effect />} />
          <Route path="/fetching" element={<FetchingStuff />} />
          <Route path="/basic" element={<LazyBasic />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
