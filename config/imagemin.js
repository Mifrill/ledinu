module.exports = {
	dynamic: {
		files: [{
			expand: true,
			cwd: 'template/media/img/',
			src: ['**/*.{png,jpg,gif}'],
			dest: 'assets/img/' 
		}]
	}
}
