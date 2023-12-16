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
import { useTranslation } from 'react-i18next';
import NewsItem from './pages/NewsItem';
import ProjectsItem from './pages/ProjectsItem';
import ShareholderItem from './pages/ShareHolderItems';

export default function Router() {
  const {t} = useTranslation()
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element: <Home /> },
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

        { path: t('duan'), element: <Projects page={'0'}/> },
        { path: `${t('duan')}/${t('dautu')}`, element: <Projects page={'1'}/> },
        { path: `${t('duan')}/${t('trongnuoc')}`, element: <Projects page={'2'}/> },
        { path: `${t('duan')}/${t('nuocngoai')}`, element: <Projects page={'3'}/> },
        { path: `${t('duan')}/:threadId`, element: <ProjectsItem /> },
        { path: t('tintuc'), element: <News page={'0'}/> },
        { path: `${t('tintuc')}/${t('hoatdong')}`, element: <News page={'1'}/> },
        { path: `${t('tintuc')}/${t('dangdoan')}`, element: <News page={'2'}/> },
        { path: `${t('tintuc')}/${t('phapluat')}`, element: <News page={'3'}/> },
        { path: `${t('tintuc')}/${t('tinkhac')}`, element: <News page={'4'}/> },
        { path: `${t('tintuc')}/:threadId`, element: <NewsItem/> },
        { path: t('codong'), element: <Shareholder  page={'0'}/> },
        { path: `${t('codong')}/${t('thongbao')}`, element: <Shareholder page={'1'}/> },
        { path: `${t('codong')}/${t('baocao')}`, element: <Shareholder page={'2'}/> },
        { path: `${t('codong')}/:threadId`, element: <ShareholderItem/> },
        { path: t('cauhoi'), element: <Question /> },
        { path: t('lienhe'), element: <Contact /> },
        { path: '404', element: <Navigate to="/" /> },
        { path: '*', element: <Navigate to="/" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return routes;
}