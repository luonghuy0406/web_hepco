import { Navigate, useRoutes } from 'react-router-dom'; 
import React from 'react';
import MainLayout from './layouts/main/MainLayout';
import Home from './pages/Home';
import About from './pages/About';

export default function Router() {

  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'gioithieu', element: <About /> },
      ],
    },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: '404', element: <Navigate to="/" /> },
    //     { path: '*', element: <Navigate to="/" /> },
    //   ],
    // },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return routes;
}