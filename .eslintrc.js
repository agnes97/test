'use strict'

/** @type {import("eslint").Linter.Config} */
module.exports = {
	reportUnusedDisableDirectives: true,
	extends: ['eslint:recommended'],
	env: {
		node: true,
	},
	overrides: [
		{
			files: ['**/*.ts'],
			env: {
				browser: true,
				es2021: true,
			},
			extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			plugins: ['@typescript-eslint'],
		},
		{
			files: ['**/*.tsx'],
			env: {
				browser: true,
				es2021: true,
			},
			extends: [
				'eslint:recommended',
				'plugin:react/recommended',
				'plugin:@typescript-eslint/recommended',
			],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			plugins: ['react', '@typescript-eslint'],
			settings: {
				react: {
					version: 'detect',
				},
			},
		},
	],
}
