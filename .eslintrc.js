module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'plugin:import/recommended',
        'prettier',
        // "plugin:@typescript-eslint/recommended",
    ],
    overrides: [],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint', 'eslint-plugin-import', 'prettier'],
    rules: {
        indent: ['warn', 4],
        'prettier/prettier': 'error',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts', '.jsx'],
            },
        },
    },
}
