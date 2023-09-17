import { defineGlobalStyles } from '@pandacss/dev';
import { defineConfig } from '@pandacss/dev';
import { neumorphism } from './neumophism-recipe';

const globalCss = defineGlobalStyles({
  'html,body': {
    background: 'linear-gradient(180deg, #efefef 0%, #e7e7e7 100%)',
    color: '#647890',
  },
});

export default defineConfig({
  theme: {
    extend: {
      recipes: {
        neumorphism,
      },
    },
    tokens: {
      colors: {
        main: { value: '#EFEFEF' },
        primary: { value: '#647890' },
        secondary: { value: '#25CEE0' },
      },
    },
  },
  preflight: true,
  include: ['./components/**/*.{ts,jsx,js,jsx', './app/**/*.{ts,tsx,js,jsx}'],
  exclude: [],
  outdir: 'styled-system',
  globalCss,
});
