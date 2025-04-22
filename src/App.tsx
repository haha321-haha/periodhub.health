// src/App.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n'; // 引入i18n配置

const App: React.FC = () => {
  const { t } = useTranslation(); // 使用翻译钩子

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <nav>
        <ul>
          <li>{t('about')}</li>
          <li>{t('contact')}</li>
          <li>{t('settings')}</li>
        </ul>
      </nav>
    </div>
  );
};

export default App;