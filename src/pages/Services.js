import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import { Helmet } from 'react-helmet-async';
import ServicesContent from '../sections/Services/ServicesContent'

export default function Services({page}) {
  const {t} = useTranslation()
  const pages = [
    {name: t('Thu gom vận chuyển xử lý rác sinh hoạt'), path:'',child:[]},
    {name: t('Thu gom vận chuyển xử lý rác nguy hại'), path:`/${t('nguyhai')}`,child:[]},
    {name: t('Cơ khí - Xây dựng'), path:`/${t('cokhi-xaydung')}`,child:[]},
    {name: t('Thoát nước - Điện chiếu sáng'), path:`/${t('thoatnuoc-chieusang')}`,child:[]},
    {name: t('Quản trang'), path:`/${t('quantrang')}`,child:[]},
    {name: t('Kinh doanh khác'), path:`/${t('kinhdoanhkhac')}`,child:[]},
  ]
  window.scrollTo(0, 0);
  return (
    <>
    <Helmet>
        <title> {t("Dịch vụ")} | {t("HEPCO - CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ")} </title>
     </Helmet>
      <Banner name={t("Dịch vụ")} image={'/assets/images/bg4.jpg'} path={`/${t('dichvu')}`} pages={pages}/>
      <ServicesContent page={page}/>
    </>
  )
}
