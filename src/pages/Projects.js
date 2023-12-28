import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import ProjectsContent from '../sections/Projects/ProjectsContent'
import { Helmet } from 'react-helmet-async';

export default function Projects({page}) {
  const {t} = useTranslation()
  window.scrollTo(0, 0);
  return (
    <>
     <Helmet>
      <title> {t("Dự án")} | {t("HEPCO - CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ")} </title>
     </Helmet>
      <Banner name={t("Dự án")} image={'/assets/images/bg4.jpeg'} path={`/${t('duan')}`} pages={[]}/>
      <ProjectsContent pageParam={page}/>
    </>
  )
}
