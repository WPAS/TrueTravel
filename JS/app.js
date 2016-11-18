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

function test_match_media_with_listener1000(){
  var mq = window.matchMedia("(max-width: 1000px)");
  mq.addListener(WidthChange);
  WidthChange(mq);

  function WidthChange(mediaQuery) {
    if(mediaQuery.matches) {
      for (i = 0; i < morePlaces.length; i++) {
        morePlaces[i].classList.add("hidden");
      }
      placesRevealer.style.display = "block";
    } else {
      for (i = 0; i < morePlaces.length; i++) {
        morePlaces[i].classList.remove("hidden");
      }
      placesRevealer.style.display = "none";
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

function getOffset(el) {
    var bodyRect = document.body.getBoundingClientRect(),
    elemRect = el.getBoundingClientRect(),
    offsetTop = elemRect.top - bodyRect.top;
    return offsetTop;
}
//function thanks to Andy Earnshaw / http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element

var figure = document.querySelectorAll("#places figure");
var modalHeader = document.querySelectorAll(".modal h1");
var modalHider = document.querySelectorAll(".modal-hider");
var modals = document.querySelectorAll(".modal")

for (i=0; i<figure.length; i++) {
  figure[i].addEventListener("click", function() {
    for (j=0; j<figure.length; j++) {
      modals[j].style.display = "none";
    }   //hiding opened modal
    var modalId = this.dataset.modal;
    var modalToShow = document.querySelector(modalId);
    modalToShow.style.top = getOffset(this) + "px";
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

//modal positioning


//accordion

var accordionHeaders = document.querySelectorAll("dt a");
console.log(accordionHeaders);

for (i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener("click", function(event) {
    event.preventDefault();
    var accordionId = this.getAttribute("href");
    var textToShow = document.querySelector(accordionId);
    if (this.classList.contains("opened")) {
      textToShow.style.display = "none";
      this.classList.remove("opened");
    } else {
      var openedText = document.querySelectorAll(".opened");
      for (i = 0; i < openedText.length; i++) {
        openedText[i].parentElement.nextElementSibling.style.display = "none";
        openedText[i].classList.remove("opened");
      }
      textToShow.style.display = "block";
      this.classList.add("opened");
    }
  });
}

//navigation animation not working with click event

// function scrollTo(element, to, duration) {
//     if (duration <= 0) return;
//     var difference = to - element.scrollTop;
//     console.log(to, element.scrollTop);
//     var perTick = difference / duration * 10;
//     console.log(difference, perTick, duration);
//
//     setTimeout(function() {
//         element.scrollTop = element.scrollTop + perTick;
//         console.log(element.scrollTop, perTick + " perTick info");
//         if (element.scrollTop === to) return;
//         scrollTo(element, to, duration - 10);
//     }, 10);
// }
//
// var navigators = document.querySelectorAll("nav a");
//
// for (i=1; i < navigators.length; i++) {
//   navigators[i].onclick = function() {
//     var elmntId = this.getAttribute("href");
//     console.log(this.innerText);
//     var elmnt = document.querySelector(elmntId);
//     console.log(elmnt.offsetTop, elmnt.innerText);
//     scrollTo(document.body, elmnt.offsetTop, 600);
//   }
// }

// elmnt = document.getElementById("details");
// console.log(elmnt.offsetTop);
// scrollTo(document.body, elmnt.offsetTop, 600);
//
// setTimeout(function() {
//   elmnt2 = document.getElementById("places");
//   scrollTo(document.body, elmnt2.offsetTop, 600);
// }, 1000);

//navigation animation - working but I am not satisfied with effect it always starts from top, needs remake

// function animate(elem,style,unit,from,to,time,prop) {
//     if( !elem) return;
//     var start = new Date().getTime(),
//         timer = setInterval(function() {
//             var step = Math.min(1,(new Date().getTime()-start)/time);
//             if (prop) {
//                 elem[style] = (from+step*(to-from))+unit;
//             } else {
//                 elem.style[style] = (from+step*(to-from))+unit;
//             }
//             if( step == 1) clearInterval(timer);
//         },25);
//     elem.style[style] = from+unit;
// }
//
// // function above was taken from http://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery
// // answer by Ian
//
// var navigators = document.querySelectorAll("nav a");
//
// for (i=0; i < navigators.length; i++) {
//   navigators[i].addEventListener("click", function() {
//     var targetsId = this.getAttribute("href");
//     var target = document.querySelector(targetsId);
//     animate(document.body, "scrollTop", "", 0, target.offsetTop, 2000, true);
//   });
// }


//add TOUCH events to current click events for mobile?


// TO BE ADDED
//
// mobile nav animation
//
// modal and accordion animations
//
// do not forget anchor scrolling animation script!!
//
// Later, if time allows - form validation




});
