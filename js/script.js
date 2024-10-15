// Hamburger Menu Functionality
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)"; // Show the dropdown menu
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)"; // Hide the dropdown menu
}


// Typewriter Effect
const texts = [
    "DATA SCIENTIST",
    "DESIGNER",
    "DEVELOPER",
    "SEAFARER",
    "TILTED HORIZON"
];

let speed = 100; // Speed of typing effect
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0; // Current text index
let characterIndex = 0; // Current character index

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed); 
    } else {
        setTimeout(eraseText, 1000); // Wait before starting to erase
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1); // Remove last character
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length; // Move to the next text
        characterIndex = 0; // Reset character index
        setTimeout(typeWriter, 500); // Wait before starting to type
    }
}

// Start the typewriter effect on window load
window.onload = typeWriter;

document.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('contact');
    const controls = document.querySelector('.controls');

    // Получаем положение секции
    const rect = skillsSection.getBoundingClientRect();
    
    console.log(rect.top, rect.bottom); // Отладочное сообщение

    // Проверяем, попадает ли секция в видимую область
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        controls.style.display = 'block'; // Показываем контроллер
    } else {
        controls.style.display = 'none'; // Скрываем контроллер
    }
});


function playSound() {
    const sound = document.getElementById('dingSound');
    sound.play();
}

AOS.init({ offset: 0 });

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Анимация для изображения при скролле
document.addEventListener('DOMContentLoaded', function() {
    const animatedImage = document.getElementById('animatedImage');
    const options = { root: null, threshold: 0.1 };
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedImage.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(animatedImage);
});

var plexus = new Plexus("plexus-test", {
    pointsSpeed: 0.3,
    pointsRadius: 1.1,
    pointsStartDistance: 60
});
var controls = new Controls("plexus-control", plexus);
// Initialize the Cursor
var cursor = new Cursor(plexus, { pointsSpeed: 1 });

// Optionally, you can add more features or interactions here
// For example, handling the pause and resume functionality for the cursor
function toggleCursorActivity() {
    cursor.config.active = !cursor.config.active;
}

// Example: Add a button to toggle cursor activity
document.getElementById("toggle-cursor").addEventListener("click", toggleCursorActivity);
