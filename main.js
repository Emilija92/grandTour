/********nav***********/

let navBars = document.querySelector('.icon');
let topnav = document.querySelector('.topnav');

navBars.addEventListener('click', (e) => {
    e.preventDefault();
    topnav.classList.toggle('responsive');

    if(topnav.classList.contains('responsive')) {
        topnav.style.visibility = 'visible';
    } else {
        topnav.style.visibility = 'hidden';
    }
});

/*************slider*************/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
