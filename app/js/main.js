$(function () {
  $('.home-slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  })

  $('.tab').on('click', function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('tab--active');
    $('.tabs-content').removeClass('tabs-content--active');
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });

  $('.product-item__favorite').on('click', function () {
    $(this).toggleClass('product-item__favorite--active');
  })
  $('.product-item__basket').on('click', function () {
    $(this).toggleClass('product-item__basket--draft');
  })
});