// App.js

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// Import your components here
import './ckeditor.css';
import './App.css';
import Router from './routes';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import ThemeProvider from './theme';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider>
            {/* <ScrollToTop />
            <StyledChart /> */}
          </ThemeProvider>
          <Router/>
        </BrowserRouter>
      </HelmetProvider>
    </I18nextProvider>
  );
};

export default App;