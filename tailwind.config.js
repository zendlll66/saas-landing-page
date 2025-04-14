/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#043873',   // สีหลักของเว็บ
                secondary: '#4F9CF9',
                tertiary: '#FFE492',// สีรอง
                dark: '#111827',
                light: '#F9FAFB',
            },
        },
    },
    plugins: [],
};
