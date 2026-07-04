// Hamburger Menu Functionality
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Улучшенный Typewriter Effect
const texts = [
    "DATA SCIENTIST",
    "DESIGNER",
    "DEVELOPER",
    "SEAFARER",
    "TILTED HORIZON"
];

let speed = 50; // Увеличенная скорость
let textIndex = 0;
let characterIndex = 0;
let isTyping = false;
const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        requestAnimationFrame(typeWriter);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        requestAnimationFrame(eraseText);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(() => {
            isTyping = true;
            typeWriter();
        }, 500);
    }
}

// Запускаем эффект после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Добавляем задержку, чтобы дать странице загрузиться
    setTimeout(() => {
        isTyping = true;
        typeWriter();
    }, 500);
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
    const downloadButton = document.querySelector('.download-cv');
    const seamanButton = document.querySelector('.seaman-cv');

    downloadButton.addEventListener('click', function(event) {
        if (window.innerWidth <= 884) {
            event.preventDefault();
            alert('Downloading is not available on mobile devices.');
        } else {
            window.location.href = 'cv/VIACHESLAV IURASOV.docx';
        }
    });

    seamanButton.addEventListener('click', function(event) {
        if (window.innerWidth <= 884) {
            event.preventDefault();
            alert('Downloading is not available on mobile devices.');
        } else {
            window.location.href = 'cv/ЮРАСОВ ВЯЧЕСЛАВ.docx';
        }
    });
});
