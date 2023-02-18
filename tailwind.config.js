/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#2463eb',
                secondary: '#EBAC24',
            },
            fontFamily: {
                theme: 'Manrope, sans-serif',
            },
        },
    },
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    plugins: [require('@tailwindcss/forms')],
};
