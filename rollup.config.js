import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from "@rollup/plugin-babel";


export default [
	// browser-friendly UMD build
	{
		input: 'src/main.js',
		output: {
			name: 'cslice',
			file: pkg.main_used,
			format: 'iife'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			babel({
			  exclude: "node_modules/**"
			}),
			commonjs(), // so Rollup can convert `ms` to an ES module
			babel({
			  exclude: "node_modules/**"
			})
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	
	// cjs - Common JS (using global.exports to facilitate exporting)
	// es  - ES modules (use import export statement)
	// umd - Universal Module Definition
	
	// ES importing exporting:
	//  import <default>, {<other named exports>} from "<file>", e.g.:
	// 	import A, {B, C} from "abc.js"
	
	{
		input: 'src/main.js',
		output: [
			{ file: pkg.browser, format: 'umd', name: "cslice" },
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
