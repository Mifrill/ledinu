$(document).ready(function(){
	new WOW().init();

	$.getJSON('assets/data.json', function(dataJs) {

/* for validation on W3C add placeholder by JavaScript */
		$('#date').attr('placeholder', dataJs.InputPickDate);
		$('#time').attr('placeholder', dataJs.InputPickTime);
/* for images decorations */
		(function() {
			function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			new IsoGrid(document.querySelector('.isolayer--deco1'), {
				transform : 'translateX(30vw) translateY(-60px) rotateX(45deg) rotateZ(45deg)',
				stackItemsAnimation : {
					properties : function(pos) {
						return {
							translateZ: (pos+1) * 50,

							rotateY: pos * 15,
							rotateZ: getRandomInt(-4, 4)
						};
					},
					options : function(pos, itemstotal) {
						return {
							type: dynamics.bezier,
							duration: 500,
							points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
							delay: (itemstotal-pos-1)*40
						};
					}
				}
			});
			
			new IsoGrid(document.querySelector('.isolayer--deco2'), {
				perspective: 3000,
				transform : 'translateY(-150px) rotateX(55deg) rotateZ(-45deg)',
				stackItemsAnimation : {
					properties : function(pos) {
						return {
							translateX: getRandomInt(-60, 60),
							translateY: getRandomInt(-60, 60),
							rotateZ: getRandomInt(-10, 10)
						};
					},
					options : function(pos, itemstotal) {
						return {
							type: dynamics.bezier,
							duration: 800,
							points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
							delay: (itemstotal-pos-1)*20
						};
					}
				}
			});
			
			new IsoGrid(document.querySelector('.isolayer--deco3'), {
				transform : 'translateX(40vw) translateY(100px) rotateX(15deg) rotateY(0) rotateZ(40deg)',
				stackItemsAnimation : {
					properties : function(pos) {
						return {
							rotateY: pos * -15
						};
					},
					options : function(pos, itemstotal) {
						return {
							type: dynamics.bezier,
							duration: 500,
							points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
							delay: (itemstotal-pos-1)*40
						};
					}
				}
			});
			
			new IsoGrid(document.querySelector('.isolayer--deco4'), {
				perspective: 3000,
				transform : 'translate3d(-200px,-200px,0) scale3d(0.8,0.8,1) rotateY(45deg) rotateZ(-10deg)',
				stackItemsAnimation : {
					properties : function(pos) {
						return {
							rotateX: (pos+1) * -15
						};
					},
					options : function(pos, itemstotal) {
						return {
							type: dynamics.spring,
							delay: (itemstotal-pos-1)*30
						};
					}
				},
				onGridLoaded : function() {
					classie.add(document.body, 'grid-loaded');
				}
			});
		})();
/* ------------------------  Section portfolio_start --------------------- */
		$(function(){
			var myArray = ["1", "2", "3"];
			$.each(myArray, function(value){
				$( $(".flex-element").eq(value) ).hover(

					function(){
						if ($('#mission>.button-order').length) {
							$( $(".flex-element").eq(value) ).append( $('#mission>.button-order') );
						}
						$( $(".flex-element").eq(value) ).append( $('.flex-element>.button-order') );

					},
/* correct tranfer form/to */
					function(){
						if ($('.element-1>.button-order').length) {
							$('.flex-element>.button-order').addClass("order-back")
						}
						if ($('.element-2>.button-order').length) {
							$('.flex-element>.button-order').removeClass( "order-forw" );
						}
						if ($('.element-3>.button-order').length) {
							$('.flex-element>.button-order').toggleClass("order-back order-forw")
						}

					}
				)
			});
		});
/* button comming back */
		$(function(){
			$(':button').click(function(){
				$( ".flex-element>.button-order" ).removeClass( "order-back order-forw" );
				$('#mission').append( $('.flex-element>.button-order') );
			})
		});

		$('#video').mouseover(
			function(){
				$( ".flex-element>.button-order" ).last().removeClass( "order-back order-forw" );
				$('#mission').append( $('.flex-element>.button-order') );
			}
		);
		$('.section--intro').mouseover(
			function(){
				$( ".flex-element>.button-order" ).last().removeClass( "order-back order-forw" );
				$('#mission').append( $('.flex-element>.button-order') );

			}
		);
/* video slider autoRun Video */
		$('#sl-video .slick-slide').find('video').prop('muted', true);
		var video = $('#video-slide .slick-active').find('video').get(0).play();

		$('#sl-video').on('afterChange', function(event, slick, currentSlide, nextSlide){
	    	$('#sl-video .slick-slide').find('video').get(0).pause();
	    	var video = $('#sl-video .slick-active').find('video').get(0).play();
		});

/* script from bootstrap for Spying menu scroll */
		$('body').scrollspy({ target: '.navbar-collapse' });
		$('[data-spy="scroll"]').each(function () {
	  		var $spy = $(this).scrollspy('refresh')
		});

		if(isMobile.any()){
			console.log('mobile');
		}

		if (document.body.clientWidth <= '992'){
			console.log('992px');
		}

		$(window).scroll(function() {
			var top = $(document).scrollTop();
		});
/* Ajax Form for consultations */
		$("#form-proposal").submit(function() {
			var form = $(this);
			var error = false;

/* validation on client side */
			form.find('input').each( function(){ // прoбeжим пo кaждoму пoлю в фoрмe
				if ($(this).val() == '') { // eсли нaхoдим пустoe
					$('.alert').remove();
					$('#datepicker').prepend("<div class='alert alert-warning'></div>");
					$('.alert-warning').prepend('"'+$(this).attr('placeholder')+'" !');
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
						$('#datepicker').prepend("<div class='alert alert-danger'></div>");
						$('.alert-danger').prepend('"'+data['error']+'" !'); // show error from placeholder
					} else { // if no error from server side
						//$(this).find("input").val("");
						$('.alert').remove();
						$('#datepicker').prepend("<div class='alert alert-success'></div>");
						$('.alert-success').prepend(dataJs.ThankYou);
						$('button[type="submit"]').empty();
						$('button[type="submit"]').append(dataJs.BidSend);
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

/* function for date picker */
		var disableDates = dataJs.BookedOutDates;

		function disableSunday (date) {
			var day = date.getDay();
			return [(day != 0)]; 
		};
		function disableDays(date) {

			if($.inArray($.datepicker.formatDate('dd-mm-yy', date ), disableDates) > -1){
				return [false,"","Booked out"];
			}
			else{
				return disableSunday(date);
			}
				
		};
		$('.button-order').click(function(){
			$('#datepicker').datepicker({
				dateFormat: "dd-mm-yy",
				minDate: 0,
				maxDate: "+2m +3w +1d",
				beforeShowDay: disableDays,
	/*			onSelect: function(){
					console.log(123);
				},*/
			});
		});
/* Time Picker */
		
		var CustomEndTime = dataJs.EndTime;
		var CustomStartTime = dataJs.StartTime;
		$('input.timepicker').timepicker({
/*			defaultTime: '17:00',*/
			minTime: CustomStartTime,
			maxHour: CustomEndTime,
		}, console.log($.TimePicker.methods)
		);

	});
});
