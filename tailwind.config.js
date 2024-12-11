/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-color": "#E30613",
                "secondry-color": "#0098A5",
                "ternary-color": "#111619",
                "light-color": "#D0D5DD",
            },
        },
        fontFamily: {
            sans: "Cairo",
        },
    },
    plugins: [],
};
