var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery('.navbar').outerHeight();

jQuery(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = jQuery(this).scrollTop();

  
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  if (st > lastScrollTop && st > navbarHeight) {
    
    jQuery('.navbar').removeClass('nav-down').addClass('nav-up');
  } else {
    
    if (st + jQuery(window).height() < jQuery(document).height()) {
      jQuery('.navbar').removeClass('nav-up').addClass('nav-down');
    }
  } if ( jQuery(window).scrollTop() == 0 ) {
    jQuery('.navbar').removeClass('nav-up').removeClass('nav-down');
  }

  lastScrollTop = st;
}

$('input').change(function(){
  var $this = $(this), $div = $('div.navbar');
  if( $this.is(':checked') )
  {
    $div.addClass('overlay');
  }
  else
  {
    $div.removeClass('overlay');
  }
}).change();