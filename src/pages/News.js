import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import { Box } from '@mui/material'

export default function News() {
  const {t} = useTranslation()
  const pages = [
    {name: t('Hoạt động công ty'), path:'',child:[]},
    {name: t('Đảng Đoàn thể'), path:'/dangdoan',child:[]},
    {name: t('Pháp luật môi trường'), path:'/phapluat',child:[]},
    {name: t('Tin tức khác'), path:'/tinkhac',child:[]},
  ]
  return (
    <>
      <Banner name="Tin tức" image={'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/inner3.jpg'} path={'/tintuc'} pages={pages}/>
      <Box sx={{height:'500px', width:'500px'}}>

      </Box>
    </>
  )
}
