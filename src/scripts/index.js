import "./../styles/style.scss";

//To show/hide hamburger menu from navbar

document.getElementById("navbar-icon").onclick = function() {
  var x = document.getElementById("menu");
  var y = document.getElementById("navbar-icon");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.innerHTML = "<div></div><div></div><div></div>"
  } else {
    x.style.display = "block";
    y.innerHTML = "<div class=first-line></div><div class=second-line></div>";
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
 // console.log('index', slideIndex, 'length', slides.length);
  setTimeout(showSlides, 500); 
}



/*
//Title caroussel testing

showSlides();

let numberOfImage = 1;
let classNameOfImage = `background-image-1`;

function showSlides() {
const titleContainter = document.getElementById('title');
titleContainter.classList.remove(classNameOfImage);
if (numberOfImage <4) {
  numberOfImage++;
} else {
  numberOfImage = 1;
}
console.log(classNameOfImage);
classNameOfImage = `background-image-${numberOfImage}`
titleContainter.classList.add(classNameOfImage);
  setTimeout(showSlides, 1000); 
}
*/
