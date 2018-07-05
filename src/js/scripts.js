(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    var items = $('.js-items');
    var menu = $('.burger');
    var close = $('.close');
    var choix = $('.close-menu');

    // items.onclick

      items.click(function() {
       $(this).toggleClass('active');
      });

      menu.click(function() {
        var element = document.getElementById("menu");
        element.classList.add("on");
      });

      close.click(function() {
        var element = document.getElementById("menu");
        element.classList.remove("on");
      });

      choix.click(function() {
        var element = document.getElementById("menu");
        element.classList.remove("on");
      });
  });


})(jQuery, window, document);

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
