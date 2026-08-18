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

// ========== SHOW/HIDE CONTROLS ==========
document.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('contact');
    const controls = document.querySelector('.controls');

    if (skillsSection && controls) {
        const rect = skillsSection.getBoundingClientRect();
        controls.style.display = (rect.top < window.innerHeight && rect.bottom > 0) ? 'block' : 'none';
    }
});

// ========== SOUND EFFECT ==========
function playSound() {
    const sound = document.getElementById('dingSound');
    if (sound) {
        sound.play();
    }
}

/* Стили для кнопки-дропдауна Ихтис */
.ichthys-drop {
    background: #f8f9fa;
    border: 2px solid #2c3e50;
    border-radius: 12px;
    padding: 0;
    cursor: pointer;
    width: 100%;
    max-width: 450px;
    text-align: left;
    transition: all 0.3s ease;
    font-family: inherit;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.ichthys-drop:hover {
    border-color: #c0392b;
    box-shadow: 0 4px 16px rgba(192, 57, 43, 0.2);
    transform: translateY(-2px);
}

.ichthys-drop__head {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 20px;
    font-size: 1rem;
    font-weight: 600;
    color: #2c3e50;
    background: #ffffff;
}

.ichthys-drop__head svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    fill: #c0392b;
}

.ichthys-drop__head svg use {
    fill: #c0392b;
}

.ichthys-drop__backData {
    color: #7f8c8d;
    font-weight: 400;
    font-size: 0.9rem;
}

.ichthys-drop__body {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.5s ease, opacity 0.4s ease, padding 0.3s ease;
    background: #fafafa;
    border-top: 0px solid #ddd;
}

.ichthys-drop__body.open {
    max-height: 400px;
    opacity: 1;
    padding: 16px 20px;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #ddd;
}

.ichthys-drop__wrap p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #34495e;
}

/* Анимация для заголовка при наведении */
.ichthys-drop:hover .ichthys-drop__head {
    color: #c0392b;
}

.ichthys-drop:hover .ichthys-drop__backData {
    color: #c0392b;
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
