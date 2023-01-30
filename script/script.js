document.addEventListener('DOMContentLoaded', () => {

	const slides = document.querySelectorAll('.slider__item'),
		current = document.querySelector('.current'),
		total = document.querySelector('.total'),
		prevBtn = document.querySelector('#prev'),
		nextBtn = document.querySelector('#next'),
		sliderInner = document.querySelector('.slider__inner'),
		wrapper = document.querySelector('.slider__wrapper'),
		indicators = document.querySelector('.carousel-indicators'),
		width = window.getComputedStyle(wrapper).width;
	const liArr = [];

	for (let i = 0; i <= slides.length - 1; i++) {
		const li = document.createElement('li');
		indicators.append(li);

		if (i == 0) {
			li.style.opacity = 1;
			li.style.width = '30px';
		}

		liArr.push(li);
	}
	console.log(liArr);

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

		liArr.forEach(item => {
			item.style.opacity = 0.5;
			item.style.width = '10px';
		});
		liArr[slideIndex - 1].style.opacity = 1;
		liArr[slideIndex - 1].style.width = '30px';
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

		liArr.forEach(item => {
			item.style.opacity = 0.5;
			item.style.width = '10px';
		});
		liArr[slideIndex - 1].style.opacity = 1;
		liArr[slideIndex - 1].style.width = '30px';

	});

});


