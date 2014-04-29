//initiating jQuery
jQuery(function($) {
  $(document).ready( function() {
    //enabling stickUp on the '.navbar-wrapper' class
    $('.navbar-wrapper').stickUp(
    );
  });
});

$('section').first();

$('a.display').on('click', function(e) {
    e.preventDefault();

      var t = $(this).text(),
      that = $(this);

    if (t === 'next' && $('.current').next('section').length > 0) {
        var $next = $('.current').next('section');
        var top = $next.offset().top;

        $('.current').removeClass('current');

        $('body').animate({
          scrollTop: top
        }, function () {
               $next.addClass('current');
        });
  } else if (t === 'prev' && $('.current').prev('section').length > 0) {
        var $prev = $('.current').prev('section');
        var top = $prev.offset().top;

        $('.current').removeClass('current');

        $('body').animate({
          scrollTop: top
        }, function () {
               $prev.addClass('current');
        });
  }
});

