/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '412px',
        // before => @media (min-width: 640px) { ... }

        md: '810px',
        // before => @media (min-width: 768px) { ... }

        lg: '1024px',
        // before => @media (min-width: 1024px) { ... }

        xl: '1440px',
        // before => @media (min-width: 1280px) { ... }

        '2xl': '1820px',
        // before => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
