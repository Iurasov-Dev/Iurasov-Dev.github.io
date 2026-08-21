// ========== HAMBURGER MENU ==========
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// ========== TYPEWRITER EFFECT ==========
const texts = [
    "DATA SCIENTIST",
    "DESIGNER",
    "DEVELOPER", 
    "SEAFARER",
    "PHOTOGRAPHER"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
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

// ========== INITIALIZE TYPEWRITER ==========
window.onload = typeWriter;

// ========== SHOW/HIDE CONTROLS (только на Home, отключено на мобильных) ==========
function isMobile() {
    return window.innerWidth <= 884;
}

function updateControlsVisibility() {
    const controls = document.querySelector('.controls');
    if (!controls) return;

    // На мобильных - всегда скрыты
    if (isMobile()) {
        controls.style.display = 'none';
        return;
    }

    // На десктопе - показываем только на Home
    const homeSection = document.getElementById('home');
    if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        controls.style.display = (rect.top < window.innerHeight && rect.bottom > 0) ? 'block' : 'none';
    }
}

document.addEventListener('scroll', updateControlsVisibility);
document.addEventListener('DOMContentLoaded', updateControlsVisibility);
window.addEventListener('resize', updateControlsVisibility);

// ========== SOUND EFFECT ==========
function playSound() {
    const sound = document.getElementById('dingSound');
    if (sound) {
        sound.play();
    }
}

function animateText(element) {
    // Ваша существующая функция
    element.style.transform = 'scale(1.1)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 200);
}

// ========== AOS INITIALIZATION ==========
AOS.init({ offset: 0 });

// ========== SMOOTH SCROLL ==========
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

// ========== PLEXUS INITIALIZATION ==========
var plexus = new Plexus("plexus-test", {
    pointsSpeed: 0.4,
    pointsRadius: 1.1,
    pointsStartDistance: 60
});

var controls = new Controls("plexus-control", plexus);
var cursor = new Cursor(plexus, { pointsSpeed: 0.9 });

// ========== ANIMATE TEXT ==========
function animateText(element) {
    element.style.transform = 'rotate(-10deg)';
    setTimeout(() => {
        element.style.transform = 'rotate(10deg)';
    }, 600);
    setTimeout(() => {
        element.style.transform = 'rotate(0deg)';
    }, 1800);
}

// ========== DOWNLOAD CV BUTTONS ==========
document.addEventListener('DOMContentLoaded', function() {
    const rusButton = document.querySelector('.rus-cv');
    const engButton = document.querySelector('.eng-cv');
    
    if (rusButton) {
        rusButton.addEventListener('click', function(event) {
            if (window.innerWidth <= 884) {
                event.preventDefault();
                alert('Downloading is not available on mobile devices.');
            } else {
                window.location.href = 'cv/IURASOV_VIACHESLAV_CV.docx';
            }
        });
    }
    if (engButton) {
        engButton.addEventListener('click', function(event) {
            if (window.innerWidth <= 884) {
                event.preventDefault();
                alert('Downloading is not available on mobile devices.');
            } else {
                window.location.href = 'cv/VIACHESLAV_IURASOV_CV.docx';
            }
        });
    }
    
});

// ===== ТОГГЛ ДЛЯ КНОПКИ ИХТИС (как CV) =====
function toggleIchthysDrop(event) {
    event.stopPropagation();
    const button = event.currentTarget;
    button.classList.toggle('active');
}

// Закрытие при клике вне кнопки
document.addEventListener('click', function(e) {
    const drops = document.querySelectorAll('.ichthys-cv-btn');
    drops.forEach(function(drop) {
        if (!drop.contains(e.target)) {
            drop.classList.remove('active');
        }
    });
});

// Закрытие при нажатии ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const drops = document.querySelectorAll('.ichthys-cv-btn.active');
        drops.forEach(function(drop) {
            drop.classList.remove('active');
        });
    }
});

// ========== LAZY LOAD IFRAME ==========
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.querySelector('.solar-system-iframe');
    
    if (iframe && iframe.dataset.src) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    iframe.src = iframe.dataset.src;
                    observer.unobserve(iframe);
                    console.log('Solar System iframe loaded');
                }
            });
        });
        
        observer.observe(iframe);
    }
});

// ===== СМЕНА ИЗОБРАЖЕНИЯ ДЛЯ МОБИЛЬНЫХ =====
function updateProfileImage() {
    const img = document.getElementById('profile-image');
    if (!img) return;
    
    const isMobile = window.innerWidth <= 884;
    
    if (isMobile) {
        img.src = 'img/Снимок.PNG';
    } else {
        img.src = 'img/IMAG0297.jpg';
    }
}

// При загрузке
document.addEventListener('DOMContentLoaded', updateProfileImage);

// При изменении размера окна
window.addEventListener('resize', updateProfileImage);
