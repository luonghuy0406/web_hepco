import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Home() {
const { trans } = useTranslation();
  const handleChangeLanguage = (language) => {
    trans.changeLanguage(language);
  };
  return (
    <div>
        {trans['home']}

        <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('vi')}>VietNamese</button>    
    </div>
  )
}
