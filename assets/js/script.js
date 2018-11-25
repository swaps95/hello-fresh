/* Author: 

*/
$(window).load(function() {
    console.log('in jquery : '+startSlider);

  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 2,
    minItems: 1,
    maxItems: 3,
    startAt : startSlider
  });
});
// Script-for tab functionality 
var startSlider = 0;
var tablink1= document.getElementById('tablink1');
tablink1.addEventListener('click', function(){ setSlider(0); });

var tablink2= document.getElementById('tablink2');
tablink2.addEventListener('click', function(){ setSlider(1); });

var tablink3= document.getElementById('tablink3');
tablink3.addEventListener('click', function(){ setSlider(2); });


function setSlider(num){
  var slider = $(".flexslider").data("flexslider");
  slider.flexAnimate(num, true, true);
}

// Script for hamburger click
var start = document.getElementById('start-btn');
var navigation = document.getElementById('nav-link');
var menu = document.getElementById('click-me');
menu.addEventListener('click',function(){
  if (navigation.style.display === "block") {
    navigation.style.display = "none";
  } 
  else { navigation.style.display = "block"; }
  
  if (start.style.display === "block") {
    start.style.display = "none";
  } 
  else { start.style.display = "block"; }
})






















