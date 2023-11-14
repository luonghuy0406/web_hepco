import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import { Box } from '@mui/material'

export default function Shareholder() {
  const {t} = useTranslation()
  const pages = []
  window.scrollTo(0, 0);
  return (
    <>
      <Banner name="Cổ đông" image={'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/inner3.jpg'} path={'/codong'} pages={pages}/>
      <Box sx={{height:'500px', width:'500px'}}>

      </Box>
    </>
  )
}
