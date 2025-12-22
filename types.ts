export enum Language {
  EN = 'EN',
  ES = 'ES',
  QU = 'QU'
}

export interface ValueItem {
  icon: string;
  key: string; // Key for translation lookup
  color?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}