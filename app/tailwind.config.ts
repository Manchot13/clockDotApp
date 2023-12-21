import type { Config } from 'tailwindcss'

const config: Config = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
               'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         fontFamily: {
            Rubik: ["var(--font-Rubik)"],
            Silkscreen: ["var(--font-Silkscreen)"],
         },
      },
      colors: {
         'east-bay': {
            '50': '#f4f6fa',
            '100': '#e6eaf3',
            '200': '#d3daea',
            '300': '#b5c2db',
            '400': '#92a3c8',
            '500': '#7788ba',
            '600': '#6572ab',
            '700': '#59629c',
            '800': '#4d5280',
            '900': '#424769',
            '950': '#2b2d40',
         },
         'macaroni-and-cheese': {
            '50': '#fef6ee',
            '100': '#feead6',
            '200': '#fbd1ad',
            '300': '#f9b17a',
            '400': '#f58542',
            '500': '#f2631d',
            '600': '#e34a13',
            '700': '#bd3611',
            '800': '#962c16',
            '900': '#792715',
            '950': '#411109',
         },
      },
   },
   plugins: [],
}
export default config
