$(document).ready(function(){
	new WOW().init();

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

	if(isMobile.any()){
		console.log('mobile');
	}

	if (document.body.clientWidth <= '992'){
		console.log('992px');
	}

	$(window).scroll(function() {
		var top = $(document).scrollTop();


	});
});
