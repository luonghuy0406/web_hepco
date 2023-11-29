import React from 'react'
import OrgnizationChart from './OrgnizationChart'
import { useTranslation } from 'react-i18next'
import About from './About'
import Chart from './Chart'

export default function AboutContent({page}) {
  const {t} = useTranslation()
  console.log(">>>",page)
  if(page == 'sodo'){
    return (
        <Chart/>
    )
  }
  return <About/>
}
