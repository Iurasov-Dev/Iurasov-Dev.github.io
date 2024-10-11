document.addEventListener('DOMContentLoaded', function () {
    // Функции для работы с меню
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

    // Инициализация AOS
    AOS.init({ offset: 0 });

    // Функция для воспроизведения звука
    function playSound() {
        const sound = document.getElementById('dingSound');
        sound.play();
    }

    // Эффект печати
    const texts = ["DATA SCIENTIST", "DESIGNER", "DEVELOPER", "SEAFARER", "TILTED HORIZON"];
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

    // Обработчики для кликов на иконки меню
    const hamburgIcon = document.querySelector(".hamburg");
    hamburgIcon.addEventListener("click", hamburg);

    const cancelIcon = document.querySelector(".cancel");
    cancelIcon.addEventListener("click", cancel);
    
    // Закрытие меню при клике вне него
    window.addEventListener('click', function(event) {
        const navbar = document.querySelector(".dropdown");
        if (!navbar.contains(event.target) && !hamburgIcon.contains(event.target)) {
            cancel();
        }
    });

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

    // Привязка события воспроизведения звука
    const soundElement = document.querySelector('span[data-aos="fade-up"]');
    if (soundElement) {
        soundElement.onmouseover = playSound;
    }

    // Наблюдатель для анимации (если потребуется)
    const animatedImage = document.getElementById('animatedImage');
    const options = { root: null, threshold: 0.1 };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedImage.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(animatedImage);
    
    // Запустим эффект печати
    typeWriter();
});
