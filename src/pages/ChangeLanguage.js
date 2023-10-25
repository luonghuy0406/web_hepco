import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('vi')}>Tiếng Việt</button>
    </div>
  );
};

export default LanguageSwitcher;