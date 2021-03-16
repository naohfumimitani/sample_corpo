/* global $ MobileDetect */

$('.animated').waypoint({
    handler(direction) {
      if (direction === 'down') {
        $(this.element).addClass('fadeInUp');
      }else{
        $(this.element).removeClass('fadeInUp');
      }
    },

    
  
    offset: '50%',
  });

$('.header-title').hide().fadeIn(5000);