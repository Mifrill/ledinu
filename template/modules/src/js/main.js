/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
( function( factory ) {

	factory( jQuery.datepicker );

}( function( datepicker ) {

datepicker.regional.ru = {
	closeText: "Закрыть",
	prevText: "&#x3C;Пред",
	nextText: "След&#x3E;",
	currentText: "Сегодня",
	monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
	"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
	monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
	"Июл","Авг","Сен","Окт","Ноя","Дек" ],
	dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
	dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
	dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
	weekHeader: "Нед",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.ru );

return datepicker.regional.ru;

} ) );


$('#date').change(function(){
	$('#datepicker').datepicker('setDate', $(this).val());
});
$('#datepicker').change(function(){
	$('#date').attr('value',$(this).val());
});
$('#sl-video').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 7000,
	arrows: false,
	infinite: true,
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

/*

$('.button-order').click(function(){
	$('button[type="submit"]').attr('disabled', false);
	$("#form-proposal").trigger("reset");
	$('.alert').remove();
	$('button[type="submit"]').empty();
	$('button[type="submit"]').append('Отправить заявку');
});

*/
