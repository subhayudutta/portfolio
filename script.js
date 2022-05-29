// navbar toggler
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-item');

menu.onclick = () => {
  menu.classList.toggle('fa-bars');
  navlist.classList.toggle('active');
};


// dark theme
function darkTheme() {
  document.querySelector("body").classList.toggle("body-dark");
  document.querySelector("navbar").classList.toggle("navav");
  document.querySelector(".banner").classList.toggle("ban-img");
  var moon = document.getElementById("moon");
  moon.classList.toggle("light-icon");
  moon.classList.toggle("uil-sun");
}



// project carousel
$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false
    }
  }
});



// typing 
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Student", "Front End Developer", "Coder", "Programmer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});



// contact form to goggle sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzENiDg6d8UXgSejh-9tmz7wXwjRn8GXw2XPcGvRUbek6aKZrCEv7XSOnhZFHimB0k/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("I have received your message. I will contact you soon. Thank you!"))
    .catch(error => console.error('Error!', error.message))
})
