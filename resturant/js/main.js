$(document).ready(function() {
  var clicked = false;
  $("header .nav-btn").click(function() {
    if (!clicked) {
      clicked = true;
      $(this)
        .parent()
        .toggleClass("active");
      setTimeout(function() {
        clicked = false;
      }, 1450);
    }
  });

  // $(document).on("click",function(e){
  //     var clickover = $(e.target);
  //     if(!clickover.closest("header").lenght && $("nav").hasClass("active")){
  //         $("nav").removeClass("active")
  //         console.log("not working");

  //     }
  // })
  var $mainsec = $(".main-section");
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $mainsec.height() - 100) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

  function menuSlider() {
    var $sliderContainer = $(".menu-slider");
    var $sliderBanner = $sliderContainer.find(".slider-banner");
    var $sliderItems = $sliderBanner.find(".slider-item");
    var itemsLength = $sliderItems.length;
    var $nextBtn = $sliderContainer.find(".arrow.next");
    var $prevBtn = $sliderContainer.find(".arrow.prev");

    var itemWidth;
    var itemsWidth;

    function fixWidth() {
      itemWidth = $(".menu-slider .slider-item").outerWidth();
      itemsWidth = itemWidth * itemsLength;
      $sliderBanner.width(itemsWidth);
    }
    fixWidth();

    $(window).on("resize", function() {
      fixWidth();
    });
    var activeSlides = 3;

    $nextBtn.click(function() {
      if (activeSlides != itemsLength) {
        $sliderBanner.css("left", -itemWidth);
      }
    });
    $prevBtn.click(function() {
      $sliderBanner.css("left", "0");
    });
  }
  menuSlider();

//   $(".chief-testemonials .controls .nextArrow").click(function() {
//     console.log("clicked");
//     $(".chief-testemonials .myCarousel .carousel").each(function() {
//       if ($(this).hasClass("active")) {
//         $(this)
//           .next()
//           .addClass("active")
//           .prevAll()
//           .removeClass("active");
//       }
//     });

//     // $(".chief-testemonials .myCarousel p").hasClass("active").removeClass("active")
//   });

//   $(".chief-testemonials .controls .prevArrow").click(function() {
//     console.log("clicked");
//     $(".chief-testemonials .myCarousel .carousel").each(function() {
//       if ($(this).hasClass("active")) {
//         $(this)
//           .prev()
//           .addClass("active")
//           .nextAll()
//           .removeClass("active");
//       }
//       // $(this).siblings().removeClass("active")
//     });

//     // $(".chief-testemonials .controls .nextArrow").css({color:"#212529",cursor:"pointer"})
//     // $(".chief-testemonials .controls .prevArrow").css({color:"#ccc",cursor: "not-allowed"})
//     // $(".chief-testemonials .myCarousel p").hasClass("active").removeClass("active")
//   });


$(".chief-testemonials .myCarousel .first-carousel .nextArrow").click(function(){
    $(".chief-testemonials .myCarousel .first-carousel").animate({right:"-200%",translate:"all .3s ease-in-out"},800).hide(200)
    $(".chief-testemonials .myCarousel .second-carousel").animate({right:"0"},600).show(200)
})
$(".chief-testemonials .myCarousel .second-carousel .nextArrow").click(function(){
    $(".chief-testemonials .myCarousel .second-carousel").animate({right:"-200%",translate:"all .3s ease-in-out"},800).hide(200)
    $(".chief-testemonials .myCarousel .third-carousel").animate({right:"0"},600).show(200)
})
$(".chief-testemonials .myCarousel .third-carousel .nextArrow").click(function(){
    $(".chief-testemonials .myCarousel .third-carousel").animate({right:"-200%",translate:"all .3s ease-in-out"},800).hide(200)
    $(".chief-testemonials .myCarousel .fourth-carousel").animate({right:"0"},600).show(200)
})


$(".chief-testemonials .myCarousel .second-carousel .prevArrow").click(function(){
    $(".chief-testemonials .myCarousel .second-carousel").animate({right:"-200%",translate:"all .3s ease-in-out"},800).hide(200)
    $(".chief-testemonials .myCarousel .first-carousel").animate({right:"0"},600).show(200)
})
$(".chief-testemonials .myCarousel .third-carousel .prevArrow").click(function(){
    $(".chief-testemonials .myCarousel .third-carousel").animate({right:"-200%",translate:"all .3s ease-in-out"},800).hide(200)
    $(".chief-testemonials .myCarousel .second-carousel").animate({right:"0"},600).show(200)
})
$(".chief-testemonials .myCarousel .fourth-carousel .prevArrow").click(function(){
    $(".chief-testemonials .myCarousel .fourth-carousel").animate({right:"-200%",translate:"all .3s ease-in-out"},800).hide(200)
    $(".chief-testemonials .myCarousel .third-carousel").animate({right:"0"},600).show(200)
})





  $(window).on("scroll", function() {
    var sc = $(window).scrollTop();
    if (sc > 700) {
      $(".scroll-button").fadeIn(1000);
    } else {
      $(".scroll-button").fadeOut(1000);
    }
  });
  $(".scroll-button").click(function() {
    $("html,body").animate({ scrollTop: 0 }, 1000, function() {
      $(".scroll-button").fadeOut(1000);
    });
  });
});
