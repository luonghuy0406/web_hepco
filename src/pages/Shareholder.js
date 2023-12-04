import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import ShareholderContent from '../sections/Shareholder/ShareholderContent'

export default function Shareholder() {
  const {t} = useTranslation()
  const pages = []
  window.scrollTo(0, 0);
  return (
    <>
      <Banner name={t("Cổ đông")} image={'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/inner3.jpg'} path={`/${t('codong')}`} pages={pages}/>
      <ShareholderContent/>
    </>
  )
}
