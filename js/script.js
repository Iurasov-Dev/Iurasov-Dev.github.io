// Hamburger Menu Functionality
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "DATA SCIENTIST",
    "DESIGNER",
    "DEVELOPER",
    "SEAFARER",
    "TILTED HORIZON"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;
let typewriterComplete = false;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        typewriterComplete = true;
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Show/hide controls
document.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('contact');
    const controls = document.querySelector('.controls');

    if (skillsSection && controls) {
        const rect = skillsSection.getBoundingClientRect();
        controls.style.display = (rect.top < window.innerHeight && rect.bottom > 0) ? 'block' : 'none';
    }
});

// Play sound on hover
function playSound() {
    const sound = document.getElementById('dingSound');
    if (sound) sound.play();
}

// AOS Initialization
AOS.init({ offset: 0 });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Функция для инициализации Plexus
function initPlexus() {
    console.log('Initializing Plexus...');
    try {
        var plexus = new Plexus("plexus-test", {
            pointsSpeed: 0.4,
            pointsRadius: 1.1,
            pointsStartDistance: 60
        });
        var controls = new Controls("plexus-control", plexus);
        var cursor = new Cursor(plexus, { pointsSpeed: 0.9 });
        console.log('Plexus initialized successfully');
        return plexus;
    } catch (error) {
        console.error('Error initializing Plexus:', error);
    }
}

// Ленивая загрузка iframe
function lazyLoadIframe() {
    const iframes = document.querySelectorAll('iframe[data-src]');
    iframes.forEach(iframe => {
        // Загружаем iframe только когда он в видимой области
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    iframe.src = iframe.dataset.src;
                    iframe.loading = 'eager';
                    observer.unobserve(iframe);
                }
            });
        });
        observer.observe(iframe);
    });
}

// Ждем полной загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // Запускаем Typewriter сразу
    console.log('Starting Typewriter...');
    typeWriter();
    
    // Запускаем Plexus с небольшой задержкой, чтобы typewriter успел начать
    setTimeout(() => {
        console.log('Initializing Plexus...');
        initPlexus();
    }, 300);
    
    // Настраиваем ленивую загрузку iframe
    lazyLoadIframe();
    
    // Показываем iframe только после загрузки всего контента
    window.addEventListener('load', function() {
        console.log('All resources loaded');
        // Инициализируем Plexus если еще не инициализирован
        if (typeof window.plexusInitialized === 'undefined') {
            initPlexus();
            window.plexusInitialized = true;
        }
    });
});

// Функция для анимации текста
function animateText(element) {
    element.style.transform = 'rotate(-10deg)';
    setTimeout(() => {
        element.style.transform = 'rotate(10deg)';
    }, 600);
    setTimeout(() => {
        element.style.transform = 'rotate(0deg)';
    }, 1800);
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
            }
        });
    }
});

// Резервный запуск Plexus через 2 секунды
setTimeout(() => {
    if (typeof window.plexusInitialized === 'undefined') {
        console.log('Fallback: Initializing Plexus after timeout');
        initPlexus();
        window.plexusInitialized = true;
    }
}, 2000);
