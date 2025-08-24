import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".hero-swiper", {
    modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 70,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
  });
});
