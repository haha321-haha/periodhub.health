import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <button
        className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => i18n.changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`px-3 py-1 rounded ${i18n.language === 'zh' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => i18n.changeLanguage('zh')}
      >
        中文
      </button>
      <button
        className={`px-3 py-1 rounded ${i18n.language === 'ja' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => i18n.changeLanguage('ja')}
      >
        日本語
      </button>
    </div>
  );
}