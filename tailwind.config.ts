import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(165,22,27)',
        secondary: 'rgb(255,255,255)',
        lightViolet: 'rgb(100,204,197)',
        textRed: 'rgb(157,2,8)',
        lightPink: 'rgb(251,231,234)',
        lightPurple: 'rgb(226,222,254)',
        lightBlue: 'rgb(20,31,57)',
      }
    }
  },
  plugins: []
};

export default config;
