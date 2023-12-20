// LoadingComponent.js
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, useTheme } from '@mui/material';

const LoadingComponent = () => {

    const theme = useTheme()
  return (
    <Box sx={{zIndex:'999', display:'flex', alignItems: "center", justifyContent:"center", background: theme.color.green1, position: 'fixed', top: 0, left: 0, right:0,bottom:0}}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingComponent;
