// Scroll To Top

  /********** Check to see if the window is top if not then display button **********/
  $(window).scroll(function(){
    if($(this).scrollTop() > 200) {
      $( '.back-top' ).fadeIn();
    } else {
      $( '.back-top' ).fadeOut();
    }
  });
  /********** Click event to scroll to top **********/
  $( '.back-top' ).click(function(){ $( 'html, body' ).animate({scrollTop : 0},800); return false; });

