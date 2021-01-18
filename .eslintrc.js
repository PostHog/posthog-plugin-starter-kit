module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['plugin:@typescript-eslint/recommended'],
    ignorePatterns: ['bin', 'dist', 'node_modules'],
    rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        curly: 'error',
    },
}
