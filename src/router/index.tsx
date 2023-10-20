import React, { Fragment } from 'react';

import { createBrowserRouter, Link } from 'react-router-dom';

import People from '../containers/people';
import NoRouteMatch from '../components/noRouteMatch';

import { DEFAULT_PAGE_NUMBER } from '../constants/helper';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Fragment>
        <h1 className="click_me">Click the link(s) to proceed!</h1>
        <Link to={`people/${DEFAULT_PAGE_NUMBER}`}>People</Link>
      </Fragment>
    )
  },
  {
    path: 'people/:page',
    element: <People/>
  },
  {
    path: '*',
    element: <NoRouteMatch/>
  }
]);

export default router;
