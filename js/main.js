// AOS
AOS.init({
  duration: 1000,
})

jQuery(document).ready(function($){
  'use strict';


  // Animsition
  $(".animsition").animsition();

  // Scrollax
  $.Scrollax();

  // Smooth scroll
  var $root = $('html, body');

  $('a.js-smoothscroll[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 40
    }, 500);

    return false;
  });

  // Show menu
  if ($(window).width() > 768 ) {
    $('body').removeClass('menu-open');
    $('.js-menu').css('display', 'block');
  }
  // Window Resize
  $(window).resize(function(){
    var $this = $(this);
    $('.js-menu li').removeClass('staggard');
    $('.js-toggle-menu').removeClass('is-active');
    if ($this.width() > 768 ) {
      $('body').removeClass('menu-open');
      $('.js-menu').css('display', 'block');

    } else {
      if ($this.width() < 768 ) {
        $('.js-menu').css('display', 'none');
      }
    }
  });

  // Hamburger Button
  $('.js-toggle-menu').on('click', function(e){
  	e.preventDefault();

    var $this = $(this);

    if ($('body').hasClass('menu-open')) {
      $this.removeClass('is-active');
      $('body').removeClass('menu-open');
      $('.js-menu li').removeClass('staggard');
    } else {
      $this.addClass('is-active');
      $('body').addClass('menu-open');

      $('.js-menu li').each(function(k){
        var $this = $(this);
        setTimeout(function(){
          $this.addClass('staggard');
        }, 100 * k );
      });

    }

  	if ( $('.menu').is(':visible') ) {
  		$('.js-menu').fadeOut(300);
  	} else {
  		$('.js-menu').fadeIn(300);
  	}
  })
});
