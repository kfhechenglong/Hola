module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "plugin:import/recommended"
        // "plugin:@typescript-eslint/recommended",
    ],
    overrides: [],
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "vue",
        "@typescript-eslint",
        "eslint-plugin-import"
    ],
    rules: {
        indent: ["warn", 4],
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".ts", ".jsx"]
            }
        }
    }
};
