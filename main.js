let slideIndex = 1;

const SLIDE_WAIT_IN_SECONDS = 1.5 

const images = [
    "url('Assets/louis-hansel-tLbGQ1YazV8-unsplash.jpg')",
    "url('Assets/louis-hansel-VhqBh21uz0k-unsplash.jpg')",
    "url('Assets/orkun-orcan-epQ32Sf0_XQ-unsplash.jpg')",
    "url('Assets/paul-griffin-WWST6E8LxeE-unsplash.jpg')",
    "url('Assets/sebastian-schuppik-H7xTpvBjJS4-unsplash.jpg')",
    "url('Assets/toa-heftiba-PSzZSuQsoNU-unsplash.jpg')",
    "url('Assets/urban-gyllstrom-MaWMfm-HCqQ-unsplash.jpg')",
    "url('Assets/alexandra-tran-fWfRv-qdlUU-unsplash.jpg')",
    "url('Assets/casey-lee-awj7sRviVXo-unsplash.jpg')",
    "url('Assets/ivan-stern-LOLSb7m6XkU-unsplash.jpg')",
    "url('Assets/justus-menke-62XLglIrTJc-unsplash.jpg')",
    "url('Assets/karol-chomka-YY-phoTAZjw-unsplash.jpg')",
    "url('Assets/louis-hansel-HF16IxB_tO4-unsplash.jpg')"
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

    console.log(images[slideIndex])
    sleep(SLIDE_WAIT_IN_SECONDS * 1000).then(() => { 
        slideIndex += 1;
        showSlides(slideIndex)
    });
}




window.onload=function() {
    showSlides(slideIndex)
}






 