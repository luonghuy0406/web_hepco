import React from 'react'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './ChangeLanguage';

export default function Home() {
const {t } = useTranslation();
  return (
    <div>
        home
        {t('home')}
        <LanguageSwitcher/>
    </div>
  )
}
