module.exports = {
    root: true,
    extends: [
        '@nuxt/eslint-config',     // Nuxt recommended rules
        'plugin:prettier/recommended' // Integrates Prettier
    ],
    rules: {
        'vue/multi-word-component-names': 'off', // Nuxt often uses single-word pages
        'prettier/prettier': 'error'
    }
}
