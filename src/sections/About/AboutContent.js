import React from 'react'
import OrgnizationChart from './OrgnizationChart'
import { useTranslation } from 'react-i18next'
import About from './About'
import Chart from './Chart'
import CompanyProfile from './CompanyProfile'
import Gallery from './Gallery'

export default function AboutContent({page}) {
  const {t} = useTranslation()
  if(page == t('sodo')){
    return (
        <Chart/>
    )
  }else if(page == t('nangluc')){
    return <CompanyProfile/>
  }else if( page== t('thuvien')){
    return (
      <Gallery/>
    )
  }
  return <About/>
}
