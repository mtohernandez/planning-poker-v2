import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Join } from './app/session';
import { Session } from './app/join';
import { NotFoundRoute } from './not-found';

export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/join" replace={true} />,
    },
    {
      path: '/join',
      element: <Join />,
    },
    {
      path: '/session',
      element: <Session />,
    },
    {
      path: '*',
      element: <NotFoundRoute />,
    },
  ]);
