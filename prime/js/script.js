
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
}
function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function()