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


