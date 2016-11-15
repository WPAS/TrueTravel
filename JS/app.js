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
      navigation.classList.add("hidden");
      button.classList.remove("hidden");
    } else {
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
}); //mobile nav toggle end

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

}); //slider end


//gallery hider

var morePlaces = document.querySelectorAll(".more-places");
var placesRevealer = document.querySelector("#places-revealer");
console.log(morePlaces);

function test_match_media_with_listener1000(){
  var mq = window.matchMedia("(max-width: 1000px)");
  mq.addListener(WidthChange);
  WidthChange(mq);

  function WidthChange(mediaQuery) {
    if(mediaQuery.matches) {
      console.log('yes');
      for (i = 0; i < morePlaces.length; i++) {
        morePlaces[i].classList.add("hidden");
      }
      placesRevealer.classList.remove("hidden");
    } else {
      console.log('no');
      for (i = 0; i < morePlaces.length; i++) {
        morePlaces[i].classList.remove("hidden");
      }
      placesRevealer.classList.add("hidden");
    }
  }
}

test_match_media_with_listener1000()

placesRevealer.addEventListener("click", function() {
  for (i = 0; i < morePlaces.length; i++) {
    morePlaces[i].classList.toggle("hidden");
  }
  if (morePlaces[0].classList.contains("hidden")) {
    placesRevealer.innerText = "Check more places";
    } else {
    placesRevealer.innerText = "Hide additional places";
  }
})

//modal code

var figure = document.querySelectorAll("#places figure");
var modalHeader = document.querySelectorAll(".modal h1");
var modalHider = document.querySelectorAll(".modal-hider")
console.log(modalHider);

for (i=0; i<figure.length; i++) {
  figure[i].addEventListener("click", function() {
    var modalId = this.dataset.modal;
    var modalToShow = document.querySelector(modalId);
    modalToShow.style.display = "block";
  });
}

function hideModal(element) {
  for (i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function() {
        this.parentElement.style.display = "none";
    });
  }
}

hideModal(modalHeader);
hideModal(modalHider);





//IS CLICK ALSO TOUCH???????????????


// TO BE ADDED
//
// mobile nav animation
//
//
// modal
//
// accordion
//
// do not forget anchor scrolling animation script!!
//
// Later, if time allows - form validation


});
