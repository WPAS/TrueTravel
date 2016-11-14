document.addEventListener("DOMContentLoaded", function(){

//navigation code for mobiles

var button = document.querySelector("#nav-button");
var navigation = document.querySelector(".menu");
var hider = document.querySelector("#hider")

function test_match_media_with_listener(){
  var mq = window.matchMedia("(max-width: 650px)");
  mq.addListener(WidthChange);
  WidthChange(mq);

  function WidthChange(mediaQuery) {
    if(mediaQuery.matches) {
      console.log('yes');
      navigation.classList.add("hidden");
      button.classList.remove("hidden");
    } else {
      console.log('no');
      navigation.classList.remove("hidden");
      button.classList.add("hidden");
      hider.classList.add("hidden");
    }
  }
}

test_match_media_with_listener();

button.addEventListener("click", function() {
  navigation.classList.remove("hidden");
  button.classList.add("hidden");
  hider.classList.remove("hidden");
});

hider.addEventListener("click", function() {
  navigation.classList.add("hidden");
  button.classList.remove("hidden");
  hider.classList.add("hidden");
});

//slider

var btnPrev = document.querySelector("#gallery-nav1");
var btnNext = document.querySelector("#gallery-nav2");
var slides = document.querySelectorAll(".slider");
var counter = 0;

btnNext.addEventListener("click", function() {
  slides[counter].classList.add("hidden")
  counter += 1;
  if (counter > slides.length -1) {
    counter = 0;
  }
  slides[counter].classList.remove("hidden");
});

btnPrev.addEventListener("click", function() {
  slides[counter].classList.add("hidden")
  counter -= 1;
  if (counter === -1) {
    counter = slides.length -1;
  }
  slides[counter].classList.remove("hidden");

});





// TO BE ADDED
//
// nav responsivness and animation
//
// simple slider
//
// hiding part of places section
//
// modal
//
// accordion
//
// do not forget anchor scrolling animation script!
//
// Later - form validation


});
