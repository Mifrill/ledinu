module.exports = {
    banner: {
        options: {
            banner: '/* My minified CSS */'
        },
        files: {
            'assets/css/main.min.css' : ['assets/css/main.css', 'assets/css/sprites.css', 'assets/fonts/fonts.css']
        }
    },
    /* if necessary */
    libs: {
        files: {
            'assets/css/libs.min.css' : ['assets/css/slick.css']
        }
    }
}