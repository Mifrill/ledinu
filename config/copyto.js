module.exports = {
  stuff: {
    files: [
      {cwd: 'template/media/img/additional/', src: ['**/*'], dest: 'assets/img/additional/', expand: true},
      {cwd: 'template/css/', src: ['**/*'], dest: 'assets/css/', expand: true},
      {cwd: 'template/php/', src: ['**/*'], dest: 'assets/', expand: true},
      {cwd: 'template/', src: ['data.json'], dest: 'assets/', expand: true},
    ],
    options: {
      processContent: function(content, path) {
        return content;
      },
    }
  },

  libs: {
    files: [
      {cwd: 'libs/bootstrap/dist/css/', src: ['bootstrap.min.css'], dest: 'assets/css/', expand: true},
      {cwd: 'libs/jquery-ui/themes/humanity/', src: ['jquery-ui.min.css'], dest: 'assets/css/', expand: true},
      {cwd: 'libs/slick-carousel/slick/', src: ['slick.css'], dest: 'assets/css/', expand: true},
      {cwd: 'libs/animate.css/', src: ['animate.min.css'], dest: 'assets/css/', expand: true},

      {cwd: 'libs/jquery/dist/', src: ['jquery.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/jquery-ui/', src: ['jquery-ui.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/bootstrap/dist/js/', src: ['bootstrap.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/wow/dist/', src: ['wow.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/slick-carousel/slick/', src: ['slick.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/imagesloaded/', src: ['imagesloaded.pkgd.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/masonry/dist/', src: ['masonry.pkgd.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/dynamics.js/lib/', src: ['dynamics.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/typed.js/dist/', src: ['typed.min.js'], dest: 'assets/js/', expand: true},
    ],
    options: {
      processContent: function(content, path) {
        return content;
      },
    }
  }
};