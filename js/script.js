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
    "PHOTOGRRAPHER"
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
