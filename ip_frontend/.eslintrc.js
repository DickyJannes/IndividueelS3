/* eslint-disable no-undef */
module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"plugin:react/recommended",
		"eslint:recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 9,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"semi": [
			"error", 
			"always"
		],
		"linebreak-style":0,
		"quotes": [
			"error", 
			"double"
		],
		"indent": [
			"error", 
			"tab"
		],
	}
};
