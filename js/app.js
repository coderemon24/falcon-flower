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

  //  home swiper slider
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
            "md:fixed! fixed! z-[999] md:relative top-0 border-b border-black/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
          )
          .removeClass("md:static!")
          .slideDown(300);
        isFixed = true;
      }
    } else {
      if (isFixed) {
        $("#navMenu")
          .removeClass(
            " z-[999] md:fixed! fixed! md:relative top-0 border-b border-black/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
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
});


