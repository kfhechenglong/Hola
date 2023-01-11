module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
        'stylelint-config-standard-vue/scss',
        'stylelint-config-recess-order',
        'stylelint-config-prettier',
    ],
    plugins: ['stylelint-prettier'],
    rules: {
        indentation: 4,
        'prettier/prettier': 4,
    },
}
