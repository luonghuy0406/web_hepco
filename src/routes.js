import { Navigate, useRoutes } from 'react-router-dom'; 
import React from 'react';
import MainLayout from './layouts/main/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Shareholder from './pages/Shareholder';
import Question from './pages/Question';
import Contact from './pages/Contact';
import News from './pages/News';

export default function Router() {

  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'gioithieu', element: <About /> },
        { path: 'gioithieu/:page', element: <About /> },
        { path: 'dichvu', element: <Services /> },
        { path: 'dichvu/:page', element: <Services /> },
        { path: 'duan', element: <Projects /> },
        { path: 'duan/:page', element: <Projects /> },
        { path: 'tintuc', element: <News /> },
        { path: 'tintuc/:page', element: <News /> },
        { path: 'codong', element: <Shareholder /> },
        { path: 'codong/:page', element: <Shareholder /> },
        { path: 'cauhoi', element: <Question /> },
        { path: 'cauhoi/:page', element: <Question /> },
        { path: 'lienhe', element: <Contact /> },
        { path: 'lienhe/:page', element: <Contact /> },
        { path: '404', element: <Navigate to="/" /> },
        { path: '*', element: <Navigate to="/" /> },
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