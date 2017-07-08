$(document).ready(function(){
  $(document).on('turbolinks:load', function() {

    // parallax scrolling
    $('.parallax').parallax();

    // for the projects
    // for resume
    $('.modal').modal();

    // hover over effect for the language icons
    $('.tooltipped').tooltip({delay: 50});

    $(".button-collapse").sideNav({
      menuWidth: 200, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });



  });

  // Scrollbar Code
       var scroll_start = 0;
       var startchange = $('#startchange');
       var offset = startchange.offset();
      if (startchange.length){
       $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
              $("#my_navbar").removeClass('light transparent z-depth-0');
              $("#my_navbar").addClass('customcolor z-depth-5' );
              $("#my_navbar a").addClass('light teal-text text-accent-4');

           } else {
              $("#my_navbar").removeClass('customcoler z-depth-5');
              $("#my_navbar").addClass('light transparent z-depth-0');
              $("#my_navbar a").removeClass('light teal-text text-accent-4');
           }
        });
      }

});
