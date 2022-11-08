function showMenu() {
    document.querySelector('#nav-links').style.right = "0";
}
function hideMenu() {
    document.querySelector('#nav-links').style.right = "-200px";
}

// Slide show ........................................................................
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000); // Change image every 6 seconds
}

