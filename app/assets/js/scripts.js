/*!
 * hygee
 * 
 * 
 * @author Stephane Goyon
 * @version 
 * Copyright 2018.  licensed.
 */
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
