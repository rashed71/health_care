$(document).ready(function(){

    //menu-hover navigation JS
        $('ul.nav li.dropdown').hover(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        });

    // WOW JS
    	new WOW().init();

    // Counter Up JS
	    $('.counter').counterUp({
	        delay: 10,
	        time: 1000
	    });

    // Testimonial JS
      $('.owl-carousel').owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        dots:true,
        mouseDrag:true,
        autoplayHoverPause:true,
        nav:false,
        /*navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],*/
        smartSpeed:700,
        transitionStyle:"fade",
        animateIn: 'fadeIn',
        animateOut: 'fadeOutLeft'
        
    })
});