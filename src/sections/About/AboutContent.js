import React from 'react'
import { useTranslation } from 'react-i18next'
import About from './About'
import Chart from './Chart'
import CompanyProfile from './CompanyProfile'
import Gallery from './Gallery'
import Mandates from './Mandates'
import Achievement from './Achievement'
import AlbumItems from './AlbumItems'

export default function AboutContent({page}) {
  const {t} = useTranslation()
  if(page == t('sodo')){
    return (
        <Chart/>
    )
  }else if(page == t('chucnang')){
    return <Mandates/>
  }else if(page == t('nangluc')){
    return <CompanyProfile/>
  }else if(page == t('thanhtuu')){
    return <Achievement/>
  }else if( page== t('thuvien')){
    return (
      <Gallery/>
    )
  }else if( page== t('album')){
    return (
      <AlbumItems/>
    )
  }
  return <About/>
}
