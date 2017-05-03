module.exports = {
    dev:{
    	bsFiles: {
        	src : [
				'assets/*.*',
                'libs/**/*.*',
				'./*.php'
        	]
   		},
    	options: {
            watchTask: true,
            proxy: '127.0.0.1:8010', //our PHP server
            port: 3080, // our new port
            open: true,
    	}
    }
};
