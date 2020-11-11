// заменяем img на background родителя
function imgbg() {
  const imgTag = $('.ibg img')
  imgTag.css('display', 'none')
  const namePecture = imgTag.prop('src').match(/[^\/\\]*$/)
  const parentImgTag = $('.ibg')
  parentImgTag.css('background-image', `url("img/${namePecture}")`)
}
imgbg()