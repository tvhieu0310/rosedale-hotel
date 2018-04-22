jQuery(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:4500,
      autoplayHoverPause:true
  });
});


// $(document).ready(function() {
//   $('.GioiThieu>.Admin').click(function() {
//       $(this)
//       .css('backgroundColor','#EE178C')
//       .siblings()
//       .css('backgroundColor','#ffffff');

//       $('#submit_button').removeAttr('disabled');
//       $('#number').removeAttr('disabled');
//   });
// });