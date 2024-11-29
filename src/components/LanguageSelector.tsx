import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'fa', name: 'فارسی', dir: 'rtl' },
  { code: 'hi', name: 'हिंदी', dir: 'ltr' }
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.dir = languages.find(lang => lang.code === code)?.dir || 'ltr';
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition">
        <Globe className="h-5 w-5" />
        <span className="hidden sm:inline">{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                i18n.language === language.code
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}