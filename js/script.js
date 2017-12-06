(function( $ ) {
    
        //Function to animate slider captions 
        function doAnimations( elems ) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';
            
            elems.each(function () {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function () {
                    $this.removeClass($animationType);
                });
            });
        }
        
        //Variables on page load 
        var $myCarousel = $('#sg-carousel'),
            $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
            
        //Initialize carousel 
        $myCarousel.carousel();
        
        //Animate captions in first slide on page load 
        doAnimations($firstAnimatingElems);
        
        //Pause carousel  
        $myCarousel.carousel('pause');
        
        
        //Other slides to be animated on carousel slide event 
        $myCarousel.on('slide.bs.carousel', function (e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });  
       
        
    })(jQuery);	

    $(document).ready(function() {
        $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1250);
      });
    
      $(window).resize(function() {
        $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1250);
    });
    function initMap() {
        var alvionce = {lat: 1.28352, lng: 36.8238 }; 
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: alvionce
        });
        var marker = new google.maps.Marker({
          position: alvionce,
          map: map
        });
      }