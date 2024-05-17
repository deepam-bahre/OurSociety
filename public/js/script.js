(function($) {

    "use strict";



//Home Slider
      //Function to animate slider captions
      function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = "webkitAnimationEnd animationend";
    
        elems.each(function() {
          var $this = $(this),
            $animationType = $this.data("animation");
          $this.addClass($animationType).one(animEndEv, function() {
            $this.removeClass($animationType);
          });
        });
      }
    
      //Variables on page load
      var $myCarousel = $("#carouselExampleIndicators"),
        $firstAnimatingElems = $myCarousel
          .find(".carousel-item:first")
          .find("[data-animation ^= 'animated']");
    
      //Initialize carousel
      $myCarousel.carousel();
    
      //Animate captions in first slide on page load
      doAnimations($firstAnimatingElems);
    
      //Other slides to be animated on carousel slide event
      $myCarousel.on("slide.bs.carousel", function(e) {
        var $animatingElems = $(e.relatedTarget).find(
          "[data-animation ^= 'animated']"
        );
        doAnimations($animatingElems);
      });




    
    var fullHeight = function() {
    
       $('.js-fullheight').css('height', $(window).height());
       $(window).resize(function(){
          $('.js-fullheight').css('height', $(window).height());
       });
    
    };
    fullHeight();
    
    var carousel = function() {
       $('.featured-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        margin:30,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav:true,
        dots: true,
        autoplayHoverPause: false,
        items: 1,
        navText : ["<span><i class='fas fa-angle-left owl-icon'></i></span>","<span><i class='fas fa-angle-right owl-icon'></i></span>"],
        responsive:{
          0:{
            items:1
          },
          600:{
            items:2
          },
          1000:{
            items:3
          }
        }
       });
    
    };
    carousel();
    
    })(jQuery);


    