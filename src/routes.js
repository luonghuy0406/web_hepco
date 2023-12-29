import { Navigate, useRoutes } from 'react-router-dom'; 
import React from 'react';
import MainLayout from './layouts/main/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Question from './pages/Question';
import Contact from './pages/Contact';
import { useTranslation } from 'react-i18next';
import Post from './pages/Post';
import PostItem from './sections/Posts/PostItem';

export default function Router({data}) {
  const {t} = useTranslation()
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout data={data}/>,
      children: [
        { path: '', element: <Home data={data}/> },
        { path: t('gioithieu'), element: <About/> },
        { path: `${t('gioithieu')}/${t('sodo')}`, element: <About page={t('sodo')}/> },
        { path: `${t('gioithieu')}/${t('chucnang')}`, element: <About page={t('chucnang')}/> },
        { path: `${t('gioithieu')}/${t('thanhtuu')}`, element: <About page={t('thanhtuu')}/> },
        { path: `${t('gioithieu')}/${t('nangluc')}`, element: <About page={t('nangluc')}/> },
        { path: `${t('gioithieu')}/${t('thuvien')}`, element: <About page={t('thuvien')}/> },
        { path: `${t('gioithieu')}/${t('thuvien')}/:threadId`, element: <About page={t('album')}/> },
        { path: t('dichvu'), element: <Services /> },
        { path: `${t('dichvu')}/${t('nguyhai')}`, element: <Services page={t('nguyhai')}/>},
        { path: `${t('dichvu')}/${t('cokhi-xaydung')}`, element: <Services page={t('cokhi-xaydung')}/>},
        { path: `${t('dichvu')}/${t('thoatnuoc-chieusang')}`, element: <Services page={t('thoatnuoc-chieusang')}/>},
        { path: `${t('dichvu')}/${t('quantrang')}`, element: <Services page={t('quantrang')}/>},
        { path: `${t('dichvu')}/${t('kinhdoanhkhac')}`, element: <Services page={t('kinhdoanhkhac')}/>},

        { path: t('cauhoi'), element: <Question /> },
        { path: t('lienhe'), element: <Contact data={data}/> },
        { path: '404', element: <Navigate to="/" /> },
        { path: '*', element: <Navigate to="/" /> },


        { path: t('tintuc'), element: <Post typePost={'post'} page={'0'}/> },
        { path: `${t('tintuc')}/${t('hoatdong')}`, element: <Post typePost={'post'} page={'1'}/> },
        { path: `${t('tintuc')}/${t('dangdoan')}`, element: <Post typePost={'post'} page={'2'}/> },
        { path: `${t('tintuc')}/${t('phapluat')}`, element: <Post typePost={'post'} page={'3'}/> },
        { path: `${t('tintuc')}/${t('tinkhac')}`, element: <Post typePost={'post'} page={'4'}/> },
        { path: `${t('tintuc')}/:threadId`, element: <PostItem typePost={'post'}/> },        
        { path: t('codong'), element: <Post typePost={'shareholder'}  page={'0'}/> },
        { path: `${t('codong')}/${t('thongbao')}`, element: <Post typePost={'shareholder'} page={'5'}/> },
        { path: `${t('codong')}/${t('baocao')}`, element: <Post typePost={'shareholder'} page={'6'}/> },
        { path: `${t('codong')}/:threadId`, element: <PostItem typePost={'shareholder'}/> },
        { path: t('duan'), element: <Post typePost={'project'} page={'0'}/> },
        { path: `${t('duan')}/${t('dautu')}`, element: <Post typePost={'project'} page={'7'}/> },
        { path: `${t('duan')}/${t('trongnuoc')}`, element: <Post typePost={'project'} page={'8'}/> },
        { path: `${t('duan')}/${t('nuocngoai')}`, element: <Post typePost={'project'} page={'9'}/> },
        { path: `${t('duan')}/:threadId`, element: <PostItem typePost={'project'}/> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return routes;
}