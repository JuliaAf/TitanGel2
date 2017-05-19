$(document).ready(function(){
  $('.bxslider').bxSlider({
    auto: true,
    speed:1000,
    pause:8000
  });
  /*scroll*/
  $('.toform').click(function(e) {
  e.preventDefault();
  var a = $('.js_submit'),b = a.closest('form');
  if($('form#toform').length) a = $('#toform .js_submit'),b = a.closest('form#toform');
  if(b.length && a.is(':visible')){
  $("html,body").animate({scrollTop: b.offset().top}, 1000);
     }
  return false;
  });
});
