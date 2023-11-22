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
        'mobile': 'url("/static/images/mobile-background.png")',
        'desktop': 'url("/static/images/desktop-background.png")',
      },
    },
  },
  plugins: [],
}
export default config
