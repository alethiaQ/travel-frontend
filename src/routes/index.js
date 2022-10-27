import { Navigate } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import { Fragment, lazy } from 'react';
const DefaultRoute = '/home';
const Home = lazy(() => import('./Home'));
export const Routes = [
  {
    path: '/',
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: '/home',
    element: <Home />,
  },
];
