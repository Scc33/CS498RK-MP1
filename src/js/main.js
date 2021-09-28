var slidePosition = 1;
SlideShow(slidePosition);

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

window.onscroll = function() {navScrollFunction()};

var navbar = document.getElementById("navbar");

function navScrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 5px";
    document.getElementById("navbar").style.fontSize = "16px";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar").style.fontSize = "25px";
  }
}

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
