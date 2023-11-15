let slideIndex = 1;

const SLIDE_WAIT_IN_SECONDS = 6 

const images = [
    "url('https://www.w3schools.com/howto/img_woods.jpg')",
    "url('https://www.w3schools.com/howto/img_5terre.jpg')",
    "url('https://www.w3schools.com/howto/img_lights.jpg')",
]

// Wait function that returns a callback
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Recursive function that renders the slide at the slide index
function showSlides(n) {
    let i = images.length;
    if (slideIndex >= i) {
        slideIndex = 0
    }
    let slide = document.getElementById("slideDiv");
    slide.style.backgroundImage = images[slideIndex];

    sleep(SLIDE_WAIT_IN_SECONDS * 1000).then(() => { 
        slideIndex += 1;
        showSlides(slideIndex)
    });
}

//TEST*****
var today = new Date();
var dd = today.getDate()+1;
var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("datefield").setAttribute("min", today);




window.onload=function() {
    sleep(SLIDE_WAIT_IN_SECONDS * 1000).then(() => { 
        slideIndex += 1;
        showSlides(slideIndex)
    });
}






 
