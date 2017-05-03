module.exports = {
	options: {
		browsers: ['last 2 versions', 'ie 8', 'ie 9']
	},
	multiple_files: {
		expand: true,
		flatten: true,
		src: 'assets/css/*.css',
		dest: 'assets/css/'
	},
};
