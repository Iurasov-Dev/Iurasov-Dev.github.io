const C = document.querySelector("canvas"),
      $ = C.getContext("2d"),
      W = C.width = innerWidth,
      H = C.height = innerHeight;

const str = "A+B7Z-A1B=C4D E5F G6H I8J K9L M!N O?P Q.R S:T;U V,W",
      matrix = str.split('');

let font = 11,
    col = W / font,
    arr = [];

// Заполняем массив единицами
for (let i = 0; i < col; i++) arr[i] = 1;

function draw() {
    // Цвет фона для эффекта затухания
    $.fillStyle = "rgba(0, 0, 0, .05)";
    $.fillRect(0, 0, W, H);

    // Цвет шрифта
    $.fillStyle = "#0f0";
    $.font = font + "px system-ui";

    for (let i = 0; i < arr.length; i++) {
        // Случайный набор символов
        let txt = matrix[Math.floor(Math.random() * matrix.length)];

        // Рисуем символ
        $.fillText(txt, i * font, arr[i] * font);

        // Обнуляем y, если "y" больше высоты холста или если случайное значение больше 0.975
        if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;

        // Увеличиваем значение y
        arr[i] += 2; // Увеличиваем значение для более быстрого падения
    }
}

// Устанавливаем интервал обновления
setInterval(draw, 60);

// Перезагрузка страницы при изменении размеров окна
window.addEventListener('resize', () => location.reload());
