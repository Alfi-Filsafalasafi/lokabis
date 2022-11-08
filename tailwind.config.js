const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            }
        },
        colors: {
            primary: "#8B218F",
            secondary: "#F99D1C",
            muted: "rgba(122, 27, 125, 0.1)",
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
            center: true,
        },
    },

    plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
