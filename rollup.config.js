
export default [
	{
		input: 'src/js/server.js',
		output: {
			name: 'serverBundle',
			file: 'server.js',
			format: 'umd'
		}		
	},
	{
		input: 'src/js/scripts.js',
		output: {
			name: 'scripts',
			file: 'www/js/scripts.js',
			format: 'umd',
			sourcemap: true
		}		
	}
];