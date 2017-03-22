module.exports = {
  main: {
    expand: true,
    cwd: 'template/fonts/',
    src: '**',
    dest: 'assets/fonts',
  },
  
  video: {
    expand: true,
    cwd: 'template/video/',
    src: '**',
    dest: 'assets/video',
  },

  uiIcon: {
    expand: true,
    cwd: 'libs/jquery-ui/themes/humanity/images/', 
    src: ['**/*'], 
    dest: 'assets/css/images/',
  },
};