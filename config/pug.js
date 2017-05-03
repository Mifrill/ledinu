module.exports = {
	compile: {
		options: {
			data: {
				debug: false
			},
			
			pretty: {
				type: true
			}
		},

		files: {
			'template/html/index.html': ['template/html/index.pug']
		}
	}
};
