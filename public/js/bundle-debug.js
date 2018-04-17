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
