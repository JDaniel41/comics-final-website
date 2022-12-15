/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                aguefort: "url(assets/hero_background.png)",
            },
            colors: {
                navbar: "#f6e5cc",
            },
        },
    },
    plugins: [],
};
