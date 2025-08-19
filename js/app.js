"use strict";

$(document).ready(function () {
  //  toggle mobile menu
  $(".toggle-menu").click(function () {
    $(".menu-list").toggleClass("w-[60%]");
    $(".menu-overly").toggleClass("hidden");
  });
  if ($(".menu-overly").hasClass("hidden")) {
    $(".menu-overly").on("click", function () {
      $(".menu-list").removeClass("w-[60%]");
      $(".menu-overly").addClass("hidden");
    });
  }

  //  main swiper slider
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: "fade",
    speed: 3000,
    direction: "horizontal",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      slideChangeTransitionStart: function () {
        $(".animate-fadeIn").css({
          opacity: "0",
          transform: "translateY(30px)",
        });

        $(".animate-fadeIn-text").css({
          opacity: "0",
          transform: "translateY(50px)",
        });
      },
      slideChangeTransitionEnd: function () {
        $(".animate-fadeIn").css({
          opacity: "1",
          transform: "translateY(0)",
        });
        $(".animate-fadeIn-text").css({
          opacity: "1",
          transform: "translateY(0)",
        });
      },
    },
  });

  //  business swiper slider
  const businessesSwiper = new Swiper(".business-swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    effect: "slide",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    speed: 2000,
    direction: "horizontal",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1, // mobile
      },
      640: {
        slidesPerView: 1.2, // small screens
      },
      768: {
        slidesPerView: 2, // tablet
      },
      1024: {
        slidesPerView: 3, // laptop
      },
      1280: {
        slidesPerView: 4, // desktop
      },
    },
  });

  //  events swiper slider
  const eventsSwiper = new Swiper(".event-slider", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    effect: "slide",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    speed: 2000,
    direction: "horizontal",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1, // mobile
      },
      640: {
        slidesPerView: 1.2, // small screens
      },
      768: {
        slidesPerView: 2, // tablet
      },
      1024: {
        slidesPerView: 3, // laptop
      },
      1280: {
        slidesPerView: 4, // desktop
      },
    },
  });

  // back to top
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $(".back_btn").removeClass("hidden").addClass("flex");
      $(".back_btn").fadeIn();
    } else {
      $(".back_btn").fadeOut();
    }
  });
  $(".back_btn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  });

  // nav fixed
  let isFixed = false;
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      if (!isFixed) {
        $("#navMenu")
          .hide()
          .addClass(
            "md:fixed! z-[999] md:relative md:py-3! top-0 border-b border-gray-50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
          )
          .removeClass("md:static!")
          .slideDown(300);
        isFixed = true;
      }
    } else {
      if (isFixed) {
        $("#navMenu")
          .removeClass(
            "md:py-3! z-[999] md:fixed! md:relative top-0 border-b border-gray-50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
          )
          .addClass("md:static!");
        isFixed = false;
      }
    }
  });

  // counter
  let counted = false;
  new WOW({
    callback: function (box) {
      if (!counted && $(box).hasClass("achivements")) {
        counted = true;

        $(".count-num").each(function () {
          var $this = $(this);
          var countTo = parseFloat($this.attr("data-count"));
          var isInt = Number.isInteger(countTo);
          var suffix = $this.text().replace(/[0-9.]/g, ""); // e.g. "+", "K+", "%"

          $({ countNum: 0 }).animate(
            { countNum: countTo },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(
                  isInt
                    ? Math.floor(this.countNum) + suffix
                    : this.countNum.toFixed(1) + suffix
                );
              },
              complete: function () {
                $this.text(
                  isInt
                    ? Math.floor(this.countNum) + suffix
                    : this.countNum.toFixed(1) + suffix
                );
              },
            }
          );
        });
      }
    },
  }).init();

  // gallery -> lightbox
  $(".gallery-grid").magnificPopup({
    delegate: "a.gallery-item",
    type: "image",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 2],
    },
    image: {
      titleSrc: function (item) {
        return item.el.find("img").attr("alt");
      },
    },
    zoom: {
      enabled: true,
      duration: 200,
      easing: "ease-in-out",
    },
  });

  // gallery -> mixitup
  var mixer = mixitup("#gallery-container", {
    selectors: {
      target: ".mix",
    },
    load: {
      filter: ".mix",
      sort: "random",
    },
    animation: {
      enable: true,
      duration: 300,
      easing: "ease-in-out",
      effects: "fade scale",
    },
    controls: {
      enable: true,
    },
  });

  $(".filter-btn").on("click", function () {
    $(".filter-btn").removeClass("bg-[#1A4688]! text-white");
    $(this).addClass("bg-[#1A4688]! text-white");
  });

  
  
  
});



// YouTube popup
$(document).on("click", ".popup-youtube", function (e) {
  e.preventDefault();
  const videoUrl = $(this).data("video");
  let videoId = videoUrl.split("v=")[1];
  if (videoId.includes("&")) {
    videoId = videoId.split("&")[0];
  }
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  $(".youtube_iframe").attr("src", embedUrl);
  
  
  
  $(".main_popup").toggleClass("scale-0");
  $(".overlay_popup").toggleClass("hidden");
});

$(document).on("click", ".close_popup, .overlay_popup", function (e) {
  $(".main_popup").addClass("scale-0");
  $(".overlay_popup").addClass("hidden");
});