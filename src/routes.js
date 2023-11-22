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
        { path: 'gioithieu', element: <About/> },
        { path: 'gioithieu/sodo', element: <About page='sodo'/> },
        { path: 'gioithieu/thanhtuu', element: <About page='thanhtuu'/> },
        { path: 'gioithieu/nangluc', element: <About page='nangluc'/> },
        { path: 'gioithieu/thuvien', element: <About page='thuvien'/> },
        { path: 'dichvu', element: <Services /> },
        { path: 'duan', element: <Projects /> },
        { path: 'duan/trongnuoc', element: <Projects page='trongnuoc'/> },
        { path: 'duan/nuocngoai', element: <Projects page='nuocngoai'/> },
        { path: 'tintuc', element: <News /> },
        { path: 'tintuc/dangdoan', element: <News page='dangdoan'/> },
        { path: 'tintuc/phapluat', element: <News page='phapluat'/> },
        { path: 'tintuc/tinkhac', element: <News page='tinkhac'/> },
        { path: 'codong', element: <Shareholder /> },
        { path: 'cauhoi', element: <Question /> },
        { path: 'lienhe', element: <Contact /> },
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