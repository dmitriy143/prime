
const main = 'i am main.js'

// $('.header-top__link').css('color', 'blue')
const hello = 'привет я js зи блока header';

$(window).resize(function () {
  adaptive_function();
});

function adaptive_header(w, h) {
  var headerMenu = $('.header-menu');
  var headerLang = $('.header-top-lang');
  if (w < 740) {
    if (!headerLang.hasClass('done')) {
      headerLang.addClass('done').appendTo(headerMenu);
    }
  }
  else {
    if (headerLang.hasClass('done')) {
      headerLang.removeClass('done').prependTo($('.header-top'));
    }
  }
  if (w < 740) {
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
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function()