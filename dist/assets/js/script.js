function test(a, b) {
    return a + b
}

// Время и Дата

// При загрузке страницы запускаем функцию
window.onload = function time(){
  window.setInterval(function(){

    // Создаем переменную, в которую кладем значение текущей даты
    var date = new Date();

    // Объявляем переменные часа и минут
    var hours = date.getHours();
    var min = date.getMinutes();

    // Если час и минуты меньше 10, до добавляем 0 перед числом. Пример: 01:09
    if(hours < 10) hours = '0' + hours;
    if(min < 10) min = '0' + min;

    // Конкатенация строки, записываем в переменную часы и минуты
    var clock = hours + ':' + min;

    // Вывод времени в блок HTML
    document.querySelector('.header__time').innerHTML = clock;

    // Дата
    // Объявление массива с названиями месяца.
    const months = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ];

    // Переменные дня, месяца и года для даты
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    // Добавляем 0, если дата меньше 10 числа. Пример: 01 сентября
    if(day < 10) day = '0' + day;

    // Конкатенация строки, в месяц вместо числа подставляется строчный эллемент массива с соответствующим названием месяца
    var calendar = day + ' ' +months[month]+ ' ' + year;

    // Вывод даты в блок HTML
    document.querySelector('.header__date').innerHTML = calendar;
  }, 1000);
};


// Реализация меню через модальные окна

// Кнопка "Административные процедуры" на первой странице
$('.menu__list-button.active').click(function() {

  // Скрываем первую страницу
  $('.content').fadeOut(10);

  // Отображаем вторую страницу вложенности
  $('.content.second-page').fadeIn(10);
});

// Кнопка "Страница 1" на второй странице вложенности
$('.menu__list-button.second-page.active').click(function() {

  // Скрываем вторую страницу вложенности
  $('.content.second-page').fadeOut(10);

  // Отображаем третью страницу вложенности
  $('.content.thirdy-page').fadeIn(10);
});


// Кнопка "Назад" на второй страннице вложенности
$('.menu__back.second-page').click(function() {

  // Появляется первая страница
  $('.content').fadeIn(10);

  // Сворачиваем вторую и третью страницу вложенности
  $('.content.second-page').fadeOut(10);
  $('.content.thirdy-page').fadeOut(10);
});

// Кнопка "Назад" на третьей странице вложенности
$('.menu__back.thirdy-page').click(function() {

  // Скрываем первую и третью страницу вложенности
  $('.content.thirdy-page').fadeOut(10);
  $('.content').fadeOut(10);

  // Отображаем вторую страницу вложенности
  $('.content.second-page').fadeIn(10);
});

// Кнопка "Домой" на третьей странице вложенности
$('.menu__home').click(function() {

  // Отображение первой страницы
  $('.content').fadeIn(10);

  // Скрываем вторую и третью страницу вложенности
  $('.content.second-page').fadeOut(10);
  $('.content.thirdy-page').fadeOut(10);
});


// Slick слайдер в секции Main
$('.main__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
//# sourceMappingURL=script.js.map
