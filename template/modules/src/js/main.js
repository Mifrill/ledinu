$('#sl-video').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 7000,
	arrows: false,
	infinite: true,
});

$('#datepicker').datepicker();

$('#date').change(function(){
	$('#datepicker').datepicker('setDate', $(this).val());
});
$('#datepicker').change(function(){
	$('#date').attr('value',$(this).val());
});

$(".container").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
	$('#scroll-menu>li').removeClass('active');
	$(this.closest('li')).addClass('active');
});

$("#scroll-menu>li>a").click(function(){
	$('.navbar-collapse').removeClass('in');
})

$(function(){
  $(document).click(function(event) {
    if ($(event.target).closest("#scroll-menu>li>a").length) return;
    $('.navbar-collapse').removeClass('in');
    event.stopPropagation();
  });
});

$('.effect-oscar').addClass(':hover');

$('#sl-video .slick-slide').find('video').prop('muted', true);
var video = $('#video-slide .slick-active').find('video').get(0).play();
$('#sl-video').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('#sl-video .slick-slide').find('video').get(0).pause();
    $('#sl-video .slick-active').find('video').get(0).play();
});