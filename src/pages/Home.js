import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Home() {
const {t} = useTranslation();
  return (
    <div style={{width:'100%', height:"2000px", background:'red'}}>
        home
        {t('home')}
    </div>
  )
}
