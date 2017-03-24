var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

/* correct pre-load images */
$(function () {
  $('img[data-src]').each(function () {
    var image = $(this);

    image.attr({
      src: image.data('src')
    }).removeAttr('data-src');

    if (!image.get(0).complete) {
      image.parent().addClass('loading');
      image.bind('load', function () {
        $(this).unbind('load').parent().removeClass('loading');
      });
    }
  });
});
