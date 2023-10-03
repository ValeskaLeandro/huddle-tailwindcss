import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: 'hsl(322, 100%, 66%)',
        lightPink: 'hsl(321, 100%, 78%)',
        lightRed: 'hsl(0, 100%, 63%)',
        darkCyan: 'hsl(192, 100%, 9%)',
        paleBlue: 'hsl(207, 100%, 98%)',
      },
    },
  },
  plugins: [],
}
export default config
