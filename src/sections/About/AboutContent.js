import React from 'react'
import { useTranslation } from 'react-i18next'
import About from './About'
import Chart from './Chart'
import CompanyProfile from './CompanyProfile'
import Gallery from './Gallery'
import Mandates from './Mandates'
import Achievement from './Achievement'
import AlbumItems from './AlbumItems'

export default function AboutContent({page, data}) {
  const {t} = useTranslation()
  switch (page) {
    case t('sodo'):
      return (
          <Chart/>
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
