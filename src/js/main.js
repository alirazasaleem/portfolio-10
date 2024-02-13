$(document).ready(function() {
  $('#preview--gal img').prop('src', $('#gal--thumb img').eq(0).prop('src'));
  $('#gal--thumb img').click(function(event) {
    var cli = $(this);
    $('#preview--gal img').fadeOut('fast', function() {
      $('#preview--gal img').prop('src', $(cli).prop('src'));
      $('#preview--gal img').fadeIn('fast');
    });
  });

  $(window).scroll(function(event) {
    
  });
});
