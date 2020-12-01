$(document).ready(function(){
  //this adds the 'selected' class to the current nav item
  $('#nav-links').click(function(){
    $(this).siblings().find('a').removeClass('selected');
    $(this).find('a').addClass('selected');
  })
});
