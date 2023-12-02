import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import { Box } from '@mui/material'
import ServicesContent from '../sections/Services/ServicesContent'

export default function Services() {
  const {t} = useTranslation()
  const pages = [
    {name: t('Vệ sinh, thu gom vận chuyển xử lý rác sinh hoạt'), path:'',child:[]},
    {name: t('Vệ sinh, thu gom vận chuyển xử lý rác nguy hại'), path:`/${t('nguyhai')}`,child:[]},
    {name: t('Cơ khí - Xây dựng'), path:`/${t('cokhi-xaydung')}`,child:[]},
    {name: t('Thoát nước - Điện chiếu sáng'), path:`/${t('thoatnuoc-chieusang')}`,child:[]},
    {name: t('Quản trang'), path:`/${t('quantrang')}`,child:[]},
    {name: t('Kinh doanh khác'), path:`/${t('kinhdoanhkhac')}`,child:[]},
  ]
  window.scrollTo(0, 0);
  return (
    <>
      <Banner name={t("Dịch vụ")} image={'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/inner3.jpg'} path={`/${t('dichvu')}`} pages={pages}/>
      <ServicesContent/>
    </>
  )
}
