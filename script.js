function hamburg() {
    const navbar = document.querySelector(".dropdown");
    if (navbar) {
        navbar.style.transform = "translateY(0)";
        document.body.style.overflow = "hidden"; // Блокируем прокрутку основного контента
    }
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    if (navbar) {
        navbar.style.transform = "translateY(-500px)";
        document.body.style.overflow = "auto"; // Восстанавливаем прокрутку
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

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0; // Исправлено имя переменной на 'characterIndex'

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

function toggleSections() {
    const aboutSection = document.querySelector('#about');
    const skillsSection = document.querySelector('#skills');

    if (aboutSection && skillsSection) {
        // Переключаем видимость секций
        const isVisible = aboutSection.style.display === 'flex';
        aboutSection.style.display = isVisible ? 'none' : 'flex';
        skillsSection.style.display = isVisible ? 'none' : 'flex';
    }
}

window.onload = () => {
    // Запускаем эффект печати
    typeWriter();

    const hamburgIcon = document.querySelector(".hamburg");
    const cancelIcon = document.querySelector(".cancel");
    const projectButton = document.querySelector('button'); // Предполагается, что у вас только одна кнопка

    if (hamburgIcon) {
        hamburgIcon.addEventListener("click", hamburg); // Добавляем обработчик клика
    }

    if (cancelIcon) {
        cancelIcon.addEventListener("click", cancel); // Добавляем обработчик клика
    }

    // Закрытие меню при клике вне него
    window.addEventListener('click', function(event) {
        const navbar = document.querySelector(".dropdown");
        if (navbar && !navbar.contains(event.target) && hamburgIcon && !hamburgIcon.contains(event.target)) {
            cancel();
        }
    });

    // Добавляем обработчик для кнопки проект
    if (projectButton) {
        projectButton.addEventListener('click', toggleSections);
    }
};
