$(document).ready(function($){

  var $familyFriendlyPopupImg = $('#family-friendly .color-image img');
  var $familyFriendlyPopupCaption = $('#family-friendly .color-image p');

  var $newNeutralsPopupImg = $('#new-neutrals .color-image img');
  var $newNeutralsPopupCaption = $('#new-neutrals .color-image p');

  $('#new-neutrals .color-info li img').hover(function(){
    var $imgSrc = $(this).attr('src');
    var $imgCaption = $(this).attr('alt');
    $newNeutralsPopupImg.attr('src', $imgSrc);
    $newNeutralsPopupCaption.text($imgCaption);
  });

  $('#family-friendly .color-info li img').hover(function(){
    var $imgSrc = $(this).attr('src');
    var $imgCaption = $(this).attr('alt');
    $familyFriendlyPopupImg.attr('src', $imgSrc);
    $familyFriendlyPopupCaption.text($imgCaption);
  });

});
