import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import NewsContent from '../sections/News/NewsContent'
import { useMatch } from 'react-router-dom'

export default function News({page}) {
  const {t} = useTranslation()
  window.scrollTo(0, 0);
  return (
    <>
      <Banner name={t("Tin tức")} image={'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/inner3.jpg'} path={`/${t('tintuc')}`} pages={[]}/>
      <NewsContent pageParam={page}/>
    </>
  )
}
