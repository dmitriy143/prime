const main = 'i am main.js'
const hello = 'привет я js зи блока header';

// добавляем/убираем в header-menu блоки
$(window).resize(function () {
  adaptive_function();
});

function adaptive_header(w, h) {
  var headerMenu = $('.header-menu');
  var headerLang = $('.header-top-lang');

  if (w <= 740) {
    if (!headerLang.hasClass('done')) {
      headerLang.addClass('done').appendTo(headerMenu);
    }
  }
  else {
    if (headerLang.hasClass('done')) {
      headerLang.removeClass('done').prependTo($('.header-top'));
    }
  }
  if (w <= 740) {
    if (!$('.header-bottom-menu').hasClass('done')) {
      $('.header-bottom-menu').addClass('done').appendTo(headerMenu);
    }
  }
  else {
    if ($('.header-bottom-menu').hasClass('done')) {
      $('.header-bottom-menu').eq(0).removeClass('done').prependTo($('.header-bottom__column').eq(0));
      $('.header-bottom-menu').eq(1).removeClass('done').prependTo($('.header-bottom__column').eq(2));
    }

  }
}
function adaptive_function() {
  var w = $('html').outerWidth(); //должно быть window
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}

adaptive_function();

// появление меню
$('.header-menu__icon').on('click', function () {
  $(this).toggleClass('active')
  $('.header-menu').toggleClass('active');
  if ($(this).hasClass('active')) {
    $('body').data('scrollTop', $(window).scrollTop());
  }
  $('body').toggleClass('lock');
  if (!$('this').hasClass('active')) {
    $('bady,html').scrollTop(parseInt($('body').data('scroll')))
  }
})
// заменяем img на background родителя
function imgbg() {
  const imgTag = $('.ibg img')
  imgTag.css('display', 'none')
  const namePecture = imgTag.prop('src').match(/[^\/\\]*$/)
  const parentImgTag = $('.ibg')
  parentImgTag.css('background-image', `url("img/${namePecture}")`)
}
imgbg()