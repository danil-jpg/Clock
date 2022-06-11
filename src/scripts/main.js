
 import Swiper, { Navigation, Pagination } from 'swiper';


 const swiper = new Swiper('.swiper', {
	spaceBetween: 1,
    slidesPerView: 1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
	modules: [Navigation, Pagination],
  });

  document.querySelectorAll("button").forEach(item => {
	  item.addEventListener("click" , e => {
		  e.preventDefault();
	  })
  })
