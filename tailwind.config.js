module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            white: '#ffffff',
            blue: {
                medium: '#005c98'
            },
            black: {
                light: '#005c98',
                faded: '#00000059'
            }
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
