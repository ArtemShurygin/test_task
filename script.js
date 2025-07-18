const menu = document.querySelector('.header__burger-menu');
const burger = document.querySelector('.header__burger-button');
const menuClose = document.querySelector('.menu_close');


function toggleMenu() {
  menu.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);

// слайдер
// # параметры https://swiperjs.com/swiper-api#parameters
			const swiper = new Swiper(".swiper", {
				speed: 500,
				// Настройки Swiper
				loop: true, // Бесконечная прокрутка
				pagination: {
					el: ".swiper-pagination",
					// type: "bullets",

					clickable: true, // Делает пагинацию кликабельной
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				//количество слайдов для показа
				slidesPerView: 1,
				//отступ между слайдами
				spaceBetween: 22,
				//количество пролистываемых слайдов
				// slidesPerGroup: 3,

				breakpoints: {
					768: {
						slidesPerView: 2,
						spaceBetween: 22,
					},
					1500: {
						slidesPerView: 3,
						spaceBetween: 22,
					},
					// 1000: {
					//     slidesPerView: 2,
					//     spaceBetween: 22,
					// }
				},
			});