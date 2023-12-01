import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import { Box } from '@mui/material'
import NewsContent from '../sections/News/NewsContent'
import { useMatch } from 'react-router-dom'

export default function News() {
  const {t} = useTranslation()
  const pages = [
    {name: t('Hoạt động công ty'), path:'',child:[]},
    {name: t('Đảng Đoàn thể'), path:`/${t('dangdoan')}`,child:[]},
    {name: t('Pháp luật môi trường'), path:`/${t('phapluat')}`,child:[]},
    {name: t('Tin tức khác'), path:`/${t('tinkhac')}`,child:[]},
  ]
  const match = useMatch(`${t('tintuc')}/:page`);
  const pageParam = match?.params?.page || '';
  window.scrollTo(0, 0);
  return (
    <>
      <Banner name={t("Tin tức")} image={'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/inner3.jpg'} path={`/${t('tintuc')}`} pages={[]}/>
      <NewsContent pageParam={pageParam}/>
    </>
  )
}
