// CONTENT BUTTON
$('.menu__list-button.active').click(function() {
  $('.content').fadeOut(10);
  $('.content.second-page').fadeIn(10);
});

$('.menu__list-button.second-page.active').click(function() {
  $('.content.second-page').fadeOut(10);
  $('.content.thirdy-page').fadeIn(10);
});


// BUTTON BACK SECOND PAGE
$('.menu__back.second-page').click(function() {
  $('.content').fadeIn(10);
  $('.content.second-page').fadeOut(10);
  $('.content.thirdy-page').fadeOut(10);
});

// BUTTON BACK THIRDY PAGE
$('.menu__back.thirdy-page').click(function() {
  $('.content.second-page').fadeIn(10);
  $('.content.thirdy-page').fadeOut(10);
  $('.content').fadeOut(10);
  $('.content.second-page').fadeIn(10);
});

// BUTTON HOME THIRDY PAGE
$('.menu__home').click(function() {
  $('.content').fadeIn(10);
  $('.content.second-page').fadeOut(10);
  $('.content.thirdy-page').fadeOut(10);
});


// MAIN SLIDER
$('.main__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });