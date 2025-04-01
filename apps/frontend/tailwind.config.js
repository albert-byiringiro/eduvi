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
                    50: '#F8F2FF',
                    100: '#F2E5FF',
                    200: '#EDE9F2',
                    300: '#E4E2F4',
                    400: '#EFEBF5',
                    900: '#0A033C',
                },
                secondary: {
                    DEFAULT: '#FF6652',
                    50: '#FFF4F2',
                    100: '#FBC2AA',
                    200: '#FF5364',
                    300: '#E93E30',
                },

                // UI colors
                gray: {
                    DEFAULT: '#5D5A6F',
                    50: '#E5E5E5',
                    100: '#DEDDE4',
                    200: '#D8D8D8',
                    300: '#F8FFFB',
                    400: '#969696',
                    500: '#424242',
                    600: '#232323',
                    700: '#1C1C1B',
                    800: '#1A0400',
                },

                // Accent/Feedback colors
                green: {
                    DEFAULT: '#00C968',
                    50: '#E5FFF3',
                    100: '#D9E0FC',
                    200: '#07E5CA',
                    300: '#00B59B',
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
        },
    },
    plugins: [],
}