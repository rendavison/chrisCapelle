//Modified tutorial from W3Schools
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav
function openNav() {
  document.getElementById("mySidenav").classList.add('show');
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove('show');
}

//make the dropdown hover a click on mobile
$(".dropdown").click(function(){
    $(this).children(".drop-content").slideToggle("fast");
});
