var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  console.log(slidePosition)
  SlideShow(slidePosition += n);
}

function SlideShow(n,type) {
  var i;
  var slides = document.getElementsByClassName("container");
  console.log(slides);
  console.log(slidePosition);
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slidePosition-1].style.display = "block";
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const smoothScrollingIsSupported = 'scrollBehavior' in document.documentElement.style;
const scrollOptions = {
    behavior: 'smooth',
    left: 0,
    top: 0,
};

function getScrollTop() {
    return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
}

function scrollToTop(e, duration = 750) {
    const start = window.performance.now();
    const scrollTop = getScrollTop();

    if (scrollTop === 0) return;

    /*
        For modern browsers
    */
    if (smoothScrollingIsSupported) {
        window.scrollTo(scrollOptions);
    }

    /*
        Mainly for IE & Safari
    */
    if (!smoothScrollingIsSupported) {
        const step = (timestamp) => {
            const elapsed = timestamp - start;
            const k = Math.round(elapsed / duration * 100) / 100;

            if (k <= 1.05) {
                window.scrollTo(scrollOptions.left, scrollTop * (1 - k) + scrollOptions.top * k);
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }
}

document.getElementById("top-scroll").addEventListener('click', scrollToTop, null);

var modalMen = document.getElementById("menModal");
var modalWomen = document.getElementById("womenModal");
var modalMixed = document.getElementById("mixedModal");
window.onclick = function(event) {
  if (event.target == modalMen) {
    modalMen.style.display = "none";
  }
  if (event.target == modalWomen) {
    modalWomen.style.display = "none";
  }
  if (event.target == modalMixed) {
    modalMixed.style.display = "none";
  }
}

var btnMen = document.getElementById("mens");
btnMen.onclick = function() {
  modalMen.style.display = "block";
}

var spanMen = document.getElementById("closeMen");
spanMen.onclick = function() {
  modalMen.style.display = "none";
}

var btnWomen = document.getElementById("womens");
btnWomen.onclick = function() {
  modalWomen.style.display = "block";
}

var spanWomen = document.getElementById("closeWomen");
spanWomen.onclick = function() {
  modalWomen.style.display = "none";
}

var btnMixed = document.getElementById("mixed");
btnMixed.onclick = function() {
  modalMixed.style.display = "block";
}

var closeMixed = document.getElementById("closeMixed");
closeMixed.onclick = function() {
  modalMixed.style.display = "none";
}
