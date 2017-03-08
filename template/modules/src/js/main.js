$('.sl-slide-news').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	infinite: true,
	pauseOnHover: true,
});

$('#datepicker').datepicker();

$('#date').change(function(){
	$('#datepicker').datepicker('setDate', $(this).val());
});
$('#datepicker').change(function(){
	$('#date').attr('value',$(this).val());
});

$("#scroll-menu").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
});

