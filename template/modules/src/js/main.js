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

$('#datepicker').datepicker({
	dateFormat: "dd-mm-yy",
	minDate: 0,
	maxDate: "+2m +1w +3d",
	beforeShowDay: function(date) {
		var day = date.getDay();
		return [(day != 0)]; /* && day != 2 */
	}
});

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

$("#form-proposal").submit(function() {
	var form = $(this);
	var error = false;

/* validation on client side */
	form.find('input').each( function(){ // прoбeжим пo кaждoму пoлю в фoрмe
		if ($(this).val() == '') { // eсли нaхoдим пустoe
			$('.alert').remove();
			$('#datepicker').prepend("<div class='alert alert-danger'></div>");
			$('.alert-danger').prepend('"'+$(this).attr('placeholder')+'" !');
			error = true; // oшибкa
		}
	});
/* ajax if No error */
	if (!error) {
		$.ajax({
			type: "POST",
			url: "assets/mail.php",
			dataType: 'json',
			data: $(this).serialize(),
		}).done(function(data) {
			if (data['error']) { // if php script get error on server side
				$('.alert').remove();
				$('#datepicker').prepend("<div class='alert alert-warning'></div>");
				$('.alert-warning').prepend('"'+data['error']+'" !'); // show error from placeholder
			} else { // if no error from server side
				//$(this).find("input").val("");
				$('.alert').remove();
				$('#datepicker').prepend("<div class='alert alert-success'></div>");
				$('.alert-success').prepend("Бальшое спасибо за заявку, я скоро Вам перезвоню!");
				$('button[type="submit"]').empty();
				$('button[type="submit"]').append('Заявка отправлена');
				$('button[type="submit"]').attr('disabled','disabled');
			}
/* if spicify error from server */
		}).fail(function(xhr, thrownError) {
			$('.alert').remove();
			$('#datepicker').prepend("<div class='alert alert-danger'></div>");
			$('.alert-danger').prepend('SERVER ERROR: '+xhr.status +'  '+ thrownError);
		});
	}
	return false;

});
	var CustomStartTime = '17:00';
	var CustomEndTime = '20';

$('input.timepicker').timepicker({
	minTime: CustomStartTime,
	maxHour: CustomEndTime,


}, console.log($.TimePicker.prototype.open)
);
