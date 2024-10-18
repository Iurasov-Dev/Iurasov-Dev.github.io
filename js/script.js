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

// Show/hide controls when section is in view
document.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('contact');
    const controls = document.querySelector('.controls');

    const rect = skillsSection.getBoundingClientRect();

    // Показываем контроллер, если секция в видимой области
    controls.style.display = (rect.top < window.innerHeight && rect.bottom > 0) ? 'block' : 'none';
});

// Play sound on hover
function playSound() {
    const sound = document.getElementById('dingSound');
    sound.play();
}

// AOS (Animate on Scroll) Initialization
AOS.init({ offset: 0 });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Plexus Initialization
var plexus = new Plexus("plexus-test", {
    pointsSpeed: 0.4,
    pointsRadius: 1.1,
    pointsStartDistance: 60
});
var controls = new Controls("plexus-control", plexus);

// Cursor Initialization
var cursor = new Cursor(plexus, { pointsSpeed: 0.9 });

function animateText(element) {
    element.style.transform = 'rotate(-10deg)'; // Наклон влево
    setTimeout(() => {
        element.style.transform = 'rotate(10deg)'; // Наклон вправо
    }, 600); // Время ожидания перед изменением
    setTimeout(() => {
        element.style.transform = 'rotate(0deg)'; // Возврат в исходное состояние
    }, 1800); // Время ожидания перед возвратом
}

document.addEventListener('DOMContentLoaded', function() {
    const downloadLink = document.querySelector('.download-cv');
    
    if (window.innerWidth <= 884) { // Проверяем размер экрана
        downloadLink.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем скачивание
            alert('Скачивание недоступно на мобильных устройствах.'); // Сообщение для пользователя
        });
    }
});
