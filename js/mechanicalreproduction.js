$(document).ready(function() {
  initHeight = $(document).height();
  $('iframe').css('width', '100%').css('height', initHeight);
  $('#bellyband').css('height', initHeight * .5).css('top', initHeight * .25);
});
$('#bellyband').on('click', function(){
  $(this).addClass('hide');
});
$(window).resize(function() {
  newHeight = $(window).height();
  $('iframe').css('height', newHeight);
  $('#bellyband').css('height', newHeight * .5).css('top', newHeight * .25);
});
