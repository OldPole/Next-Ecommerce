import { ReactNode } from 'react';

export interface Feature {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface Slide {
  url: string;
  title: string;
  label: string;
  category: string;
}
