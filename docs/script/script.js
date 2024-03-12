console.clear();

// 이벤트 배너 스와이퍼
function EventBanner() {
  const eventBanner = new Swiper(".event-slider .swiper", {
    loop: true,
    allowTouchMove: false,

    autoplay: {
      delay: 3000,
    },

    navigation: {
      nextEl: ".event-slider-button.swiper-button__next",
      prevEl: ".event-slider-button.swiper-button__prev",
    },
  });
}

EventBanner();

// 신상품 탭메뉴
function Newgoods() {
  $(".new-goods-topmenu > button").click(function () {
    let $this = $(this).index();

    $(".new-goods-topmenu .active").removeClass("active");
    $(".new-goods-cards-con .cards-con.active").removeClass("active");
    $(this).addClass("active");
    $(".new-goods-cards-con .cards-con").eq($this).addClass("active");
  });
}

Newgoods();

// 기획할인몰 스와이퍼
function DiscountSwiper() {
  const discountSwiper = new Swiper(".discount-goods .swiper", {
    loop: true,

    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    spaceBetween: 40,
    slidesPerView: 5,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
}

DiscountSwiper();

// 명품관
function LuxuryGoods() {
  const swiper = new Swiper(".luxury-goods .swiper", {
    loop: true,

    effect: "coverflow",
    coverflowEffect: {
      slideShadows: false,
      rotate: 0,
      stretch: -40,
      depth: 150,
      modifier: 1,
      scale: 1,
    },

    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 320px
      300: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

LuxuryGoods();

// 사이드메뉴
function SideMenu() {
  // 	탑으로 스크롤
  const menu = $(".side-menu .up-ico").click(function () {
    window.scrollTo(0, 0);
  });

  let basketGoods = 0;

  // 장바구니
  const basket = $(".goods-card-cart-ico").click(function () {
    basketGoods = basketGoods + 1;

    if (basketGoods == 0) {
      $(".side-menu .bag-goods-number").css("display", "none");
    } else if (basketGoods > 0) {
      $(".side-menu .bag-goods-number").css("display", "flex");
    }

    $(".bag-goods-number").text(basketGoods);

    $(".side-menu .basket-massage").addClass("active");
    setTimeout(function () {
      $(".side-menu .basket-massage").removeClass("active");
    }, 5000);
  });
}

SideMenu();
