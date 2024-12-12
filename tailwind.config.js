/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", // Enable dark mode using the "class" strategy
    theme: {
        extend: {
            colors: {
                "background-color": "var(--background-color)",
                "primary-color": "var(--primary-color)",
                "secondary-color": "var(--secondary-color)",
                "ternary-color": "var(--ternary-color)",
                "text-color": "var(--text-color)",
                "text-color-contrast": "var(--text-color-contrast)",
                "text-secondary-color": "var(--text-secondary-color)",
                "card-background-color": "var(--card-background-color)",
                "border-color": "var(--border-color)",
                "icon-color": "var(--icon-color)",
                bluelight: "var(--bluelight-color)",
                "navbar-color": "var(--navbar-color)",
                "toggle-mode-color": "var(--toggle-mode-color)",
                "mobile-nav": "var(--mobile-nav)",
            },
        },
        fontFamily: {
            sans: "Cairo",
        },
    },
    plugins: [],
};
