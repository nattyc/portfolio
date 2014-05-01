$("img.lazy").lazyload({
  effect : "fadeIn"
});

$(function () {
  $('[data-typer-targets]').typer();
});

$('#spidergraphcontainer').spidergraph({
  'fields': ['a','b','c','d','e'],
  'gridcolor': 'rgba(20,20,20,1)'
});

$('#spidergraphcontainer').spidergraph('addlayer', {
    'strokecolor': 'rgba(230,204,0,0.8)',
    'fillcolor': 'rgba(230,204,0,0.6)',
    'data': [5, 4, 9, 8, 1]
});

var $sections = $('.section');

var getCurrentSection = function() {

  var scrollTop = $(window).scrollTop();
  var scrollBuffer = 5;

  var sectionOffsets = $sections.map(function() {
    return $(this).offset().top;
  }).get();

  var currentSection = $sections[0];

  $.each(sectionOffsets, function(idx, offset) {
    if (scrollTop + scrollBuffer > offset) {
      currentSection = $sections[idx];
    }
  });

  return $(currentSection);
};

var scrollToElement = function(el) {
  $('body').animate({
    scrollTop: $(el).offset().top
  }, 800);
};

$('.next').click(function(evt) {
  evt.preventDefault();
  var nextSection = getCurrentSection().next();
  if (!nextSection || nextSection.length === 0) nextSection = $($sections[$sections.length-1]);
  scrollToElement(nextSection);
});

$('.prev').click(function(evt) {
  evt.preventDefault();
  var prevSection = getCurrentSection().prev();
  if (!prevSection || prevSection.length === 0) prevSection = $($sections[0]);
  scrollToElement(prevSection);
});
