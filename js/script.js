// ========== HAMBURGER MENU ==========
// Убрал inline onclick из HTML, навешиваем слушатели здесь
document.querySelector('.hamburg')?.addEventListener('click', () => {
    document.querySelector(".dropdown").style.transform = "translateY(0px)";
});

document.querySelector('.cancel')?.addEventListener('click', () => {
    document.querySelector(".dropdown").style.transform = "translateY(-500px)";
});

// ========== TYPEWRITER EFFECT ==========
const texts = ["DATA SCIENTIST", "DESIGNER", "DEVELOPER", "SEAFARER", "PHOTOGRAPHER"];
const textElements = document.querySelector(".typewriter-text");
let speed = 100;
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

window.onload = typeWriter;

// ========== SHOW/HIDE CONTROLS (через IntersectionObserver вместо scroll) ==========
const controls = document.querySelector('.controls');
const contactSection = document.getElementById('contact');

if (controls && contactSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            controls.style.display = entry.isIntersecting ? 'block' : 'none';
        });
    }, { threshold: 0.1 });
    observer.observe(contactSection);
}

// ========== SOUND & ANIMATION EFFECT ==========
function playSound() {
    document.getElementById('dingSound')?.play();
}

function animateText(element) {
    element.style.transform = 'rotate(-10deg)';
    setTimeout(() => element.style.transform = 'rotate(10deg)', 600);
    setTimeout(() => element.style.transform = 'rotate(0deg)', 1800);
}

// ========== AOS & SMOOTH SCROLL ==========
AOS.init({ offset: 0 });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ========== PLEXUS INITIALIZATION ==========
const plexus = new Plexus("plexus-test", {
    pointsSpeed: 0.4,
    pointsRadius: 1.1,
    pointsStartDistance: 60
});

new Controls("plexus-control", plexus);
new Cursor(plexus, { pointsSpeed: 0.9 });

// ========== DOWNLOAD CV BUTTONS ==========
document.addEventListener('DOMContentLoaded', function() {
    // Делегирование событий для кнопок
    document.querySelector('.rus-cv')?.addEventListener('click', function() {
        window.location.href = 'cv/IURASOV_VIACHESLAV_CV.docx';
    });

    document.querySelector('.eng-cv')?.addEventListener('click', function() {
        window.location.href = 'cv/VIACHESLAV_IURASOV_CV.docx';
    });
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
                }
            });
        });
        observer.observe(iframe);
    }
});
