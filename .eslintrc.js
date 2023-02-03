module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'airbnb', 'prettier', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    overrides: [
        {
            files: ['src/pages/**/*.tsx', 'src/api/*.ts', 'src/api/**/*.ts'],
            rules: {
                'import/no-unresolved': 'off',
                'react/jsx-props-no-spreading': 'off',
                'react/function-component-definition': 'off',
                'react/require-default-props': 'off',
                'no-undef': 'off',
                'arrow-body-style': 'off',
            },
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        'no-console': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        // '@typescript-eslint/explicit-function-return-type': 'warn', // Consider using explicit annotations for object literals and function return types even when they can be inferred.
        'no-empty': 'warn',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
        'import/no-unresolved': [2, { caseSensitive: false }],
        'import/extensions': [
            1,
            {
                // eslint-disable-next-line no-bitwise
                tsx: 'never',
            },
        ],
    },
};
