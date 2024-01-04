import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Banner from '../sections/Banner';
import AboutContent from '../sections/About/AboutContent';

export default function About({page, data}) {
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
        name={t("Giới thiệu")}
        sub_name={t("Tiền thân là phòng quản lý đô thị và nhà đất được ra đời năm 1975, trải qua quá trình hình thành và phát triển với nhiều cột mốc thay đổi, năm 2015 Công ty trách nhiệm hữu hạn nhà nước Môi trường và Công trình Đô thị Huế trở thành Công ty Cổ phần Môi trường và Công trình đô thị Huế cho đến nay.  Là doanh nghiệp nhà nước chi phối 51% cổ phần với bộ máy tổ chức gồm 05 phòng nghiệp vụ và 13 đơn vị xí nghiệp trực thuộc, Hepco là đơn vị uy tín hàng đầu miền Trung hoạt động trong lĩnh vực vệ sinh môi trường và công trình đô thị với gần 500 khách hàng, đối tác trên địa bàn toàn tỉnh Thừa Thiên Huế.")}
        image="/assets/images/bg4.jpg"
        path={parentPath}
        pages={pages}
      />
      <AboutContent page={page} data={data}/>
    </>
  );
}
