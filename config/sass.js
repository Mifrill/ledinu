const sass = require('node-sass');
module.exports = {
    options: {
        implementation: sass,
        sourceMap: true
    },
    dist: {
        files: {
          'assets/css/main.css' : 'template/scss/main.sass'
        }
    },
};
