$('.rev__cnt').owlCarousel({
      nav: false,
      dots: true,
      items: 1,
      loop: false,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      // navText: ["<img src='img/slider__prev.svg'>", "<img src='img/slider__next.svg'>"],
      // responsive : {
      //   0   : {
      //       items: 1
      //   },
      //   380 : {
      //       items: 1
      //   },
      //   480 : {
      //       items: 1
      //   },
      //   768 : {
      //       items: 3
      //   },
      //   1040 : {
      //       items: 4
      //   }
      // }
});
//Плавный скролл
$("body").on('click', 'a.anchor-href[href*="#"]', function(e){
  var fixed_offset = 30;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

//Мобильное меню
// $('.header__hamburger').on('click', function() {
//   $(this).toggleClass('active','slow');
//   $('.header__bot-wrp').toggleClass('active');
//   $('body').toggleClass('fixed');
// });
// if (screen.width <= 768) {
//   window.onload = function(){
//       $('.main-nav__link-wrp_sub .main-nav__link').on('click', function(e){
//         e.preventDefault();
//         $(this).parent().toggleClass('active','slow');
//       });
//   };
// };
  
//Закрываем AjaxForm popup после успешной отправки
// $(document).on('af_complete', function(event,res) {
//   if(res.success) parent.$.fancybox.close();
// });