import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import NewsContent from '../sections/News/NewsContent'

export default function News({page}) {
  const {t} = useTranslation()
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
          <title> {t("Tin tức")} | {t("HEPCO - CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ")} </title>
      </Helmet>
      <Banner name={t("Tin tức")} image={'/assets/images/bg4.jpg'} path={`/${t('tintuc')}`} pages={[]}/>
      <NewsContent pageParam={page}/>
    </>
  )
}
