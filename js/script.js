// Hamburger Menu Functionality
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    if (navbar) {
        navbar.style.transform = "translateY(0px)";
    }
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    if (navbar) {
        navbar.style.transform = "translateY(-500px)";
    }
}

// Typewriter Effect
const texts = [
    "DATA SCIENTIST",
    "DESIGNER",
    "DEVELOPER",
    "SEAFARER",
    "TILTED HORIZON"
];

let speed = 50; // скорость печати
let textIndex = 0;
let characterIndex = 0;
const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
    if (!textElement) return;

    if (characterIndex < texts[textIndex].length) {
        // Более аккуратное добавление символа
        textElement.textContent = texts[textIndex].substring(0, characterIndex + 1);
        characterIndex++;
        requestAnimationFrame(typeWriter);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (!textElement) return;

    if (textElement.textContent.length > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        requestAnimationFrame(eraseText);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Play sound on hover
function playSound() {
    const sound = document.getElementById('dingSound');
    if (sound) {
        sound.play().catch(e => console.log('Autoplay blocked', e));
    }
}

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

// Download buttons
document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.querySelector('.download-cv');
    const seamanButton = document.querySelector('.seaman-cv');

    const handleDownload = (event, path) => {
        if (window.innerWidth <= 884) {
            event.preventDefault();
            alert('Downloading is not available on mobile devices.');
        } else {
            window.location.href = path;
        }
    };

    if (downloadButton) {
        downloadButton.addEventListener('click', (e) => handleDownload(e, 'cv/VIACHESLAV IURASOV.docx'));
    }

    if (seamanButton) {
        seamanButton.addEventListener('click', (e) => handleDownload(e, 'cv/ЮРАСОВ ВЯЧЕСЛАВ.docx'));
    }

    // Запускаем typewriter чуть позже, чтобы не мешать первоначальной отрисовке
    setTimeout(() => {
        if (textElement) {
            typeWriter();
        }
    }, 600);
});

// Инициализация тяжёлых библиотек — лучше делать в конце, и только если элементы есть
document.addEventListener('load', () => {
    try {
        AOS.init({ offset: 0 });
    } catch (e) {
        console.warn('AOS not available', e);
    }

    try {
        const plexusContainer = document.getElementById("plexus-test");
        if (plexusContainer) {
            var plexus = new Plexus("plexus-test", {
                pointsSpeed: 0.4,
                pointsRadius: 1.1,
                pointsStartDistance: 60
            });
            var controls = new Controls("plexus-control", plexus);
            var cursor = new Cursor(plexus, { pointsSpeed: 0.9 });
        }
    } catch (e) {
        console.warn('Plexus not available or container missing', e);
    }
});
