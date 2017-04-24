module.exports = {
  main: {
    expand: true,
    cwd: 'template/fonts/',
    src: '**',
    dest: 'assets/fonts',
  },
  
  video: {
    expand: true,
    cwd: 'template/media/video/',
    src: '**',
    dest: 'assets/video',
  },

  pdf: {
    expand: true,
    cwd: 'template/media/pdf/',
    src: '**',
    dest: 'assets/pdf',
  },

  uiIcon: {
    expand: true,
    cwd: 'libs/jquery-ui/themes/humanity/images/', 
    src: ['**/*'], 
    dest: 'assets/css/images/',
  },
};