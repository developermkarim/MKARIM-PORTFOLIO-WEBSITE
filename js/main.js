
function main() {

(function () {
   'use strict';

    
 	// Smooth Scrolling
    //==========================================
    $(function() {
      $('a.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top -50
            }, 1000);
            return false;
          }
        }
      });
    });

    /*====================================
    Script for the Counters for Facts Section
    ======================================*/
    $('.count').each(function() {
        var $this = $(this);
        $this.data('target', parseInt($this.html()));
        $this.data('counted', false);
        $this.html('0');
    });
    $(window).bind('scroll', function() {
        var speed = 3000;
        $('.count').each(function() {
            var $this = $(this);
            if (!$this.data('counted') && $(window).scrollTop() +
                $(window).height() >= $this.offset().top) {
                $this.data('counted', true);
                $this.animate({
                    dummy: 1
                }, {
                    duration: speed,
                    step: function(now) {
                        var $this = $(this);
                        var val = Math.round(
                            $this.data(
                                'target') *
                            now);
                        $this.html(val);
                        if (0 < $this.parent(
                            '.value').length) {
                            $this.parent(
                                '.value').css(
                                'width',
                                val + '%');
                        }
                    }
                });
            }
        });
    }).triggerHandler('scroll');

    /*====================================
    Portfolio Carousel 
    ======================================*/
  	$(document).ready(function() {
  	  var owl = $("#team");
  	  owl.owlCarousel({
  	     
  	      itemsCustom : [
  	        [0, 1],
  	        [450, 1],
  	        [660, 2],
  	        [700, 2],
  	        [1200, 3],
  	        [1600, 3]
  	      ],
  	      navigation : false,
  	      pagination: true,
  	  });


      /* TYPE JS STA|RT */
 // typed js
 $(".typed").typed({
  strings: ["Web Designer.", "Web Developer.", "Full stack web Developer", 'WordPress Designer'],
  // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
  stringsElement: null,
  // typing speed
  typeSpeed: 50,
  // time before typing starts
  startDelay: 400,
  // backspacing speed
  backSpeed: 50,
  // time before backspacing
  backDelay: 400,
  // loop
  loop: true,
  // false = infinite
  loopCount: 100,
  // show cursor
  showCursor:true,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: 'html',
  // call when done callback function
  callback: function() {},
  // starting callback function before each string
  preStringTyped: function() {},
  //callback for every typed string
  onStringTyped: function() {},
  // callback for reset
  resetCallback: function() {}
});

  /* TYPE JS END */


  	 
  	});

    /*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#itemsWork , #itemsWorkTwo, #itemsWorkThree');
        $container.isotope({
            filter: '* , all',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

    /*====================================
    Nivo Lightbox 
    ======================================*/
    // Agency Portfolio Popup
    $('#itemsWork a , #itemsWorkTwo a , #itemsWorkThree a , #popup a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });

    $(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });


  
 
});

 


}());


}
main();