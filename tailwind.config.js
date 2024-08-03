/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [   "./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
  
    extend: {
      keyframes: {
        abox1: {
          '0%': { width: '112px', height: '48px', marginTop: '64px', marginLeft: '0px' },
          '12.5%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '0px' },
          '25%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '0px' },
          '37.5%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '0px' },
          '50%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '0px' },
          '62.5%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '0px' },
          '75%': { width: '48px', height: '112px', marginTop: '0px', marginLeft: '0px' },
          '87.5%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '0px' },
          '100%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '0px' },
        },
        abox2: {
          '0%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '0px' },
          '12.5%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '0px' },
          '25%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '0px' },
          '37.5%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '0px' },
          '50%': { width: '112px', height: '48px', marginTop: '0px', marginLeft: '0px' },
          '62.5%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '64px' },
          '75%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '64px' },
          '87.5%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '64px' },
          '100%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '64px' },
        },
        abox3: {
          '0%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '64px' },
          '12.5%': { width: '48px', height: '48px', marginTop: '0px', marginLeft: '64px' },
          '25%': { width: '48px', height: '112px', marginTop: '0px', marginLeft: '64px' },
          '37.5%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '64px' },
          '50%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '64px' },
          '62.5%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '64px' },
          '75%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '64px' },
          '87.5%': { width: '48px', height: '48px', marginTop: '64px', marginLeft: '64px' },
          '100%': { width: '112px', height: '48px', marginTop: '64px', marginLeft: '0px' },
        },
        bellRing: {
          '0%, 100%': { transformOrigin: 'top' },
          '15%': { transform: 'rotateZ(10deg)' },
          '30%': { transform: 'rotateZ(-10deg)' },
          '45%': { transform: 'rotateZ(5deg)' },
          '60%': { transform: 'rotateZ(-5deg)' },
          '75%': { transform: 'rotateZ(2deg)' },
        },
      },
      animation: {
        abox1: 'abox1 4s 1s forwards ease-in-out infinite',
        abox2: 'abox2 4s 1s forwards ease-in-out infinite',
        abox3: 'abox3 4s 1s forwards ease-in-out infinite',
        bellRing: 'bellRing 0.9s both',
      },
      clipPath:{
        'custom-shape':'polygon(0 0, 53% 0, 15% 100%, 0 100%)',
        'custom-shape2':'polygon(48% 0, 89% 0, 37% 100%, 16% 100%)',
        'custom-shape3':'polygon(89% 0, 100% 0, 100% 100%, 36% 100%)'
      },
      screens:{
        "sm" : "350px",
        "md" :"568px",
        "lg" : "8024px",
        "xl" : "1080px",
        "2xl" :"1536px",
      },
      width: {
        '128': '32rem',
        '160': '40rem',
        '192': '78rem',
         
      },
      transitionProperty:{
         'bg-color-transform': 'background-color, transform',
      },
      transitionDelay:{
        '600': '600ms',
        '400': '400ms',
      },
      colors:{
        sectextcolor:"white",

      }
      
    },
  },
 
  
  
  plugins: [require('tailwind-clip-path')],
}

