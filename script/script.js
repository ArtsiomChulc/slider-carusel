document.addEventListener('DOMContentLoaded', () => {

	const slides = document.querySelectorAll('.slider__item'),
		current = document.querySelector('.current'),
		total = document.querySelector('.total'),
		prevBtn = document.querySelector('#prev'),
		nextBtn = document.querySelector('#next'),
		sliderInner = document.querySelector('.slider__inner'),
		wrapper = document.querySelector('.slider__wrapper'),
		width = window.getComputedStyle(wrapper).width;

	slides.forEach(slide => slide.style.width = width);
	sliderInner.style.width = 100 * slides.length + '%';
	wrapper.style.overflow = 'hidden';

	let slideIndex = 1;
	let offset = 0;

	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	} else {
		total.textContent = slides.length;
		current.textContent = slideIndex;
	}

	nextBtn.addEventListener('click', () => {

		if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += +width.slice(0, width.length - 2);
		}

		sliderInner.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}
		if (slides.length < 10) {
			total.textContent = `0${slides.length}`;
			current.textContent = `0${slideIndex}`;
		} else {
			total.textContent = slides.length;
			current.textContent = slideIndex;
		}

	});
	prevBtn.addEventListener('click', () => {

		if (offset == 0) {
			offset = +width.slice(0, width.length - 2) * (slides.length - 1);
		} else {
			offset -= +width.slice(0, width.length - 2);
		}

		sliderInner.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}
		if (slides.length < 10) {
			total.textContent = `0${slides.length}`;
			current.textContent = `0${slideIndex}`;
		} else {
			total.textContent = slides.length;
			current.textContent = slideIndex;
		}

	});







	// showSlides(slideIndex);

	// if (slides.length < 10) {
	// 	total.textContent = `0${slides.length}`;
	// } else {
	// 	total.textContent = slides.length;
	// }

	// function showSlides(n) {
	// if (n > slides.length) {
	// 	slideIndex = 1;
	// 	}
	// 	if (n < 1) {
	// 		slideIndex = slides.length;
	// 	}
	// 	slides.forEach(slide => {
	// 		slide.style.display = 'none';
	// 	});
	// 	slides[slideIndex - 1].style.display = 'block';

	// if (slideIndex < 10) {
	// 	current.textContent = `0${slideIndex}`;
	// } else {
	// 	current.textContent = slideIndex;
	// }
	// }

	// function plusSlide(e) {
	// 	showSlides(slideIndex += e);
	// }

	// prevBtn.addEventListener('click', () => {
	// 	plusSlide(-1);
	// });
	// nextBtn.addEventListener('click', () => {
	// 	plusSlide(1);
	// });






});


