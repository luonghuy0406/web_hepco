// index.js

import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import App from './App';
import LoadingPage from './pages/LoadingPage';

const theme = createTheme();
const container = document.getElementById('root');
const root = createRoot(container);

const fetchData = async (url) => {
  const response = await fetch(url);
  const result = await response.text();
  return JSON.parse(result).result;
};

const getData = async (endpoint) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_HOST}${endpoint}`);
    const result = await response.json();
    return result.result; // Assuming the actual data is in the 'result' property
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to be caught in the Promise.all catch block
  }
};

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndRender = async () => {
      try {
        const [banner, company_data, mission, video, coreVal, chart] = await Promise.all([
          getData('/banner/list'),
          getData('/company_data/list'),
          getData('/sharedtable/father/12'),
          getData('/company_data/detail/15'),
          getData('/sharedtable/father/13'),
          getData('/sharedtable/father/23'),
        ]);

        // You can further process the data if needed
        setData({ banner, company_data, mission, video, coreVal, chart });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndRender();
  }, []);

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoadingPage />
      </ThemeProvider>
    );
  }

  if (!data || !data.company_data) {
    console.error('Invalid data structure:', data);
    return null; // or display an error message
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App
        banner={data.banner}
        company_data={data.company_data.data}
        mission={data.mission}
        video={data.video}
        coreVal={data.coreVal}
        chart = {data.chart}
      />
    </ThemeProvider>
  );
};

root.render(<Main />);
