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

  $('.product-filter__select').styler();

  $('.star').rateYo({
    starWidth: '20px',
    starSvg: '<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.375 5.53333L10.3417 5.18333L8.76667 1.475C8.48333 0.8 7.51667 0.8 7.23333 1.475L5.65833 5.19167L1.63333 5.53333C0.9 5.59167 0.599999 6.50833 1.15833 6.99167L4.21667 9.64167L3.3 13.575C3.13333 14.2917 3.90833 14.8583 4.54167 14.475L8 12.3917L11.4583 14.4833C12.0917 14.8667 12.8667 14.3 12.7 13.5833L11.7833 9.64167L14.8417 6.99167C15.4 6.50833 15.1083 5.59167 14.375 5.53333V5.53333ZM8 10.8333L4.86667 12.725L5.7 9.15833L2.93333 6.75833L6.58333 6.44167L8 3.08333L9.425 6.45L13.075 6.76667L10.3083 9.16667L11.1417 12.7333L8 10.8333Z" /></svg>',
    ratedFill: '#7984C0',
    readOnly: true,
  });
  $('.filter-title').on('click', function () {
    $(this).toggleClass('filter-title--toggle');
    $(this).next().slideToggle();
  })
  $('.letters__form-btn').on('click', function (e) {
    e.preventDefault();
    $('.letters__form-btn').removeClass('letters__form-btn--active');
    $(this).addClass('letters__form-btn--active');
  });

  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });
});