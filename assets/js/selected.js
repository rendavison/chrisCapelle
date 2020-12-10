// adds the 'selected' class to the current nav item
$(function(){
  $('a').each(function() {
    if ($(this).prop('href') == (window.location.href)) {
      $(this).addClass('selected');
    }
  });
});
