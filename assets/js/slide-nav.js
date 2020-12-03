//Tutorial by W3Schools
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//make the dropdown hover a click on mobile
$(".dropdown").click(function(){
    $(this).children(".drop-content").slideToggle("fast");
});
