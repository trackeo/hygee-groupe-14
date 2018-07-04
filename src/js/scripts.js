$(document).ready(function(){
$('.wrapper-slides').slick({
  prevArrow: '<button class="slick-prev" type="button"></button>',
  nextArrow: '<button class="slick-next" type="button"></button>',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  infinite: false,
  responsive: [
    {
      breakpoint: 1110,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }
    },

  ]
});
});


(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    var items = $('.js-items');

    // items.onclick

      items.click(function() {
       $(this).toggleClass('active');
      });

  });


})(jQuery, window, document);
