import React from 'react'
import { useTranslation } from 'react-i18next'
import NonHazardousWaste from './NonHazardousWaste'

export default function ServicesContent({page}) {
  const {t} = useTranslation()
  if(page == t('nguyhai')){
    return (
        <NonHazardousWaste/>
    )
  }else if(page == t('cokhi-xaydung')){
    return <NonHazardousWaste/>
  }else if(page == t('thoatnuoc-chieusang')){
    return <NonHazardousWaste/>
  }else if(page == t('quantrang')){
    return <NonHazardousWaste/>
  }else if( page== t('kinhdoanhkhac')){
    return (
      <NonHazardousWaste/>
    )
  }
  return <NonHazardousWaste/>
}
