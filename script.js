function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0)";
    document.body.style.overflow = "hidden"; // Блокируем прокрутку основного контента
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
    document.body.style.overflow = "auto"; // Восстанавливаем прокрутку
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
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
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
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

function toggleSections() {
    const aboutSection = document.querySelector('#about');
    const skillsSection = document.querySelector('#skills');

    // Переключаем видимость секций
    if (aboutSection.style.display === 'flex') {
        aboutSection.style.display = 'none';
        skillsSection.style.display = 'none';
    } else {
        aboutSection.style.display = 'flex';
        skillsSection.style.display = 'flex';
    }
}

window.onload = () => {
    // Запускаем эффект печати
    typeWriter();

    const hamburgIcon = document.querySelector(".hamburg");
    hamburgIcon.addEventListener("click", hamburg); // Добавляем обработчик клика

    const cancelIcon = document.querySelector(".cancel");
    cancelIcon.addEventListener("click", cancel); // Добавляем обработчик клика

    // Закрытие меню при клике вне него
    window.addEventListener('click', function(event) {
        const navbar = document.querySelector(".dropdown");
        if (!navbar.contains(event.target) && !hamburgIcon.contains(event.target)) {
            cancel();
        }
    });

    function playSound() {
        const sound = document.getElementById('dingSound');
        sound.play();
    }

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init({ offset: 0 });

        // Плавная прокрутка
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // Анимация для изображения при скролле
        document.addEventListener('DOMContentLoaded', function() {
            const animatedImage = document.getElementById('animatedImage');

            const options = {
                root: null,
                threshold: 0.1
            };

            const callback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animatedImage.classList.add('animate__animated', 'animate__fadeIn');
                    }
                });
            };

            const observer = new IntersectionObserver(callback, options);
            observer.observe(animatedImage);
        });
    
    // Добавляем обработчик для кнопки проект
    const projectButton = document.querySelector('button'); // Предполагается, что у вас только одна кнопка
    projectButton.addEventListener('click', toggleSections);
};
