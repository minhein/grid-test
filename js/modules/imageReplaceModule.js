$(document).ready(function($){

  var $image = $('<img>');


  //Hover and show in big image
  $('.color-info li img').hover(function(){
    var $imgSrc = $(this).attr('src');
    var $imgCaption = $(this).attr('alt');
    $('.color-image img').attr('src', $imgSrc);
    $('.color-image img + p').text($imgCaption);
  });

});
