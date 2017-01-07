$(document).ready(function () {
  var trigger = $('.hamburger'),
      // overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
       if (isClosed == true) {          
        // overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
        // $(this).css({"margin-left": "20px"}); 
      } else {   
        // overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
        // $(this).css({"margin-left": "230px"}); 
      }
          
    });

     
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});