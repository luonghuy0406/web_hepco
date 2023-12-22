import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Banner from '../sections/Banner';
import AboutContent from '../sections/About/AboutContent';

export default function About({page}) {
  const { t } = useTranslation();
  const parentPath = `/${t('gioithieu')}`;
  const pages = [
    {name: t('Về Hepco'), path:'',child:[]},
    {name: t('Chức năng - Giấy phép'), path:`/${t('chucnang')}`,child:[]},
    {name: t('Sơ đồ tổ chức'), path:`/${t('sodo')}`,child:[]},
    {name: t('Thành tựu đạt được'), path:`/${t('thanhtuu')}`,child:[]},
    {name: t('Hồ sơ năng lực'), path:`/${t('nangluc')}`,child:[]},
    {name: t('Thư viện ảnh'), path:`/${t('thuvien')}`,child:[]}
  ];
  
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
          <title> {t("Giới thiệu")} | {t("HEPCO - CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ")} </title>
      </Helmet>
      <Banner
        name={"Giới thiệu"}
        image="https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/inner3.jpg"
        path={parentPath}
        pages={pages}
      />
      <AboutContent page={page} />
    </>
  );
}
