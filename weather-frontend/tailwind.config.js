module.exports = {
    darkMode: 'class',
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/rippleui/dist/**/*.js",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("rippleui"),
        require('tailwindcss-theme-variants'),
    ],
};