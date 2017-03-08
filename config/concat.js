module.exports = {
  dist: {
    src: [
      'template/base/src/js/*.js', 
      'template/modules/src/js/*.js', 
      'template/pages/src/js/*.js',
    ],
    dest: 'assets/js/build.js'
  },
  libsJs: {
    src: [
      /* important sequence */
      'assets/js/jquery.min.js',
      'assets/js/jquery-ui.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/wow.min.js',
      'assets/js/slick.min.js',
      'assets/js/imagesloaded.pkgd.min.js',
      'assets/js/masonry.pkgd.min.js',
      'assets/js/dynamics.min.js',
      'assets/js/typed.min.js',

      /* custom js */
      'assets/js/build.min.js'
    ],
    dest: 'assets/js/all.min.js'
  },
  libsCss: {
    src: [
      'assets/css/*.min.css'
    ],
    dest: 'assets/css/all.min.css'
  }
};