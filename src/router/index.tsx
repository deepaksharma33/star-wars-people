import React from 'react';

import { createBrowserRouter, Link } from 'react-router-dom';

import People from '../containers/people';

import { DEFAULT_PAGE_NUMBER } from '../constants/helper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Link to={`people/${DEFAULT_PAGE_NUMBER}`}>People</Link>
  },
  {
    path: 'people/:page',
    element: <People/>
  }
]);

export default router;
