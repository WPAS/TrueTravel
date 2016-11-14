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
