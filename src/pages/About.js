import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { useMatch } from 'react-router-dom';
import Banner from '../sections/Banner';
import AboutContent from '../sections/About/AboutContent';

export default function About() {
  const { t } = useTranslation();
  const parentPath = '/gioithieu';
  const pages = [
    { name: t('Về Hepco'), path: '', child: [] },
    { name: t('Sơ đồ tổ chức'), path: '/sodo', child: [] },
    { name: t('Thành tựu đạt được'), path: '/thanhtuu', child: [] },
    { name: t('Hồ sơ năng lực'), path: '/nangluc', child: [] },
    { name: t('Thư viện ảnh'), path: '/thuvien', child: [] },
  ];
  
  const match = useMatch(`${parentPath}/:page`);
  const pageParam = match?.params?.page || '';
  window.scrollTo(0, 0);
  return (
    <>
      <Banner
        name="Giới thiệu"
        image="https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/inner3.jpg"
        path={parentPath}
        pages={pages}
      />
      <AboutContent page={pageParam} />
      <Box sx={{ height: '500px', width: '500px' }}></Box>
    </>
  );
}
