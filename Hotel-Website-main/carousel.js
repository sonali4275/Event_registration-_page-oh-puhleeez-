function toggleRegistration() {
    var registrationContainer = document.getElementById('registration-container');
    registrationContainer.style.display = (registrationContainer.style.display === 'none' || registrationContainer.style.display === '') ? 'block' : 'none';
}
function validateRegistrationForm() {
    // Get the form fields
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm-password");
  
    // Check if the username field is empty
    if (username.value.trim() === "") {
      alert("Username is required.");
      return false;
    }
  
    // Check if the email field is empty or in the wrong format
    if (email.value.trim() === "" || !email.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Check if the password field is empty or does not meet the minimum length requirement
    if (password.value.trim() === "" || password.value.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
  
    // Check if the confirm password field is empty or does not match the password field
    if (confirmPassword.value.trim() === "" || confirmPassword.value !== password.value) {
      alert("Passwords do not match.");
      return false;
    }
  
    // If all the checks pass, submit the form
    return true;
  }


var currentIndex = 0;
var totalImages = document.querySelectorAll('.carousel-image').length;
var intervalId;
var direction = 1; // 1 for forward, -1 for reverse

function showImage(index) {
    document.getElementById('image-carousel').style.transform = 'translateX(' + (-index * 100) + '%)';
}

function nextImage() {
    currentIndex += direction;

    // Check if we have reached the last image
    if (currentIndex >= totalImages - 1) {
        currentIndex = 0; // Set index to the first image for smooth forward transition
    }

    showImage(currentIndex);
}

function startAutomaticSlide() {
    intervalId = setInterval(function () {
        nextImage();
    }, 3000); // Adjust the time interval (in milliseconds) between automatic slides
}

function stopAutomaticSlide() {
    clearInterval(intervalId);
}

// Start automatic sliding when the page loads
startAutomaticSlide();

// Pause automatic sliding when the user interacts with the carousel
document.getElementById('carousel-container').addEventListener('mouseenter', stopAutomaticSlide);
document.getElementById('carousel-container').addEventListener('mouseleave', startAutomaticSlide);

function toggleAnswer(question) {
    var answer = question.nextElementSibling;
    var arrow = question.lastElementChild;
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        arrow.innerHTML = '&#9650;';
    } else {
        answer.style.display = 'none';
        arrow.innerHTML = '&#9660;';
    }
}
const carousel = document.getElementById("image-carousel");
const carouselChildren = [...carousel.children];

const moveCarousel = () => {
  const lastChild = carouselChildren[carouselChildren.length - 1];
  carousel.appendChild(lastChild);
};

const interval = setInterval(moveCarousel, 5000); // Move the carousel every 5 seconds

const carouselImages = document.querySelectorAll('.carousel-image');
const carouselContainer = document.getElementById('image-carousel');

let currentImageIndex = 0;

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= carouselImages.length) {
        currentImageIndex = 0;
    }
    updateCarousel();
}

function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = carouselImages.length - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${currentImageIndex * (100 / carouselImages.length)}%)`;
}

// Initialize the carousel
updateCarousel();

// Add event listeners for the navigation buttons
document.getElementById('prev-button').addEventListener('click', prevImage);
document.getElementById('next-button').addEventListener('click', nextImage);
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        question.nextElementSibling.classList.toggle('show');
    });
});