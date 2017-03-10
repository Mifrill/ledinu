$('.sl-slide-video').slick({
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