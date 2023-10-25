import { Navigate, useRoutes, useLocation, Route,  } from 'react-router-dom'; 
import React, { useEffect, useState } from 'react';
import MainLayout from './layouts/main/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
// import jwt_decode from 'jwt-decode';
// // layouts
// import DashboardLayout from './layouts/dashboard';
// import SimpleLayout from './layouts/simple';
// //
// import BlogPage from './pages/BlogPage';
// import UserPage from './pages/UserPage';
// import LoginPage from './pages/LoginPage';
// import Page404 from './pages/Page404';
// import ProductsPage from './pages/ProductsPage';
// import DashboardAppPage from './pages/DashboardAppPage';
// import EditPost from './pages/EditPost';
// import AddNewPost from './pages/AddNewPost';
// import { checkTokenExpiration, refreshToken } from './api';
// import AddNewProduct from './pages/AddNewProduct';
// import { setAuthToken } from './api';

// // Protected route component that redirects to login if not authenticated
// const PrivateRoute = ({ element, ...rest }) => {
//   const token = localStorage.getItem('token');
//   if (token && token != 'undefined' && checkTokenExpiration()) {
//     // If expired, refresh the access token
//     refreshToken()
//     .then((newAccessToken) => {
//       if (!newAccessToken) {
//         // Redirect to login if refresh fails
//         return <Navigate to="/login" replace />;
//       }
//     })
//     .catch(() => {
//       // Redirect to login if refresh throws an error
//       return <Navigate to="/login" replace />;
//     });
//   }else if(!token || token == 'undefined'){
//     return <Navigate to="/login" replace />;
//   }
//   if(token && token != 'undefined'){
//     setAuthToken(token) 
//   }else{
//     localStorage.removeItem('token')
//   }
//   return element;
  
// };

export default function Router() {

  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element:  <Home />, index: true },
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },
        // { path: 'user', element: <PrivateRoute element={<UserPage />} /> },
        // { path: 'products', element: <PrivateRoute element={<ProductsPage />} /> },
        // { path: 'products/add', element: <PrivateRoute element={<AddNewProduct />} /> },
        // { path: 'news', element: <PrivateRoute element={<BlogPage />} /> },
        // { path: 'news/:id', element: <PrivateRoute element={<EditPost />} /> },
        // { path: 'news/add', element: <PrivateRoute element={<AddNewPost />} /> },
      ],
    },
    // {
    //   path: 'login',
    //   element: <LoginPage />,
    // },
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