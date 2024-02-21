
// script to handle the slideshow and dot navigation
let currentImageIndex = 1; // Initialize to 1

function showImage(index) {
    const images = ['../images/about-1.jpg', '../images/about-2.jpg', '../images/about-3.jpg'];
    const aboutUsDiv = document.querySelector('.about-us-div');
    const dots = document.querySelectorAll('.dot-right');

    if (index >= 1 && index <= images.length) {
        currentImageIndex = index;
    } else {
        currentImageIndex = 1;
    }

    aboutUsDiv.style.backgroundImage = `url('${images[currentImageIndex - 1]}')`;

    // Update the active state of dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', currentImageIndex === index + 1);
    });
    
}

function nextSlide() {
    currentImageIndex = (currentImageIndex % 3) + 1;
    showImage(currentImageIndex);
}

// Set up click event listeners for each dot
const dots = document.querySelectorAll('.dot-right');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showImage(index + 1);
    });
});

setInterval(nextSlide, 3000); // Change image every 3 seconds
