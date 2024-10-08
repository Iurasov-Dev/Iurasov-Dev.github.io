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
    "SEAFARER"
];

let speed  = 100;
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

window.onload = () => {
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
}
