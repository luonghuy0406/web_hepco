import React from 'react'
import OrgnizationChart from './OrgnizationChart'
import { useTranslation } from 'react-i18next'
import About from './About'
import Chart from './Chart'
import CompanyProfile from './CompanyProfile'

export default function AboutContent({page}) {
  const {t} = useTranslation()
  console.log(">>>",page)
  if(page == t('sodo')){
    return (
        <Chart/>
    )
  }else if(page == t('nangluc')){
    return <CompanyProfile/>
  }
  return <About/>
}
