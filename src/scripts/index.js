import "./../styles/style.scss";

//To show/hide hamburger menu from navbar

document.getElementById("navbar-icon").onclick = function() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};


//To add less opacity in navbar when scrolling down

let scrollpos = window.scrollY;
let navbar = document.getElementById("nav");

function add_class_on_scroll() {
  navbar.classList.add("lessOpacity");
}

function remove_class_on_scroll() {
  navbar.classList.remove("lessOpacity");
}

window.addEventListener("scroll", function() {
  scrollpos = window.scrollY;

  if (scrollpos > 20) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});


//Client logos caroussel

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length-2) {slideIndex = 1;}
  if (slideIndex <= slides.length-2) {
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex].style.display = "block";
  slides[slideIndex+1].style.display = "block";
  }
  console.log('index', slideIndex, 'length', slides.length);
  setTimeout(showSlides, 1000); // Change image every 2 seconds
}
