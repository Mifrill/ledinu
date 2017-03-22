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


/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-prefixed-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var f in C)if(C.hasOwnProperty(f)){if(e=[],n=C[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function i(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?w.className.baseVal=n:w.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?l(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=f(x?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,a,l,u="modernizr",p=f("div"),c=d();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return i=f("style"),i.type="text/css",i.id="s"+u,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=l,w.offsetHeight):p.parentNode.removeChild(p),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,i){function l(){p&&(delete z.style,delete z.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var p,d,c,v,h,y=["modernizr","tspan","samp"];!z.style&&y.length;)p=!0,z.modElem=f(y.shift()),z.style=z.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=z.style[v],a(v,"-")&&(v=s(v)),z.style[v]!==t){if(i||r(o,"undefined"))return l(),"pfx"==n?v:!0;try{z.style[v]=o}catch(g){}if(z.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+N.join(s+" ")+s).split(" "),u(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],C=[],_={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr;var w=n.documentElement,x="svg"===w.nodeName.toLowerCase(),S="Moz O ms Webkit",b=_._config.usePrefixes?S.split(" "):[];_._cssomPrefixes=b;var E=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+n}return!1};_.atRule=E;var N=_._config.usePrefixes?S.toLowerCase().split(" "):[];_._domPrefixes=N;var P={elem:f("modernizr")};Modernizr._q.push(function(){delete P.elem});var z={style:P.elem.style};Modernizr._q.unshift(function(){delete z.style}),_.testAllProps=h;_.prefixed=function(e,n,t){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=s(e)),n?h(e,n,t):h(e,"pfx"))};_.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),o(),i(g),delete _.addTest,delete _.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
/**
 * "loading" effects for grids from/based on: http://tympanus.net/codrops/2013/07/02/loading-effects-for-grid-items-with-css-animations/ (Check it out for more examples and effects)
 * 
 * animOnScroll.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	var docElem = window.document.documentElement;

	// some helper functions
	function scrollY() { return window.pageYOffset || docElem.scrollTop; }

	function getViewportH() {
		var client = docElem['clientHeight'],
			inner = window['innerHeight'];
		
		if( client < inner )
			return inner;
		else
			return client;
	}

	// http://stackoverflow.com/a/5598797/989439
	function getOffset( el ) {
		var offsetTop = 0, offsetLeft = 0;
		do {
			if ( !isNaN( el.offsetTop ) ) {
				offsetTop += el.offsetTop;
			}
			if ( !isNaN( el.offsetLeft ) ) {
				offsetLeft += el.offsetLeft;
			}
		} while( el = el.offsetParent )

		return {
			top : offsetTop,
			left : offsetLeft
		}
	}

	function inViewport( el, h ) {
		var elH = el.offsetHeight,
			scrolled = scrollY(),
			viewed = scrolled + getViewportH(),
			elTop = getOffset(el).top,
			elBottom = elTop + elH,
			// if 0, the element is considered in the viewport as soon as it enters.
			// if 1, the element is considered in the viewport only when it's fully inside
			// value in percentage (1 >= h >= 0)
			h = h || 0;

		return (elTop + elH * h) <= viewed;// && (elBottom - elH * h) >= scrolled;
	}

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	var support = { animations : Modernizr.cssanimations },
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		onEndAnimation = function( el, callback ) {
			var onEndCallbackFn = function( ev ) {
				if( support.animations ) {
					if( ev.target != this ) return;
					this.removeEventListener( animEndEventName, onEndCallbackFn );
				}
				if( callback && typeof callback === 'function' ) { callback.call(); }
			};
			if( support.animations ) {
				el.addEventListener( animEndEventName, onEndCallbackFn );
			}
			else {
				onEndCallbackFn();
			}
		};

	function AnimOnScroll(el, options) {	
		this.el = el;
		this.options = extend( this.defaults, options );
		this._init();
	}

	AnimOnScroll.prototype = {
		defaults : {
			// Minimum and a maximum duration of the animation (a random value is chosen)
			minDuration : 0,
			maxDuration : 0,
			// The viewportFactor defines how much of the item has to be visible in order to trigger the animation
			// if we'd use a value of 0, this would mean that it would trigger the animation as soon as the item is in the viewport. 
			// If we were to use the value of 1, the animation would only be triggered when we see all of the item inside the viewport.
			viewportFactor : 0.2
		},
		_init : function() {
			var self = this;

			this.items = [].slice.call(this.el.children);
			this.itemsCount = this.items.length;
			this.itemsRenderedCount = 0;
			this.didScroll = false;
			
			// the items already shown...
			this.items.forEach( function( el, i ) {
				if( inViewport( el ) ) {
					self._checkTotalRendered();
					classie.add( el, 'shown' );
				}
			} );

			// animate the items inside the viewport on scroll
			window.addEventListener( 'scroll', function() {
				self._onScrollFn();
			}, false );
			window.addEventListener( 'resize', function() {
				self._resizeHandler();
			}, false );
		},
		_onScrollFn : function() {
			var self = this;
			if( !this.didScroll ) {
				this.didScroll = true;
				setTimeout( function() { self._scrollPage(); }, 60 );
			}
		},
		_scrollPage : function() {
			var self = this;
			this.items.forEach( function( el, i ) {
				if( !classie.has( el, 'shown' ) && !classie.has( el, 'animate' ) && inViewport( el, self.options.viewportFactor ) ) {
					setTimeout( function() {
						self._checkTotalRendered();

						if( self.options.minDuration && self.options.maxDuration ) {
							var randDuration = ( Math.random() * ( self.options.maxDuration - self.options.minDuration ) + self.options.minDuration ) + 's';
							el.style.WebkitAnimationDuration = randDuration;
							el.style.MozAnimationDuration = randDuration;
							el.style.animationDuration = randDuration;
						}
						
						classie.add( el, 'animate' );
						onEndAnimation(el, function() {
							classie.add( el, 'shown' );
							classie.remove( el, 'animate' );
						});
					}, 25 );
				}
			});
			this.didScroll = false;
		},
		_resizeHandler : function() {
			var self = this;
			function delayed() {
				self._scrollPage();
				self.resizeTimeout = null;
			}
			if ( this.resizeTimeout ) {
				clearTimeout( this.resizeTimeout );
			}
			this.resizeTimeout = setTimeout( delayed, 100 );
		},
		_checkTotalRendered : function() {
			++this.itemsRenderedCount;
			if( this.itemsRenderedCount === this.itemsCount ) {
				window.removeEventListener( 'scroll', this._onScrollFn );
			}
		}
	}

	window.AnimOnScroll = AnimOnScroll;

})(window);
/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );
/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	// from: http://stackoverflow.com/a/21913575
	function getComputedTranslateY(obj) {
		if(!window.getComputedStyle) return;
		var style = getComputedStyle(obj),
			transform = style.transform || style.webkitTransform || style.mozTransform;
		var mat = transform.match(/^matrix3d\((.+)\)$/);
		if(mat) return parseFloat(mat[1].split(', ')[13]);
		mat = transform.match(/^matrix\((.+)\)$/);
		return mat ? parseFloat(mat[1].split(', ')[5]) : 0;
	}

	/**********************************************/
	/** https://gist.github.com/desandro/1866474 **/
	/**********************************************/
	var lastTime = 0;
	var prefixes = 'webkit moz ms o'.split(' ');
	// get unprefixed rAF and cAF, if present
	var requestAnimationFrame = window.requestAnimationFrame;
	var cancelAnimationFrame = window.cancelAnimationFrame;
	// loop through vendor prefixes and get prefixed rAF and cAF
	var prefix;
	for( var i = 0; i < prefixes.length; i++ ) {
		if ( requestAnimationFrame && cancelAnimationFrame ) {
			break;
		}
		prefix = prefixes[i];
		requestAnimationFrame = requestAnimationFrame || window[ prefix + 'RequestAnimationFrame' ];
		cancelAnimationFrame  = cancelAnimationFrame  || window[ prefix + 'CancelAnimationFrame' ] ||
		window[ prefix + 'CancelRequestAnimationFrame' ];
	}

	// fallback to setTimeout and clearTimeout if either request/cancel is not supported
	if ( !requestAnimationFrame || !cancelAnimationFrame ) {
		requestAnimationFrame = function( callback, element ) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
			var id = window.setTimeout( function() {
				callback( currTime + timeToCall );
			}, timeToCall );
			lastTime = currTime + timeToCall;
			return id;
		};

		cancelAnimationFrame = function( id ) {
			window.clearTimeout( id );
		};
	}
	/**********************************************/
	/** https://gist.github.com/desandro/1866474 **/
	/**********************************************/

	var docElem = window.document.documentElement;
	
	// some helper functions
	function scrollY() { return window.pageYOffset || docElem.scrollTop; }
	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}
	
	/**
	 * Isometric grid obj
	 */
	function IsoGrid(el, options) {
		this.isolayerEl = el;
		
		this.options = extend( {}, this.options );
		extend( this.options, options );

		this.gridEl = this.isolayerEl.querySelector('.grid');

		// grid items
		this.gridItems = [].slice.call(this.gridEl.querySelectorAll('.grid__item'));
		this.gridItemsTotal = this.gridItems.length;
		
		this.didscroll = false;

		this._init();
	}

	IsoGrid.prototype.options = {
		// static or scrollable
		type: 'static',
		// grid perspective value
		perspective: 0,
		// grid transform
		transform: '',
		// each grid item animation (for the subitems)
		stackItemsAnimation : {
			// this follows the dynamics.js (https://github.com/michaelvillar/dynamics.js) animate fn syntax
			// properties (pos is the current subitem position)
			properties : function(pos) {
				return {
					translateZ: (pos+1) * 50
				};
			},
			// animation options (pos is the current subitem position); itemstotal is the total number of subitems
			options : function(pos, itemstotal) {
				return {
					type: dynamics.bezier,
					duration: 500,
					points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}]
				};
			}
		},
		// callback for loaded grid
		onGridLoaded : function() { return false; }	
	};

	IsoGrid.prototype._init = function() {
		var self = this;

		imagesLoaded(this.gridEl, function() {
			// initialize masonry
			self.msnry = new Masonry(self.gridEl, {
				itemSelector: '.grid__item',
				isFitWidth : true
			});
			
			// the isolayer div element will be positioned fixed and will have a transformation based on the values defined in the HTML (data-attrs for the isolayer div element)
			if( self.options.type === 'scrollable' ) {
				self.isolayerEl.style.position = 'fixed';	
			}
			
			self.isolayerEl.style.WebkitTransformStyle = self.isolayerEl.style.transformStyle = 'preserve-3d';

			var transformValue = self.options.perspective != 0 ? 'perspective(' + self.options.perspective + 'px) ' + self.options.transform : self.options.transform;
			self.isolayerEl.style.WebkitTransform = self.isolayerEl.style.transform = transformValue;
			
			// create the div element that will force the height for scrolling
			if( self.options.type === 'scrollable' ) {
				self._createPseudoScroller();
			}
			
			// init/bind events
			self._initEvents();

			// effects for loading grid elements:
			if( self.options.type === 'scrollable' ) {
				new AnimOnScroll(self.gridEl, {
					minDuration : 1,
					maxDuration : 1.2,
					viewportFactor : 0
				});
			}

			// grid is "loaded" (all images are loaded)
			self.options.onGridLoaded();
			classie.add(self.gridEl, 'grid--loaded');
		});
	};

	/**
	 * Creates the div element that will force the height for scrolling
	 */
	IsoGrid.prototype._createPseudoScroller = function() {
		// element that will force the height for scrolling
		this.pseudoScrollerEl = document.createElement('div');
		this.pseudoScrollerEl.className = 'pseudo-scroller';
		// insert it inside the main container (same level of isolayerEl)
		this.isolayerEl.parentNode.insertBefore(this.pseudoScrollerEl, this.isolayerEl);
		// set the height of the pseudoScroller (grid´s height + additional space between the top of the rotated isolayerEl and the page - value set for the translation on the Y axis)
		this.pseudoScrollerEl.style.height = this.gridEl.offsetHeight + getComputedTranslateY(this.isolayerEl) * Math.sqrt(2) + 'px';	
	};

	/**
	 * Initialize/Bind events fn.
	 */
	IsoGrid.prototype._initEvents = function() {
		var self = this;

		var scrollHandler = function() {
				requestAnimationFrame(function() {
					if (!self.didscroll) {
						self.didscroll = true;
						self._scrollPage();
					}
				});
			},
			mouseenterHandler = function(ev) {
				self._expandSubItems(ev.target);
			},
			mouseleaveHandler = function(ev) {
				self._collapseSubItems(ev.target);
			};

		if( this.options.type === 'scrollable' ) {
			// update the transform (ty) on scroll
			window.addEventListener('scroll', scrollHandler, false);
			// on resize (layoutComplete for the masonry instance) recalculate height
			this.msnry.on('layoutComplete', function( laidOutItems ) {
				// reset the height of the pseudoScroller (grid´s height + additional space between the top of the rotated isolayerEl and the page)
				self.pseudoScrollerEl.style.height = self.gridEl.offsetHeight + self.isolayerEl.offsetTop * Math.sqrt(2) + 'px';
				self._scrollPage();
			});
		}

		this.gridItems.forEach(function(item) {
			item.addEventListener('mouseenter', mouseenterHandler);
			item.addEventListener('mouseleave', mouseleaveHandler);
		});
	};

	IsoGrid.prototype._expandSubItems = function(item) {
		var self = this,
			itemLink = item.querySelector('a'),
			subItems = [].slice.call(itemLink.querySelectorAll('.layer')), 
			subItemsTotal = subItems.length;

		itemLink.style.zIndex = item.style.zIndex = this.gridItemsTotal;
		
		subItems.forEach(function(subitem, pos) {
			dynamics.stop(subitem);
			dynamics.animate(subitem, self.options.stackItemsAnimation.properties(pos), self.options.stackItemsAnimation.options(pos, subItemsTotal));
		});
	};

	IsoGrid.prototype._collapseSubItems = function(item) {
		var itemLink = item.querySelector('a');
		[].slice.call(itemLink.querySelectorAll('.layer')).forEach(function(subitem, pos) {
			dynamics.stop(subitem);
			dynamics.animate(subitem, {
				translateZ: 0 // enough to reset any transform value previously set
			}, {
				duration: 100,
				complete: function() {
					itemLink.style.zIndex = item.style.zIndex = 1;
				}
			})
		});
	};

	IsoGrid.prototype._scrollPage = function() {
		this.gridEl.style.WebkitTransform = this.gridEl.style.transform = 'translate3d(0,-' + scrollY() + 'px,0)';
		this.didscroll = false;
	};

	window.IsoGrid = IsoGrid;

})(window);
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

