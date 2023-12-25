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
        <HazardousWaste id={'ser_02'}/>
    )
  }else if(page == t('cokhi-xaydung')){
    return <MechanicsConstruction id={'ser_03'}/>
  }else if(page == t('thoatnuoc-chieusang')){
    return <DrainageLighting id={'ser_04'}/>
  }else if(page == t('quantrang')){
    return <CemeteryManagement id={'ser_05'}/>
  }else if( page== t('kinhdoanhkhac')){
    return (
      <OtherServices id={'ser_06'}/>
    )
  }
  return <NonHazardousWaste id={'ser_01'}/>
}
