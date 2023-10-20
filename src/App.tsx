import React from 'react';
import type { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';

import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
