document.addEventListener("DOMContentLoaded", function(){

//navigation code for mobiles

var button = document.querySelector("#nav-button");
var navigation = document.querySelector(".menu");
var hider = document.querySelector("#hider")
var menuLinks = document.querySelectorAll("nav a");


function hideMobileMenu() {
  navigation.classList.add("hidden");
  hider.classList.add("hidden");
  button.classList.remove("hidden");
}

function test_match_media_with_listener(){
  var mq = window.matchMedia("(max-width: 650px)");
  mq.addListener(WidthChange);
  WidthChange(mq);

  function WidthChange(mediaQuery) {
    if(mediaQuery.matches) {
      navigation.classList.add("hidden");
      button.classList.remove("hidden");
      for (i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("click", hideMobileMenu);
      }
    } else {
      for (i = 0; i < menuLinks.length; i++) {
        menuLinks[i].removeEventListener("click", hideMobileMenu);
      }
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
  hideMobileMenu();
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
var photos = document.querySelectorAll("#places figure");

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

//highlithing photos titles when hovering over photos
for (i = 0; i < photos.length; i++) {
  photos[i].addEventListener("mouseenter", function() {
    this.querySelector("figcaption").style.backgroundColor = "lightblue";
  });
  photos[i].addEventListener("mouseleave", function() {
    this.querySelector("figcaption").style.backgroundColor = "gold";
  });
}

//modal code

var figure = document.querySelectorAll("#places figure");
var modalHeader = document.querySelectorAll(".modal h2");
var modalHider = document.querySelectorAll(".modal-hider");
var modals = document.querySelectorAll(".modal");
var cover = document.querySelector(".modal-cover");

for (i=0; i<figure.length; i++) {
  figure[i].addEventListener("click", function() {
    for (j=0; j<figure.length; j++) {
      modals[j].style.display = "none";
    }   //hiding opened modal
    var modalId = this.dataset.modal;
    var modalToShow = document.querySelector(modalId);
    modalToShow.style.top = window.scrollY + 15 + "px";
    var bodyRect = document.body.getBoundingClientRect();
    var coverHeight = bodyRect.height;
    cover.style.height = coverHeight + "px";
    cover.style.display = "block";
    modalToShow.style.display = "block";
  });
}

function hideModal(element) {
  for (i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function() {
        cover.style.display = "none";
        this.parentElement.style.display = "none";
    });
  }
}

hideModal(modalHeader);
hideModal(modalHider);

cover.addEventListener('click', function() {
  cover.style.display = "none";
  for (i=0; i<modals.length; i++) {
    modals[i].style.display = "none";
  }
})

//accordion

var accordionHeaders = document.querySelectorAll("dt a");

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

//validation

function validate(e) {
  var formDiv = document.querySelector('#form .container');
  var error = document.querySelector('#error');
  var validated = true;

  var name = document.querySelector('#name');
  var email = document.querySelector('#email');
  var country = document.querySelector('#country');
  var info = document.querySelector('#info');
  var emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var senderName = e.target.name.value;
  var senderEmail = e.target.email.value;
  var senderCountry = e.target.country.value;
  var senderInfo = e.target.info.value;

  error.innerHTML = '';
  var fields = [name, email, country, info];

  for(i = 0; i < fields.length; i++) {
    fields[i].classList.remove('invalid-input');
  }

  if (senderName.length < 3) {
    error.innerHTML += "<p>Please write your name</p>";
    validated = false;
    name.classList.add('invalid-input');
  }
  if (!emailRE.test(senderEmail)) {
    error.innerHTML += "<p>Please write a valid email</p>";
    validated = false;
    email.classList.add('invalid-input');
  }
  if (senderCountry.length < 3) {
    error.innerHTML += "<p>Please write your country</p>";
    validated = false;
    country.classList.add('invalid-input');
  }
  if (senderInfo.length < 10) {
    var errorInfo = senderInfo.length === 0 ? "<p>Please write a message</p>" : "<p>Your message seems to be too short</p>";
    error.innerHTML += errorInfo;
    validated = false;
    info.classList.add('invalid-input');
  }

  if(validated === false) {
    error.style.border = "2px solid red";
    e.preventDefault();
  }

}

var form = document.querySelector('.register-form');

form.addEventListener('submit', function(e) {
  validate(e);
})





});
