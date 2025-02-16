const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burger-menu');
const spans = document.querySelectorAll('.burger__span');
const header = document.getElementById('header');

// Обработчик скролла для изменения прозрачности хедера и бургер-меню
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 20) {
        header.classList.add('transparent');
        burgerMenu.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
        burgerMenu.classList.remove('transparent');
    }
});

// Обработчики для наведения мыши на хедер
header.addEventListener('mouseenter', function() {
    this.classList.remove('transparent');
});

header.addEventListener('mouseleave', function() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > 20) {
        this.classList.add('transparent');
    }
});

// Изменяем стиль бургер-кнопки и отображаем меню при клике
burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');

    spans[0].classList.toggle('rotate-left'); // Анимация для первого спана
    spans[1].classList.toggle('hide'); // Скрыть средний спан
    spans[2].classList.toggle('rotate-right'); // Анимация для третьего спана
});

// Закрываем меню, если клик происходит вне его и бургер-кнопки
window.addEventListener('click', (event) => {
    if (burgerMenu.classList.contains('active') && !burger.contains(event.target) && !burgerMenu.contains(event.target)) {
        burgerMenu.classList.remove('active');
        spans[0].classList.remove('rotate-left');
        spans[1].classList.remove('hide');
        spans[2].classList.remove('rotate-right');
    }
});

// Обработчики для наведения на бургер-меню
burgerMenu.addEventListener('mouseenter', () => {
    burgerMenu.classList.remove('transparent');
});

burgerMenu.addEventListener('mouseleave', () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > 20) {
        burgerMenu.classList.add('transparent');
    }
});

// CSS анимации для спанов
const style = document.createElement('style');
style.innerHTML = `
    .rotate-left {
        transform: rotate(-45deg) translate(-6px, 6px);
    }
    .rotate-right {
        transform: rotate(45deg) translate(-6px, -6px);
    }
    .hide {
        opacity: 0;
        visibility: hidden;
    }
    .transparent {
        background-color: rgba(3, 3, 3, 0.5); /* Прозрачный цвет бургер-меню */
    }
`;
document.head.appendChild(style);

const feedbackImgWrap = document.querySelector('.feedback__img-wrap');
const feedbackFormWrap = document.querySelector('.feedback__form-wrap');

// Удаляем изображение (или скрываем) в зависимости от ширины
window.addEventListener('resize', () => {
    // Условие для проверки ширины окна (например, 768px)
    if (window.innerWidth < 768) {
        feedbackImgWrap.classList.add('hidden');
        feedbackFormWrap.classList.add('center');
    } else {
        feedbackImgWrap.classList.remove('hidden');
        feedbackFormWrap.classList.remove('center');
    }
});

// Инициализация при загрузке страницы
if (window.innerWidth < 768) {
    feedbackImgWrap.classList.add('hidden');
    feedbackFormWrap.classList.add('center');
}
