let slideIndex = 1;

const SLIDE_WAIT_IN_SECONDS = 6 

// Wait function that returns a callback
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Recursive function that renders the slide at the slide index
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slides[slideIndex-1].style.opacity = 1;

  sleep(SLIDE_WAIT_IN_SECONDS * 1000).then(() => { 
    slideIndex += 1;
    showSlides(slideIndex)
  });
}


window.onload=function() {
    showSlides(slideIndex);
}






 