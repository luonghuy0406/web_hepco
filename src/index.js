// index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import App from './App';
import LoadingPage from './pages/LoadingPage';

const theme = createTheme();
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {/* <App /> */}
    <LoadingPage/> 
  </ThemeProvider>
);


const getData = () =>{
  fetch(`${process.env.REACT_APP_HOST}/banner/list`)
    .then(response => response.text())
    .then(result => {
        const banner = JSON.parse(result).result
        fetch(`${process.env.REACT_APP_HOST}/company_data/list`)
        .then(response => response.text())
        .then(result => {
            const company_data = JSON.parse(result).result
            root.render(
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <App banner={banner} company_data={company_data.data}/>
                {/* <LoadingPage/>  */}
              </ThemeProvider>
            )
        })
        .catch(error => console.log('error', error));
    })
    .catch(error => console.log('error', error));
}

getData()