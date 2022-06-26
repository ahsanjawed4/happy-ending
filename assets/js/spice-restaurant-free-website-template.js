$( document ).ready(function() {
	// FlexSlider
	$('#f1').flexslider({
    animation: "slide",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
  // Daisy
  // $('#spice-about-section').daisyjs({
    // dotColor: '#000000',
    // lineColor: '#ffffff'
	// });
});