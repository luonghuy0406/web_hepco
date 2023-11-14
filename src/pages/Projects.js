import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import { Box } from '@mui/material'

export default function Projects() {
  const {t} = useTranslation()
  const pages = [
    {name: t('Dự án đầu tư'), path:'',child:[]},
    {name: t('Hợp tác trong nước'), path:'/trongnuoc',child:[]},
    {name: t('Hợp tác nước ngoài'), path:'/nuocngoai',child:[]},
  ]
  window.scrollTo(0, 0);
  return (
    <>
      <Banner name="Dự án" image={'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/inner3.jpg'} path={'/duan'} pages={pages}/>
      <Box sx={{height:'500px', width:'500px'}}>

      </Box>
    </>
  )
}
