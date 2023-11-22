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
        'mobile': 'url("/static/images/mobile-background.svg")',
        'desktop-background': 'url("/static/images/desktop-background.svg")',
      },
    },
  },
  plugins: [],
}
export default config
