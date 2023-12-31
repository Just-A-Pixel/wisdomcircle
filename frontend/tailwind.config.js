/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
            colors: {
                yellow: "#F1C12B",
                royalBlue: "#2558E5",
                black: "#121317",
                charcoal: "#606880",
                grey: "#404555",
                red: "#D92D20"
            },
            boxShadow: {
                sm: "0 2px 4px 0 rgb(0 0 0 / 0.05)",    
            },
        },
    },
    plugins: [],
};