/**
 * jQuery Timepicker
 * http://timepicker.co
 *
 * Enhances standard form input fields helping users to select (or type) times.
 *
 * Copyright (c) 2016 Willington Vega; Licensed MIT, GPL
 */

(function (factory) {
    if ( typeof module === 'object' && typeof module.exports === 'object' ) {
        factory(require('jquery'), window, document);
    } else if (typeof jQuery !== 'undefined') {
        factory(jQuery, window, document);
    }
}(function($, window, document, undefined) {
    (function() {

        function pad(str, ch, length) {
            return (new Array(length + 1 - str.length).join(ch)) + str;
        }

        function normalize() {
            if (arguments.length === 1) {
                var date = arguments[0];
                if (typeof date === 'string') {
                    date = $.fn.timepicker.parseTime(date);
                }
                return new Date(0, 0, 0, date.getHours(), date.getMinutes(), date.getSeconds());
            } else if (arguments.length === 3) {
                return new Date(0, 0, 0, arguments[0], arguments[1], arguments[2]);
            } else if (arguments.length === 2) {
                return new Date(0, 0, 0, arguments[0], arguments[1], 0);
            } else {
                return new Date(0, 0, 0);
            }
        }

        $.TimePicker = function() {
            var widget = this;

            widget.container = $('.ui-timepicker-container');
            widget.ui = widget.container.find('.ui-timepicker');

            if (widget.container.length === 0) {
                widget.container = $('<div></div>').addClass('ui-timepicker-container')
                                    .addClass('ui-timepicker-hidden ui-helper-hidden')
                                    .appendTo('.background')
                                    .hide();
                widget.ui = $( '<div></div>' ).addClass('ui-timepicker')
                                    .addClass('ui-widget ui-widget-content ui-menu')
                                    .addClass('ui-corner-all')
                                    .appendTo(widget.container);
                widget.viewport = $('<ul></ul>').addClass( 'ui-timepicker-viewport' )
                                    .appendTo( widget.ui );

                if ($.fn.jquery >= '1.4.2') {
                    widget.ui.delegate('a', 'mouseenter.timepicker', function() {
                        // passing false instead of an instance object tells the function
                        // to use the current instance
                        widget.activate(false, $(this).parent());
                    }).delegate('a', 'mouseleave.timepicker', function() {
                        widget.deactivate(false);
                    }).delegate('a', 'click.timepicker', function(event) {
                        event.preventDefault();
                        widget.select(false, $(this).parent());
                    });
                }
            }
        };

        $.TimePicker.count = 0;
        $.TimePicker.instance = function() {
            if (!$.TimePicker._instance) {
                $.TimePicker._instance = new $.TimePicker();
            }
            return $.TimePicker._instance;
        };

        $.TimePicker.prototype = {
            // extracted from from jQuery UI Core
            // http://github,com/jquery/jquery-ui/blob/master/ui/jquery.ui.core.js
            keyCode: {
                ALT: 18,
                BLOQ_MAYUS: 20,
                CTRL: 17,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ENTER: 108,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                RIGHT: 39,
                SHIFT: 16,
                TAB: 9,
                UP: 38
            },

            _items: function(i, startTime) {
                var widget = this, ul = $('<ul></ul>'), item = null, time, end;

                // interval should be a multiple of 60 if timeFormat is not
                // showing minutes
                if (i.options.timeFormat.indexOf('m') === -1 && i.options.interval % 60 !== 0) {
                    i.options.interval = Math.max(Math.round(i.options.interval / 60), 1) * 60;
                }

                if (startTime) {
                    time = normalize(startTime);
                } else if (i.options.startTime) {
                    time = normalize(i.options.startTime);
                } else {
                    time = normalize(i.options.startHour, i.options.startMinutes);
                }

                end = new Date(time.getTime() + 24 * 60 * 60 * 1000);

                while(time < end) {
                    if (widget._isValidTime(i, time)) {
                        item = $('<li>').addClass('ui-menu-item').appendTo(ul);
                        $('<a>').addClass('ui-corner-all').text($.fn.timepicker.formatTime(i.options.timeFormat, time)).appendTo(item);
                        item.data('time-value', time);
                    }
                    time = new Date(time.getTime() + i.options.interval * 60 * 1000);
                }

                return ul.children();
            },

            _isValidTime: function(i, time) {
                var min = null, max = null;

                time = normalize(time);

                if (i.options.minTime !== null) {
                    min = normalize(i.options.minTime);
                } else if (i.options.minHour !== null || i.options.minMinutes !== null) {
                    min = normalize(i.options.minHour, i.options.minMinutes);
                }

                if (i.options.maxTime !== null) {
                    max = normalize(i.options.maxTime);
                } else if (i.options.maxHour !== null || i.options.maxMinutes !== null) {
                    max = normalize(i.options.maxHour, i.options.maxMinutes);
                }

                if (min !== null && max !== null) {
                    return time >= min && time <= max;
                } else if (min !== null) {
                    return time >= min;
                } else if (max !== null) {
                    return time <= max;
                }

                return true;
            },

            _hasScroll: function() {
                // fix for jQuery 1.6 new prop method
                var m = typeof this.ui.prop !== 'undefined' ? 'prop' : 'attr';
                return this.ui.height() < this.ui[m]('scrollHeight');
            },

            /**
             * TODO: Write me!
             *
             * @param i
             * @param direction
             * @param edge
             * */
            _move: function(i, direction, edge) {
                var widget = this;
                if (widget.closed()) {
                    widget.open(i);
                }
                if (!widget.active) {
                    widget.activate( i, widget.viewport.children( edge ) );
                    return;
                }
                var next = widget.active[direction + 'All']('.ui-menu-item').eq(0);
                if (next.length) {
                    widget.activate(i, next);
                } else {
                    widget.activate( i, widget.viewport.children( edge ) );
                }
            },

            //
            // protected methods
            //

            register: function(node, options) {
                var widget = this, i = {}; // timepicker instance object

                i.element = $(node);

                if (i.element.data('TimePicker')) {
                    return;
                }

                i.options = $.metadata ? $.extend({}, options, i.element.metadata()) : $.extend({}, options);
                i.widget = widget;

                // proxy functions for the exposed api methods
                $.extend(i, {
                    next: function() {return widget.next(i) ;},
                    previous: function() {return widget.previous(i) ;},
                    first: function() { return widget.first(i) ;},
                    last: function() { return widget.last(i) ;},
                    selected: function() { return widget.selected(i) ;},
                    open: function() { return widget.open(i) ;},
                    close: function() { return widget.close(i) ;},
                    closed: function() { return widget.closed(i) ;},
                    destroy: function() { return widget.destroy(i) ;},

                    parse: function(str) { return widget.parse(i, str) ;},
                    format: function(time, format) { return widget.format(i, time, format); },
                    getTime: function() { return widget.getTime(i) ;},
                    setTime: function(time, silent) { return widget.setTime(i, time, silent); },
                    option: function(name, value) { return widget.option(i, name, value); }
                });

                widget._setDefaultTime(i);
                widget._addInputEventsHandlers(i);

                i.element.data('TimePicker', i);
            },

            _setDefaultTime: function(i) {
                if (i.options.defaultTime === 'now') {
                    i.setTime(normalize(new Date()));
                } else if (i.options.defaultTime && i.options.defaultTime.getFullYear) {
                    i.setTime(normalize(i.options.defaultTime));
                } else if (i.options.defaultTime) {
                    i.setTime($.fn.timepicker.parseTime(i.options.defaultTime));
                }
            },

            _addInputEventsHandlers: function(i) {
                var widget = this;

                i.element.bind('keydown.timepicker', function(event) {
                    switch (event.which || event.keyCode) {
                    case widget.keyCode.ENTER:
                    case widget.keyCode.NUMPAD_ENTER:
                        event.preventDefault();
                        if (widget.closed()) {
                            i.element.trigger('change.timepicker');
                        } else {
                            widget.select(i, widget.active);
                        }
                        break;
                    case widget.keyCode.UP:
                        i.previous();
                        break;
                    case widget.keyCode.DOWN:
                        i.next();
                        break;
                    default:
                        if (!widget.closed()) {
                            i.close(true);
                        }
                        break;
                    }
                }).bind('focus.timepicker', function() {
                    i.open();
                }).bind('blur.timepicker', function() {
                    setTimeout(function() {
                        if (i.element.data('timepicker-user-clicked-outside')) {
                            i.close();
                        }
                    });
                }).bind('change.timepicker', function() {
                    if (i.closed()) {
                        i.setTime($.fn.timepicker.parseTime(i.element.val()));
                    }
                });
            },

            select: function(i, item) {
                var widget = this, instance = i === false ? widget.instance : i;
                widget.setTime(instance, $.fn.timepicker.parseTime(item.children('a').text()));
                widget.close(instance, true);
            },

            activate: function(i, item) {
                var widget = this, instance = i === false ? widget.instance : i;

                if (instance !== widget.instance) {
                    return;
                } else {
                    widget.deactivate();
                }

                if (widget._hasScroll()) {
                    var offset = item.offset().top - widget.ui.offset().top,
                        scroll = widget.ui.scrollTop(),
                        height = widget.ui.height();
                    if (offset < 0) {
                        widget.ui.scrollTop(scroll + offset);
                    } else if (offset >= height) {
                        widget.ui.scrollTop(scroll + offset - height + item.height());
                    }
                }

                widget.active = item.eq(0).children('a').addClass('ui-state-hover')
                                                        .attr('id', 'ui-active-item')
                                          .end();
            },

            deactivate: function() {
                var widget = this;
                if (!widget.active) { return; }
                widget.active.children('a').removeClass('ui-state-hover').removeAttr('id');
                widget.active = null;
            },

            /**
             * _activate, _deactivate, first, last, next, previous, _move and
             * _hasScroll were extracted from jQuery UI Menu
             * http://github,com/jquery/jquery-ui/blob/menu/ui/jquery.ui.menu.js
             */

            //
            // public methods
            //

            next: function(i) {
                if (this.closed() || this.instance === i) {
                    this._move(i, 'next', '.ui-menu-item:first');
                }
                return i.element;
            },

            previous: function(i) {
                if (this.closed() || this.instance === i) {
                    this._move(i, 'prev', '.ui-menu-item:last');
                }
                return i.element;
            },

            first: function(i) {
                if (this.instance === i) {
                    return this.active && this.active.prevAll('.ui-menu-item').length === 0;
                }
                return false;
            },

            last: function(i) {
                if (this.instance === i) {
                    return this.active && this.active.nextAll('.ui-menu-item').length === 0;
                }
                return false;
            },

            selected: function(i) {
                if (this.instance === i)  {
                    return this.active ? this.active : null;
                }
                return null;
            },

            open: function(i) {
                var widget = this,
                    selectedTime = i.getTime(),
                    arrange = i.options.dynamic && selectedTime;

                // return if dropdown is disabled
                if (!i.options.dropdown) { return i.element; }
                // fix for issue https://github.com/wvega/timepicker/issues/56
                // idea from https://prototype.lighthouseapp.com/projects/8887/tickets/248-results-popup-from-ajaxautocompleter-disappear-when-user-clicks-on-scrollbars-in-ie6ie7
                i.element.data('timepicker-event-namespace', Math.random());

                $(document).bind('click.timepicker-' + i.element.data('timepicker-event-namespace'), function(event) {
                    if (i.element.get(0) === event.target) {
                        i.element.data('timepicker-user-clicked-outside', false);
                    } else {
                        i.element.data('timepicker-user-clicked-outside', true).blur();
                    }
                });

                // if a date is already selected and options.dynamic is true,
                // arrange the items in the list so the first item is
                // cronologically right after the selected date.
                // TODO: set selectedTime
                if (i.rebuild || !i.items || arrange) {
                    i.items = widget._items(i, arrange ? selectedTime : null);
                }

                // remove old li elements keeping associated events, then append
                // the new li elements to the ul
                if (i.rebuild || widget.instance !== i || arrange) {
                    // handle menu events when using jQuery versions previous to
                    // 1.4.2 (thanks to Brian Link)
                    // http://github.com/wvega/timepicker/issues#issue/4
                    if ($.fn.jquery < '1.4.2') {
                        widget.viewport.children().remove();
                        widget.viewport.append(i.items);
                        widget.viewport.find('a').bind('mouseover.timepicker', function() {
                            widget.activate(i, $(this).parent());
                        }).bind('mouseout.timepicker', function() {
                            widget.deactivate(i);
                        }).bind('click.timepicker', function(event) {
                            event.preventDefault();
                            widget.select(i, $(this).parent());
                        });
                    } else {
                        widget.viewport.children().detach();
                        widget.viewport.append(i.items);
                    }
                }

                i.rebuild = false;

                // theme
                widget.container.removeClass('ui-helper-hidden ui-timepicker-hidden ui-timepicker-standard ui-timepicker-corners').show();

                switch (i.options.theme) {
                case 'standard':
                    widget.container.addClass('ui-timepicker-standard');
                    break;
                case 'standard-rounded-corners':
                    widget.container.addClass('ui-timepicker-standard ui-timepicker-corners');
                    break;
                default:
                    break;
                }

                /* resize ui */

                // we are hiding the scrollbar in the dropdown menu adding a 40px
                // padding to the wrapper element making the scrollbar appear in the
                // part of the wrapper that's hidden by the container (a DIV).
                if ( ! widget.container.hasClass( 'ui-timepicker-no-scrollbar' ) && ! i.options.scrollbar ) {
                    widget.container.addClass( 'ui-timepicker-no-scrollbar' );
                    widget.viewport.css('background-color', '#CE8932');
                }

                var containerDecorationHeight = widget.container.outerHeight() - widget.container.height(),
                    zindex = i.options.zindex ? i.options.zindex : i.element.offsetParent().css( 'z-index' ),
                    elementOffset = i.element.offset();

                // position the container right below the element, or as close to as possible.
                widget.container.css( {
                    top: '40vh',

                } );

                // then show the container so that the browser can consider the timepicker's
                // height to calculate the page's total height and decide if adding scrollbars
                // is necessary.
                widget.container.show();

                // now we need to calculate the element offset and position the container again.
                // If the browser added scrollbars, the container's original position is not aligned
                // with the element's final position. This step fixes that problem.
                widget.container.css( {
                    height: widget.ui.outerHeight() + containerDecorationHeight,
                    width: i.element.outerWidth(),
                    zIndex: zindex,
                    cursor: 'default'
                } );
                var calculatedWidth = widget.container.width() - ( widget.ui.outerWidth() - widget.ui.width() );

                // hardcode ui, viewport and item's width. I couldn't get it to work using CSS only
                widget.ui.css( { width: calculatedWidth } );
                widget.viewport.css( { width: calculatedWidth } );
                i.items.css( { width: calculatedWidth } );

                // XXX: what's this line doing here?
                widget.instance = i;

                // try to match input field's current value with an item in the
                // dropdown
                if (selectedTime) {
                    i.items.each(function() {
                        var item = $(this), time;

                        if ($.fn.jquery < '1.4.2') {
                            time = $.fn.timepicker.parseTime(item.find('a').text());
                        } else {
                            time = item.data('time-value');
                        }

                        if (time.getTime() === selectedTime.getTime()) {
                            widget.activate(i, item);
                            return false;
                        }
                        return true;
                    });
                } else {
                    widget.deactivate(i);
                }

                // don't break the chain
                return i.element;
            },

            close: function(i) {
                var widget = this;

                if (widget.instance === i) {
                    widget.container.addClass('ui-helper-hidden ui-timepicker-hidden').hide();
                    widget.ui.scrollTop(0);
                    widget.ui.children().removeClass('ui-state-hover');
                }

                $(document).unbind('click.timepicker-' + i.element.data('timepicker-event-namespace'));

                return i.element;
            },

            closed: function() {
                return this.ui.is(':hidden');
            },

            destroy: function(i) {
                var widget = this;
                widget.close(i, true);
                return i.element.unbind('.timepicker').data('TimePicker', null);
            },

            //

            parse: function(i, str) {
                return $.fn.timepicker.parseTime(str);
            },

            format: function(i, time, format) {
                format = format || i.options.timeFormat;
                return $.fn.timepicker.formatTime(format, time);
            },

            getTime: function(i) {
                var widget = this,
                    current = $.fn.timepicker.parseTime(i.element.val());

                // if current value is not valid, we return null.
                // stored Date object is ignored, because the current value
                // (valid or invalid) always takes priority
                if (current instanceof Date && !widget._isValidTime(i, current)) {
                    return null;
                } else if (current instanceof Date && i.selectedTime) {
                    // if the textfield's value and the stored Date object
                    // have the same representation using current format
                    // we prefer the stored Date object to avoid unnecesary
                    // lost of precision.
                    if (i.format(current) === i.format(i.selectedTime)) {
                        return i.selectedTime;
                    } else {
                        return current;
                    }
                } else if (current instanceof Date) {
                    return current;
                } else {
                    return null;
                }
            },

            setTime: function(i, time, silent) {
                var widget = this, previous = i.selectedTime;

                if (typeof time === 'string') {
                    time = i.parse(time);
                }

                if (time && time.getMinutes && widget._isValidTime(i, time)) {
                    time = normalize(time);
                    i.selectedTime = time;
                    i.element.val(i.format(time, i.options.timeFormat));

                    // TODO: add documentaion about setTime being chainable
                    if (silent) { return i; }
                } else {
                    i.selectedTime = null;
                }

                // custom change event and change callback
                // TODO: add documentation about this event
                if (previous !== null || i.selectedTime !== null) {
                    i.element.trigger('time-change', [time]);
                    if ($.isFunction(i.options.change)) {
                        i.options.change.apply(i.element, [time]);
                    }
                }

                return i.element;
            },

            option: function(i, name, value) {
                if (typeof value === 'undefined') {
                    return i.options[name];
                }

                var time = i.getTime(),
                    options, destructive;

                if (typeof name === 'string') {
                    options = {};
                    options[name] = value;
                } else {
                    options = name;
                }

                // some options require rebuilding the dropdown items
                destructive = ['minHour', 'minMinutes', 'minTime',
                               'maxHour', 'maxMinutes', 'maxTime',
                               'startHour', 'startMinutes', 'startTime',
                               'timeFormat', 'interval', 'dropdown'];


                $.each(options, function(name) {
                    i.options[name] = options[name];
                    i.rebuild = i.rebuild || $.inArray(name, destructive) > -1;
                });

                if (i.rebuild) {
                    i.setTime(time);
                }
            }
        };

        $.TimePicker.defaults =  {
            timeFormat: 'HH:mm',
            minHour: null,
            minMinutes: null,
            minTime: null,
            maxHour: null,
            maxMinutes: null,
            maxTime: null,
            startHour: null,
            startMinutes: null,
            startTime: null,
            interval: 60,
            dynamic: true,
            theme: 'standard',
            zindex: null,
            dropdown: true,
            scrollbar: false,
            // callbacks
            change: function(/*time*/) {}
        };

        $.TimePicker.methods = {
            chainable: [
                'next',
                'previous',
                'open',
                'close',
                'destroy',
                'setTime'
            ]
        };

        $.fn.timepicker = function(options) {
            // support calling API methods using the following syntax:
            //   $(...).timepicker('parse', '11p');
            if (typeof options === 'string') {
                var args = Array.prototype.slice.call(arguments, 1),
                    method, result;

                // chainable API methods
                if (options === 'option' && arguments.length > 2) {
                    method = 'each';
                } else if ($.inArray(options, $.TimePicker.methods.chainable) !== -1) {
                    method = 'each';
                // API methods that return a value
                } else {
                    method = 'map';
                }

                result = this[method](function() {
                    var element = $(this), i = element.data('TimePicker');
                    if (typeof i === 'object') {
                        return i[options].apply(i, args);
                    }
                });

                if (method === 'map' && this.length === 1) {
                    return $.makeArray(result).shift();
                } else if (method === 'map') {
                    return $.makeArray(result);
                } else {
                    return result;
                }
            }

            // calling the constructor again on a jQuery object with a single
            // element returns a reference to a TimePicker object.
            if (this.length === 1 && this.data('TimePicker')) {
                return this.data('TimePicker');
            }

            var globals = $.extend({}, $.TimePicker.defaults, options);

            return this.each(function() {
                $.TimePicker.instance().register(this, globals);
            });
        };

        /**
         * TODO: documentation
         */
        $.fn.timepicker.formatTime = function(format, time) {
            var hours = time.getHours(),
                hours12 = hours % 12,
                minutes = time.getMinutes(),
                seconds = time.getSeconds(),
                replacements = {
                    hh: pad((hours12 === 0 ? 12 : hours12).toString(), '0', 2),
                    HH: pad(hours.toString(), '0', 2),
                    mm: pad(minutes.toString(), '0', 2),
                    ss: pad(seconds.toString(), '0', 2),
                    h: (hours12 === 0 ? 12 : hours12),
                    H: hours,
                    m: minutes,
                    s: seconds,
                    p: hours > 11 ? 'PM' : 'AM'
                },
                str = format, k = '';
            for (k in replacements) {
                if (replacements.hasOwnProperty(k)) {
                    str = str.replace(new RegExp(k,'g'), replacements[k]);
                }
            }
            // replacements is not guaranteed to be order and the 'p' can cause problems
            str = str.replace(new RegExp('a','g'), hours > 11 ? 'pm' : 'am');
            return str;
        };

        /**
         * Convert a string representing a given time into a Date object.
         *
         * The Date object will have attributes others than hours, minutes and
         * seconds set to current local time values. The function will return
         * false if given string can't be converted.
         *
         * If there is an 'a' in the string we set am to true, if there is a 'p'
         * we set pm to true, if both are present only am is setted to true.
         *
         * All non-digit characters are removed from the string before trying to
         * parse the time.
         *
         * ''       can't be converted and the function returns false.
         * '1'      is converted to     01:00:00 am
         * '11'     is converted to     11:00:00 am
         * '111'    is converted to     01:11:00 am
         * '1111'   is converted to     11:11:00 am
         * '11111'  is converted to     01:11:11 am
         * '111111' is converted to     11:11:11 am
         *
         * Only the first six (or less) characters are considered.
         *
         * Special case:
         *
         * When hours is greater than 24 and the last digit is less or equal than 6, and minutes
         * and seconds are less or equal than 60, we append a trailing zero and
         * start parsing process again. Examples:
         *
         * '95' is treated as '950' and converted to 09:50:00 am
         * '46' is treated as '460' and converted to 05:00:00 am
         * '57' can't be converted and the function returns false.
         *
         * For a detailed list of supported formats check the unit tests at
         * http://github.com/wvega/timepicker/tree/master/tests/
         */
        $.fn.timepicker.parseTime = (function() {
            var patterns = [
                    // 1, 12, 123, 1234, 12345, 123456
                    [/^(\d+)$/, '$1'],
                    // :1, :2, :3, :4 ... :9
                    [/^:(\d)$/, '$10'],
                    // :1, :12, :123, :1234 ...
                    [/^:(\d+)/, '$1'],
                    // 6:06, 5:59, 5:8
                    [/^(\d):([7-9])$/, '0$10$2'],
                    [/^(\d):(\d\d)$/, '$1$2'],
                    [/^(\d):(\d{1,})$/, '0$1$20'],
                    // 10:8, 10:10, 10:34
                    [/^(\d\d):([7-9])$/, '$10$2'],
                    [/^(\d\d):(\d)$/, '$1$20'],
                    [/^(\d\d):(\d*)$/, '$1$2'],
                    // 123:4, 1234:456
                    [/^(\d{3,}):(\d)$/, '$10$2'],
                    [/^(\d{3,}):(\d{2,})/, '$1$2'],
                    //
                    [/^(\d):(\d):(\d)$/, '0$10$20$3'],
                    [/^(\d{1,2}):(\d):(\d\d)/, '$10$2$3']
                ],
                length = patterns.length;

            return function(str) {
                var time = normalize(new Date()),
                    am = false, pm = false, h = false, m = false, s = false;

                if (typeof str === 'undefined' || !str.toLowerCase) { return null; }

                str = str.toLowerCase();
                am = /a/.test(str);
                pm = am ? false : /p/.test(str);
                str = str.replace(/[^0-9:]/g, '').replace(/:+/g, ':');

                for (var k = 0; k < length; k = k + 1) {
                    if (patterns[k][0].test(str)) {
                        str = str.replace(patterns[k][0], patterns[k][1]);
                        break;
                    }
                }
                str = str.replace(/:/g, '');

                if (str.length === 1) {
                    h = str;
                } else if (str.length === 2) {
                    h = str;
                } else if (str.length === 3 || str.length === 5) {
                    h = str.substr(0, 1);
                    m = str.substr(1, 2);
                    s = str.substr(3, 2);
                } else if (str.length === 4 || str.length > 5) {
                    h = str.substr(0, 2);
                    m = str.substr(2, 2);
                    s = str.substr(4, 2);
                }

                if (str.length > 0 && str.length < 5) {
                    if (str.length < 3) {
                        m = 0;
                    }
                    s = 0;
                }

                if (h === false || m === false || s === false) {
                    return false;
                }

                h = parseInt(h, 10);
                m = parseInt(m, 10);
                s = parseInt(s, 10);

                if (am && h === 12) {
                    h = 0;
                } else if (pm && h < 12) {
                    h = h + 12;
                }

                if (h > 24) {
                    if (str.length >= 6) {
                        return $.fn.timepicker.parseTime(str.substr(0,5));
                    } else {
                        return $.fn.timepicker.parseTime(str + '0' + (am ? 'a' : '') + (pm ? 'p' : ''));
                    }
                } else {
                    time.setHours(h, m, s);
                    return time;
                }
            };
        })();
    })();
}));

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
