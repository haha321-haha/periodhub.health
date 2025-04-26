// _app.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // i18n 初始化
import LanguageSwitcher from './components/LanguageSwitcher';
import '../styles/globals.css'; // 引入全局样式

function App() {
  const { t } = useTranslation();

  return (
    <React.StrictMode> {/* 开发环境启用严格模式 */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">{t('welcome')}</h1>
          <p className="text-gray-600 mb-4">{t('description')}</p>
          <nav className="mb-6">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  {t('contact')}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  {t('settings')}
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-4">
            <p className="text-gray-600 mb-2">{t('language')}:</p>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;