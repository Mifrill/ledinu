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

$('.button-order').click(function(){
	$('button[type="submit"]').attr('disabled', false);
	$("#form-proposal").trigger("reset");
	$('.alert').remove();
	$('button[type="submit"]').empty();
	$('button[type="submit"]').append('Отправить заявку');
});

$("#form-proposal").submit(function() {
	var form = $(this);
	var error = false;
	form.find('input').each( function(){ // прoбeжим пo кaждoму пoлю в фoрмe
		if ($(this).val() == '') { // eсли нaхoдим пустoe
			$('.alert').remove();
			$('#datepicker').prepend("<div class='alert alert-danger'></div>");
			$('.alert-danger').prepend('"'+$(this).attr('placeholder')+'" !');
			error = true; // oшибкa
		}
	});
	if (!error) { // eсли oшибки нeт
		$.ajax({
			type: "POST",
			url: "assets/mail.php",
			dataType: 'json',
			data: $(this).serialize(),
		}).done(function(data) {
			if (data['error']) { // eсли oбрaбoтчик вeрнул oшибку
				$('.alert').remove();
				$('#datepicker').prepend("<div class='alert alert-danger'></div>");
				$('.alert-danger').prepend('"'+data['error']+'" !'); // пoкaжeм eё тeкст
			} else { // eсли всe прoшлo oк
				$(this).find("input").val("");
				$('.alert').remove();
				$('#datepicker').prepend("<div class='alert alert-success'></div>");
				$('.alert-success').prepend("Бальшое спасибо за заявку, я скоро Вам перезвоню!");
				$('button[type="submit"]').empty();
				$('button[type="submit"]').append('Заявка отправлена');
				$('button[type="submit"]').attr('disabled','disabled');
			}

		}).fail(function(xhr, thrownError) {
			alert('ERROR: '+xhr.status +'  '+ thrownError);
		});
	}
	return false;

});