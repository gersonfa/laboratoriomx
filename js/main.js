/*----------------------------------------------------------------

	Template Name: TheRN - Creative Agency HTML5 Template 
	Version: 1.0

-------------------------------------------------------------------------*/

/**************************************************************
	
	Main Js Activation
	01. Wow Active 
	02. Slider Activation
	03. Mainmenu Css 
	04. Award Hover Change
	05. Blog Hover Change
	06. Service Hover Change
	07. OnePageNav JS
	08. Tilt Hover Activation
	09. BacK To Top
	10. Parallax Activation
	11. Slider Activation
	12. Mainmenu Activation
	13. Portfolio Masonary Activation
	14. Header Search Activation 

	
	__ End Js Activation

***************************************************************/


(function ($) {
	'use strict';
	/**
	 * Preloader
	 */
	$(window).on('load', function() {
	    rnPrealoaderSetup();
	});

	/**
	 * Wow Active 
	 */
	new WOW().init();

	/**
	* Animation
	*/
	$(".rn_surface").imagesLoaded().always(function() {
	  setTimeout(function() {
	      var smc = new ScrollMagic.Controller;
	      $(".rn_surface").each(function() {
	          new ScrollMagic.Scene({
	              triggerElement: this,
	              triggerHook: "onCenter",
	              reverse: !1
	          }).setClassToggle(this, "animated").addTo(smc)
	      })
	  }, 3000)
	});
	
	/**
	* easeScroll
	*/
	$("body").easeScroll({
		frameRate: 60,
		animationTime: 1400,
		stepSize: 120,
		pulseAlgorithm: !0,
		pulseScale: 8,
		pulseNormalize: 1,
		accelerationDelta: 20,
		accelerationMax: 1,
		keyboardSupport: !0,
		arrowScroll: 50
	});

	/**
	 * BacK To Top
	 */
	function BackToTop() {
		$('.scrolltotop').on('click', function () {
			$('html, body').animate({ scrollTop: 0 }, 800);
			return false;
		});
		$('#gotomap').on('click', function () {
			$('html, body').animate({ scrollTop: $('#main').offset().top - 100 }, 800);
			return false;
		});

	}
	BackToTop();

	
	/**
	 * Preloader
	 */
	function rnPrealoaderSetup() {
		var rnPre = $('#rn-preloader-wrap');
		var isPhone = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	    if (!isPhone) {
	        setTimeout(function() {
	            rnPre.addClass('rn-preloaded');
	        }, 900);
	        setTimeout(function() {
	            rnPre.remove();
	        }, 2000);

	    } else {
	        rnPre.remove();
	    }
	}

	/**
	 * Select all links with hashes
	 */
	$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.on('click', function(event) {
	if (
	  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	  && 
	  location.hostname == this.hostname
	) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	  if (target.length) {
	    event.preventDefault();
	    $('html, body').animate({
	      scrollTop: target.offset().top
	    }, 1000, function() {
	      var $target = $(target);
	      $target.focus();
	      if ($target.is(":focus")) { 
	        return false;
	      } else {
	        $target.attr('tabindex','-1');
	        $target.focus();
	      };
	    });
	  }
	}
	});

	/**
	 * pageScrollBar 
	 */
	window.onscroll = function() {
		pageScrollBar()
	};
	function pageScrollBar() {
	  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	  var scrolled = (winScroll / height) * 100;
	  document.getElementById("rn-page-progress-bar").style.width = scrolled + "%";
	}


	/**
	 * Medium Zoom
	 */
	var mzsc = new ScrollMagic.Controller;
	mediumZoom($("[data-zoomable]").toArray()), $('a[href^="!#"]').on("click", function(e) {
        e.preventDefault();
        var mzsc = this.hash,
            a = $(mzsc);
        $("html, body").stop().animate({
            scrollTop: a.offset().top
        }, 900, "swing", function() {
            window.location.hash = mzsc
        })
    });


    /**
     * Main Menu
     */
    CSSPlugin.defaultTransformPerspective = 600;
    
    var toggwrapper = $('.menu-section');

    var timeline = new TimelineMax({ paused: true, reversed: true });

    var oms = $('.ovl-menu-section'),
        otmb = $('.menu-toggle');

    timeline.staggerFromTo(oms, 0.5, { opacity: "0", visibility: "hidden"}, { opacity: "1", visibility: "visible"}, 0.5);

    timeline.staggerFromTo(".ovl-logo a", 0.2, { opacity: "0", scale: '0.5', y: '-30%', visibility: "hidden"}, { opacity: "1", scale: '1', y:"0", visibility: "visible"}, 0.1);

    timeline.staggerFromTo(".ovl-right .menu.otmb", 0.3, { opacity: "0", y: '50%', visibility: "hidden"}, { opacity: "1", y: '0%', visibility: "visible"}, 0.2);

    otmb.on('click', function (e) {
    	e.preventDefault();
    	$('body').toggleClass('overlay-wrapper-open');
    	$('.ovl-menu-section').toggleClass('menu-open');
    	$('.ovl-logo').toggleClass('rn_surface animated');
    	$('.ovl-map').toggleClass('rn_surface animated');
    	$('.ovl-social').toggleClass('rn_surface animated');
    	$('.ovl-quick-info').toggleClass('rn_surface animated');
    	$('.ovl-right').toggleClass('rn_surface animated');
    	timeline.reversed() ? timeline.play() : timeline.reverse()
    });




    
    /**
     * Paralax Effect
     */
    $(window).bind("load resize scroll",function(e) {
        var y = $(window).scrollTop();
        $(".story-image").filter(function() {
            return $(this).offset().top < (y + $(window).height()) &&
                   $(this).offset().top + $(this).height() > y;
        }).css('background-position', parseInt(-y / 10) + 'px' + ' 0px');
    });



    /**
     * Menu Hove
     */
    $(".menu-item").on("mouseenter", function() {
        $(".hamburger-menu").addClass("has-hovered");
    }); 
    $(".menu-item").on("mouseleave", function() {
        $(".hamburger-menu").removeClass("has-hovered");
    });

    /**
     * Social Network color
     */
    function rnBgChnage() {
    	$('.social-share li a').on('mouseover', function () {
    		var bgcolor = $(this).data('bgcolor');
    		$('.ovl-social').css({ 'background': bgcolor, 'transition': '0.5s' });
    	});
    }
    rnBgChnage();




    /**
     * Testimonial
     */

    $(".testmonial-activation").slick({
      infinite: false,
      arrows: false,
      dots: true,
      dotsClass: 'rn-slick-dots'
    });

    /**
     * Sticky Header
     */
    // $("header.rn-header").headroom();

    $("header.rn-header").headroom();


    /**
     * Midnight
     */
    $('.rn-header').midnight({
      // The class that wraps each header. Used as a clipping mask.
      headerClass: 'rn-header',
      // The class that wraps the contents of each header. Also used as a clipping mask.
      innerClass: 'rn-headerInner',
      // The class used by the default header (useful when adding multiple headers with different markup).
      defaultClass: 'rn-headerInnerDefault'
    });


    /**
     * Smoth Scrollbar
     */
    // var Scrollbar = window.Scrollbar;

    // Scrollbar.init(document.querySelector('#wrapper'));
    $('.slide.bg_image--1').parazoom();


    /**
     * Cursor
     */
    var o = $(".cursor");
    $(window).on("mousemove", function(e) {
        var t = e.clientX + "px",
            a = e.clientY + "px";
        TweenMax.to('.cursor', .3, {
            left: t,
            top: a,
            ease: "Power1.easeOut"
        })
    });
    $("a, .creative-cursor, .menu-toggle, .big-cursor").on("mouseenter", function(e) {
        TweenMax.to('.cursor', .3, {
            scale: 2.5,
            background: 'rgba(0, 28, 67, 0.05)',
           	border: '0px solid rgba(0,0,0,0.0)',
            ease: "Power1.easeOut"
        })
    });
    $("a, .creative-cursor, .menu-toggle, .big-cursor").on("mouseleave", function(e) {
        TweenMax.to('.cursor', .3, {
            scale: 1,
            background: 'transparent',
            border: '1.5px solid rgba(0, 28, 67, 0.5)',
            ease: "Power1.easeOut",
        })
    });
    $(".big-cursor").on("mouseenter", function(e) {
        TweenMax.to('.cursor', .3, {
            scale: 4,
            ease: "Power1.easeOut"
        })
    });
    $(".big-cursor").on("mouseleave", function(e) {
        TweenMax.to('.cursor', .3, {
            scale: 1,
            ease: "Power1.easeOut"
        })
    });
    $(".no-cursor").on("mouseenter", function(e) {
        TweenMax.to('.cursor', .3, {
            scale: 0,
            ease: "Power1.easeOut"
        })
    });
    $(".no-cursor").on("mouseleave", function(e) {
        TweenMax.to('.cursor', .3, {
            scale: 1,
            ease: "Power1.easeOut"
        })
    });

      

})(jQuery);

