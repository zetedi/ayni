import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(Language.EN);

  const t = (section: string, key: string): string => {
    // @ts-ignore - access section first
    let value = TRANSLATIONS[language]?.[section];

    if (!value) return key;

    // Split key by dot to handle nesting (e.g. 'featured.title')
    const parts = key.split('.');
    for (const part of parts) {
        if (value === undefined || value === null) {
            return key;
        }
        value = value[part];
    }
    
    return (value as string) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};