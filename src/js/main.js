var slidePosition = 0;
SlideShow(slidePosition);

function plusSlides(n) {
  SlideShow(slidePosition += n);
}

function SlideShow(n,type) {
  var i;
  let slides = document.getElementsByClassName("container");
  if (n >= slides.length) {
    slidePosition = 0;
  } else if (n < 0) {
    slidePosition = slides.length-1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slidePosition].style.display = "block";
}

window.onscroll = () => {
  let navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = "5px 5px";
    navbar.style.fontSize = "16px";
  } else {
    navbar.style.padding = "20px 10px";
    navbar.style.fontSize = "25px";
  }
  sections = ["anchor-home","anchor-events","anchor-medals","anchor-records","anchor-highlights"];
  var i;
  for (i = 0; i < sections.length; i++) {
    var sectionAnchor = document.getElementById(sections[i]);
    var section = document.getElementById(sections[i].substring(7,));
    var boundingRect = section.getBoundingClientRect();
    var centerY = window.innerHeight / 2;
    console.log(centerY);
    if (boundingRect.y <= centerY && boundingRect.y + boundingRect.height > centerY) {
      sectionAnchor.classList.add('active');
    } else {
      sectionAnchor.classList.remove('active');
    }
  }
};

let modalMen = document.getElementById("menModal");
let modalWomen = document.getElementById("womenModal");
let modalMixed = document.getElementById("mixedModal");
window.onclick = (event) => {
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

let btnMen = document.getElementById("mens");
btnMen.onclick = () => {
  modalMen.style.display = "block";
}

let spanMen = document.getElementById("closeMen");
spanMen.onclick = () => {
  modalMen.style.display = "none";
}

let btnWomen = document.getElementById("womens");
btnWomen.onclick = () => {
  modalWomen.style.display = "block";
}

let spanWomen = document.getElementById("closeWomen");
spanWomen.onclick = () => {
  modalWomen.style.display = "none";
}

let btnMixed = document.getElementById("mixed");
btnMixed.onclick = () => {
  modalMixed.style.display = "block";
}

let closeMixed = document.getElementById("closeMixed");
closeMixed.onclick = () => {
  modalMixed.style.display = "none";
}
