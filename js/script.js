'use strict';



// ==== Header ====

var navBar = document.querySelector('header');
var headerY = 50;

window.addEventListener('scroll', function () {
	var haederTop = window.scrollY;
	if (haederTop > headerY) {
		navBar.classList.add('active');
	} else {
		navBar.classList.remove('active');
	}
});

// ==== Accordian ====

const accordian = document.querySelectorAll('.contentBx');

for (let i = 0; i < accordian.length; i++) {
	accordian[i].addEventListener('click', function () {
		this.classList.toggle('active');
	});
}


// ==== Small scren Menu ====

var menuBar = document.querySelector(".open-menu");
var showMenu = document.querySelector("nav ul");
var closeMenu = document.querySelector(".close-menu");
var headerOverlay = document.querySelector('.overlay')

menuBar.addEventListener("click", ()=>{
	showMenu.classList.add("active");
	headerOverlay.classList.add("active");
})

closeMenu.addEventListener("click", ()=>{
	showMenu.classList.remove("active");
	headerOverlay.classList.remove("active");
})

headerOverlay.addEventListener("click", ()=>{
	showMenu.classList.remove("active");
	headerOverlay.classList.remove("active");
})

// ==== Slider ====

$('.testimonial-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
		
		{
			breakpoint: 941,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		// {
		// 	breakpoint: 480,
		// 	settings: {
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1,
		// 	},
		// },
	],
});
