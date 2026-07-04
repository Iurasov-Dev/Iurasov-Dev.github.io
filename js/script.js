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
let typewriterComplete = false;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        typewriterComplete = true;
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

// Функция для инициализации Plexus
function initPlexus() {
    console.log('Initializing Plexus...');
    var plexus = new Plexus("plexus-test", {
        pointsSpeed: 0.4,
        pointsRadius: 1.1,
        pointsStartDistance: 60
    });
    var controls = new Controls("plexus-control", plexus);
    var cursor = new Cursor(plexus, { pointsSpeed: 0.9 });
    return plexus;
}

// Ждем полной загрузки страницы
window.addEventListener('load', function() {
    console.log('Page fully loaded');
    
    // Запускаем Typewriter
    console.log('Starting Typewriter...');
    typeWriter();
    
    // Ждем завершения первого цикла typewriter, затем запускаем Plexus
    const checkTypewriter = setInterval(() => {
        if (typewriterComplete) {
            clearInterval(checkTypewriter);
            console.log('Typewriter complete, initializing Plexus...');
            // Небольшая задержка перед запуском Plexus для плавности
            setTimeout(() => {
                initPlexus();
            }, 500);
        }
    }, 100);
});

// Функция для анимации текста
function animateText(element) {
    element.style.transform = 'rotate(-10deg)'; // Наклон влево
    setTimeout(() => {
        element.style.transform = 'rotate(10deg)'; // Наклон вправо
    }, 600); // Время ожидания перед изменением
    setTimeout(() => {
        element.style.transform = 'rotate(0deg)'; // Возврат в исходное состояние
    }, 1800); // Время ожидания перед возвратом
}

// Обработчики для кнопок скачивания CV
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('.download-cv');
    const seamanButton = document.querySelector('.seaman-cv');

    if (downloadButton) {
        downloadButton.addEventListener('click', function(event) {
            if (window.innerWidth <= 884) {
                event.preventDefault();
                alert('Downloading is not available on mobile devices.');
            } else {
                window.location.href = 'cv/VIACHESLAV IURASOV.docx';
            }
        });
    }

    if (seamanButton) {
        seamanButton.addEventListener('click', function(event) {
            if (window.innerWidth <= 884) {
                event.preventDefault();
                alert('Downloading is not available on mobile devices.');
            } else {
                window.location.href = 'cv/ВЯЧЕСЛАВ ЮРАСОВ.docx';
                window.location.href = 'cv/ЮРАСОВ ВЯЧЕСЛАВ.docx';
            }
        });
    }
});

// Альтернативный метод: если по какой-то причине typewriter не запустился,
// запускаем Plexus через 5 секунд как резервный вариант
setTimeout(() => {
    if (typeof window.plexusInitialized === 'undefined') {
        console.log('Fallback: Initializing Plexus after timeout');
        initPlexus();
        window.plexusInitialized = true;
    }
}, 8000);
