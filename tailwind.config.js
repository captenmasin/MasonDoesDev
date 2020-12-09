module.exports = {
    purge: [],
    darkMode: false,
    theme: {
        aspectRatio: {
            'none': 0,
            'square': [1, 1],
            '16/9': [16, 9],
            '4/3': [4, 3],
            '21/9': [21, 9],
        },
        extend: {
            fontFamily: {
                heading: ["Widebody Sans", "sans-serif"],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwindcss-aspect-ratio'),
    ],
    corePlugins: {
        // ...
        container: false,
    }
}
