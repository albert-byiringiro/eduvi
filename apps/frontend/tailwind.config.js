/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand colors
                primary: {
                    DEFAULT: '#9C4DF4',
                    hover: '#B583F9',
                    900: '#0A033C',
                },
                secondary: {
                    DEFAULT: '#FF6652',
                    hover: '#FF8E78',
                },

                // UI colors
                gray: {
                    DEFAULT: '#5D5A6F',
                    50: '#E5E5E5',
                    100: '#D8E0F0',
                },

                // Accent/Feedback colors
                accent: {
                    DEFAULT: '#00C968',
                },

                // Base colors
                white: "#FFFFFF",
                black: "#000000"
            },

            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Plus Jakarta Sans', 'sans-serif'],
            },

            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },

            borderRadius: {
                'sm': '0.375rem',
                DEFAULT: '0.5rem',
                'md': '0.625rem',
                'lg': '0.75rem',
                'xl': '1rem',
            },

            animation: {
                zoom: 'zoom 0.1s ease-in-out',
            },
            keyframes: {
                zoom: {
                    '0%': {
                        transform: 'scale(0)'
                    },
                    '100%': {
                        transform: 'scale(1)'
                    },
                }
            }
        },
    },
    plugins: [],
}