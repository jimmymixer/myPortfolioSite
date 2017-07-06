$(document).ready(function(){
  $(document).on('turbolinks:load', function() {

  // parallax scrolling
  $('.parallax').parallax();

  // for the projects
  // for resume
  $('.modal').modal();

  // hover over effect for the language icons
  $('.tooltipped').tooltip({delay: 50});

  });

});
