import "./../styles/style.scss";

//To show/hide hamburger menu from navbar

document.getElementById("navbar-icon").onclick = function() {
  var x = document.getElementById("menu");
  var y = document.getElementById("navbar-icon");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.innerHTML = "<div></div><div></div><div></div>";
  } else {
    x.style.display = "block";
    y.innerHTML = "<div class=first-line></div><div class=second-line></div>";
  }
};

//To hide menu when clicking on window or menu links;

let menuLinks = document.getElementsByClassName('navbar-link');
for (let i = 0; i <menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", hideMenu);
}

document.getElementById('siteContent').addEventListener("click", hideMenu);

function hideMenu() {
  const x = document.getElementById("menu");
  const y = document.getElementById("navbar-icon");
  if (x.style.display === "block") {
  x.style.display = "none";
  y.innerHTML = "<div></div><div></div><div></div>";
  } 
}

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
let clientsCarousel = setInterval(showSlides, 1500);

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length - 2) {
    slideIndex = 1;
  }
  if (slideIndex <= slides.length - 2) {
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
    slides[slideIndex + 1].style.display = "block";
  }
  //setTimeout(showSlides, 500);
}

// Images from services to show when scrolling down

let imageServices = document.getElementsByClassName('individual-service');

var observer = new IntersectionObserver(function(entries) {
  if(entries[0].isIntersecting === true) {
      console.log('Element has just become visible in screen');
      for (let i = 0; i <imageServices.length; i++) {
        imageServices[i].classList.add('is-visible');
      }
      }
}, { threshold: [0] });

observer.observe(document.querySelector(".individual-service"));

// PREVIOUS ATTEMPTS

// 1.
//This code is an alternative to the above. Instead of changing the display of the images, I would change the src of the three images.
// This will make them all the time displayable and wouldn't make the window to jump up when scrolling down.
// Due to the bundler from parcelJS changing the images folders and names, it was not possible to use this solution.

// const arrayOfClientImages = [
//   "atelier38.png",
//   "ateliermedions.png",
//   "b.leza.jpg",
//   "contemporanea.png",
//   "CVDB.jpg"
// ];
// let imageIndex = 0;
// let clientsCarousel = setInterval(showImages, 500);

// function showImages() {
//   let firstImage = document.getElementById("firstImage");
//   let secondImage = document.getElementById("secondImage");
//   let thirdImage = document.getElementById("thirdImage");
//   if (imageIndex < arrayOfClientImages.length - 3) {
//     imageIndex++;
//   } else {
//     imageIndex = 0;
//   }
//   firstImage.alt = arrayOfClientImages[imageIndex];
//   secondImage.alt = arrayOfClientImages[imageIndex + 1];
//   thirdImage.alt = arrayOfClientImages[imageIndex + 2];
//   firstImage.src = `./../../images/clients/${arrayOfClientImages[imageIndex]}`;
//   secondImage.src = `./../../images/clients/${
//     arrayOfClientImages[imageIndex + 1]
//   }`;
//   thirdImage.src = `./../../images/clients/${
//     arrayOfClientImages[imageIndex + 2]
//   }`;
// }

/* 
2.
The following code is if I wanted to have a carousel of images in the first container. I opted to take this option out since some images
// may take some time to load what could compromise the first impression when accessing the site.

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
