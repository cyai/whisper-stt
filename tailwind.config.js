/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#783BFE",
                background: "#FBF9FE",
                text: "#1D1827",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Merriweather", "serif"],
            },
            fontSize: {
                base: "16px",
            },
            fontWeight: {
                normal: 400,
            },
            letterSpacing: {
                normal: "0%",
            },
        },
    },
    plugins: [],
};
