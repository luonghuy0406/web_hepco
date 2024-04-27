import React from 'react'
import { useTranslation } from 'react-i18next'
import About from './About'
import Achievement from './Achievement'
import AlbumItems from './AlbumItems'
import Chart from './Chart'
import CompanyProfile from './CompanyProfile'
import Gallery from './Gallery'
import Mandates from './Mandates'

export default function AboutContent({page, data, data_chart}) {
  const {t} = useTranslation()
  switch (page) {
    case t('sodo'):
      return (
          <Chart data_chart={data_chart}/>
      )
    case t('chucnang'):
      return (
          <Mandates/>
      )
    case t('nangluc'):
      return (
          <CompanyProfile/>
      )
    case t('thanhtuu'):
      return (
          <Achievement/>
      )
    case t('thuvien'):
        return (
            <Gallery/>
        )
    case t('album'):
      return (
          <AlbumItems/>
      )
    default:
      return <About data={data}/>
  }
}
