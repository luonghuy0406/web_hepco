import React from 'react'
import { useTranslation } from 'react-i18next'
import NonHazardousWaste from './NonHazardousWaste'
import HazardousWaste from './HazardousWaste'
import MechanicsConstruction from './MechanicsConstruction'
import DrainageLighting from './DrainageLighting'
import CemeteryManagement from './CemeteryManagement'
import OtherServices from './OtherServices'

export default function ServicesContent({page}) {
  const {t} = useTranslation()
  if(page == t('nguyhai')){
    return (
        <HazardousWaste/>
    )
  }else if(page == t('cokhi-xaydung')){
    return <MechanicsConstruction/>
  }else if(page == t('thoatnuoc-chieusang')){
    return <DrainageLighting/>
  }else if(page == t('quantrang')){
    return <CemeteryManagement/>
  }else if( page== t('kinhdoanhkhac')){
    return (
      <OtherServices/>
    )
  }
  return <NonHazardousWaste/>
}
