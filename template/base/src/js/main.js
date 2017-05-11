$(document).ready(function(){

	new WOW().init();

	$.getJSON('assets/data.json', {_: new Date().getTime()}, function(dataJs) {
/* content on page from json file */
		$('#tel-call-id').text(dataJs.content.telcallid);
		$('#scroll-menu>li>a').first().text(dataJs.content.menuMission);
		$('#scroll-menu>li>a:eq(1)').text(dataJs.content.menuEduc);
		$('#scroll-menu>li>a:eq(2)').text(dataJs.content.menuSciense);
		$('#scroll-menu>li>a:eq(3)').text(dataJs.content.menuContacts);
		$('#scroll-menu>li>.btn-primary').last().text(dataJs.content.buttonOrder);

		$('#section-main>h1').text(dataJs.content.sectionMain.H1);
		$('#section-main>p').html(dataJs.content.sectionMain.subtitle);
		$('#grid-effect-layla1>figcaption').html(dataJs.content.sectionMain.grid1);
		$('#grid-effect-layla2>figcaption').html(dataJs.content.sectionMain.grid2);

		$('#my_mission').text(dataJs.content.section_mission.my_mission);
		$('#my_mission_text').text(dataJs.content.section_mission.my_mission_text);
		$('.element-1>p').text(dataJs.content.section_mission.element1);
		$('.element-2>p').text(dataJs.content.section_mission.element2);
		$('.element-3>p').text(dataJs.content.section_mission.element3);
		$('.button-order>.btn-primary').text(dataJs.content.buttonOrder);

		$('.section--intro>h2').text(dataJs.content.sectionIntro.h2);
		$('.section--intro>h3:eq(0)').text(dataJs.content.sectionIntro.h3);
		$('.section--intro>p').text(dataJs.content.sectionIntro.p);
		$('.section--intro>h3:eq(1)').text(dataJs.content.sectionIntro.h3_2);
		$('.section--intro>h3:eq(2)').text(dataJs.content.sectionIntro.h3_3);
		$('#effect-romeo1>figcaption').html(dataJs.content.sectionIntro.romeo1);
		$('#RomeoCityConference>figcaption').html(dataJs.content.sectionIntro.romeo2);

		$('#education>h2:eq(0)').text(dataJs.content.sectionEducation.h2);
		$('#education>h2:eq(1)').text(dataJs.content.sectionEducation.h2_1);
		$('#education>p:eq(0)').text(dataJs.content.sectionEducation.p);
		$('#education>p:eq(1)').text(dataJs.content.sectionEducation.p_1);
		$('#education>p:eq(2)').text(dataJs.content.sectionEducation.p_2);
		$('#education>p:eq(3)').text(dataJs.content.sectionEducation.p_3);
		$('#education>p:eq(4)').text(dataJs.content.sectionEducation.p_4);
		$('#education>p:eq(5)').text(dataJs.content.sectionEducation.p_5);

		$('#effect-oscar1>figcaption').html(dataJs.content.sectionSciense.oscar1);
		$('#effect-oscar2>figcaption').html(dataJs.content.sectionSciense.oscar2);
		$('#sciense>h2').text(dataJs.content.sectionSciense.h2);
		$('#sciense>p:eq(0)').text(dataJs.content.sectionSciense.p);
		$('#sciense>p:eq(1)').text(dataJs.content.sectionSciense.p_1);
		$('#sciense>p:eq(2)').text(dataJs.content.sectionSciense.p_2);
		$('#sciense>p:eq(3)').text(dataJs.content.sectionSciense.p_3);
		$('#sciense>p:eq(4)').text(dataJs.content.sectionSciense.p_4);

		$('#contacts>.container>.row>.text-center>h2').html(dataJs.content.sectionContacs.h2);
		$('#contacts>.container>.row>.text-center>p').text(dataJs.content.sectionContacs.p);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>h3:eq(0)').text(dataJs.content.sectionContacs.boxH3);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>p:eq(0)').text(dataJs.content.sectionContacs.boxP);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>button:eq(0)').text(dataJs.content.sectionContacs.button);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>h3:eq(1)').text(dataJs.content.sectionContacs.boxH3_1);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>p:eq(1)').text(dataJs.content.sectionContacs.boxP_1);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>button:eq(1)').text(dataJs.content.sectionContacs.button_1);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>h3:eq(2)').text(dataJs.content.sectionContacs.boxH3_2);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>p:eq(2)').text(dataJs.content.sectionContacs.boxP_2);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>button:eq(2)').text(dataJs.content.sectionContacs.button_2);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>h3:eq(3)').text(dataJs.content.sectionContacs.boxH3_3);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>p:eq(3)').text(dataJs.content.sectionContacs.boxP_3);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>button:eq(3)').text(dataJs.content.sectionContacs.button_3);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>h3:eq(4)').text(dataJs.content.sectionContacs.boxH3_4);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>p:eq(4)').text(dataJs.content.sectionContacs.boxP_4);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>button:eq(4)').text(dataJs.content.sectionContacs.button_4);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>h3:eq(5)').text(dataJs.content.sectionContacs.boxH3_5);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>p:eq(5)').text(dataJs.content.sectionContacs.boxP_5);
		$('#contacts>.container>.row>.highlight-boxes>.col-md-4>.text-center>button:eq(5)').text(dataJs.content.sectionContacs.button_5);

		$('.modal-title:eq(0)').text(dataJs.content.modal.date.h4);
		$('#form-proposal>button').text(dataJs.content.modal.date.h4);
		$('.modal-title:eq(1)').text(dataJs.content.modal.news.h4);
		$('.modal-title:eq(2)').text(dataJs.content.modal.problemOfActivity.h4);
		$('.modal-title:eq(3)').text(dataJs.content.modal.new_of_education.h4);
		$('.modal-title:eq(4)').text(dataJs.content.modal.disscusChildHealth.h4);
		$('.modal-title:eq(5)').text(dataJs.content.modal.InfoCenter.h4);
		$('.modal-title:eq(6)').text(dataJs.content.modal.masterClass.h4);
		$('#masterClassNav>li>a:eq(0)').text(dataJs.content.modal.masterClass.lia);
		$('#masterClassNav>li>a:eq(1)').text(dataJs.content.modal.masterClass.lia_1);
		$('#masterClassNav>li>a:eq(2)').text(dataJs.content.modal.masterClass.lia_2);
		$('#masterClassNav>li>a:eq(3)').text(dataJs.content.modal.masterClass.lia_3);
		$('#masterClassNav>li>a:eq(4)').text(dataJs.content.modal.masterClass.lia_4);
		$('.modal-title:eq(7)').text(dataJs.content.modal.conference.h4);
		$('#confClassNav>li>a:eq(0)').text(dataJs.content.modal.conference.lia);
		$('#confClassNav>li>a:eq(1)').text(dataJs.content.modal.conference.lia_1);
		$('#confClassNav>li>a:eq(2)').text(dataJs.content.modal.conference.lia_2);
		$('.modal-title:eq(8)').text(dataJs.content.modal.articles.h4);
		$('#articlesNav>li>a').text(dataJs.content.modal.articles.ahref);
		$('#articlePerspecitveVideo').text(dataJs.content.modal.articles.reportage);
		$('.modal-title:eq(9)').text(dataJs.content.modal.presentations.h4);
		$('#presentationsNav>li>a:eq(0)').text(dataJs.content.modal.presentations.lia);
		$('#presentationsNav>li>a:eq(1)').text(dataJs.content.modal.presentations.lia_1);
		$('.modal-title:eq(10)').text(dataJs.content.modal.social.h4);

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


		$('#datepicker').datepicker({
			dateFormat: "dd-mm-yy",
			minDate: 0,
			maxDate: dataJs.EndFutureDate,
			beforeShowDay: disableDays,
			onSelect: function(date) {
/* Destroy timepicker in queue !important */
				$('#time').val('');
				$('.alert-danger').remove();
				$('input.timepicker').queue(function (next) {
					//$( "#date" ).change();
					$('input.timepicker').timepicker('destroy');

					next();
				});
/* validation day if need to changed time in Timepicker */
				if(moment($(this).val(), "DD-MM-YYYY").format("d") == 6){
					CustomEndTime = dataJs.EndTimeSatarday;
					CustomStartTime = dataJs.StartTimeSatarday;
				}else{
					CustomEndTime = dataJs.EndTime;
					CustomStartTime = dataJs.StartTime;
				}

				$('#time').data({ time : CustomStartTime, endTime: CustomEndTime });

				/* Time Picker init again with new parameters*/	

				setTimeout(function() {
					$('input.timepicker').timepicker({
						minTime: $('#time').data('time'),
						maxHour: $('#time').data('endTime'),
					});
					$('#time').attr('type','');

				}, 100);
				$('#date').attr('value',$(this).val());
				
			},
			//showButtonPanel: true,
			//currentText: dataJs.InputPickTime,

		});
/* each for check busy date and time from json data file */
		$('input.timepicker').click(function(){
/* if client choose sunday anyway */
			if(moment($('#date').val(), "DD-MM-YYYY").format("d") == 0){
				$('.ui-timepicker-viewport>li').remove();
			}else{
				$.each(dataJs.BookedOutTime, function( time, arrayDate ) {
					$.each(this, function( index, dateValue ) {
						if($('#date').val() == dateValue){
							$('.ui-timepicker-viewport>li>a:contains('+time+')').parent().remove()
						}
					});
				});
			}
		});

/*		
		$('#date').change(function(){
			delete CustomEndTime;
			delete CustomStartTime;

		});
*/

/* Override method GotoToday */
/*
		$.datepicker._gotoToday = function(){
			
		};
*/

	});
});
