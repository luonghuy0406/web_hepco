import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import Header from './header';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  maxWidth: '100%'
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

export default function MainLayout(props) {
    return (
      <>
      <Header/>
      <LayoutRoot>
          <LayoutContainer>
            <Outlet />
          </LayoutContainer>
        </LayoutRoot>
        {/* <Footer footer={footer}/> */}
      </>
    );
  }