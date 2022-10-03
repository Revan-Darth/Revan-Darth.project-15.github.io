// Menu Burger
	document.querySelector('.menu__burger').addEventListener('click', function (e){
		e.preventDefault();
		
		if(this.classList.contains('active')) {
		   this.classList.remove('active');
		   document.querySelector('.header__menu').classList.remove('active');
		} else {
		   this.classList.add('active');
		   document.querySelector('.header__menu').classList.add('active');
		}
	});
// Tabs
	const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
	const tabsItems = document.querySelectorAll('.tabs__item');

	tabsBtn.forEach(onTabClick);

	function onTabClick(item) {
		item.addEventListener('click', function() {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute('data-tab');
			let currentTab = document.querySelector(tabId);

			if ( ! currentBtn.classList.contains('_active') ) {
				tabsBtn.forEach(function(item) {
					item.classList.remove('_active')
				});

				tabsItems.forEach(function(item) {
					item.classList.remove('_active')
				});

				currentBtn.classList.add('_active');
				currentTab.classList.add('_active');
			}
		});
	}
// Window Resize
	if (window.matchMedia("(max-width: 480px)").matches) {
		if(document.querySelector('.events__title')) {
			document.querySelector('.events__title').classList.remove('visually-hidden');
		} else {}
		if(document.querySelector('.log__title')) {
			document.querySelector('.log__title').classList.remove('visually-hidden');
		} else {}
		if(document.querySelector('.novelties__title')) {
			document.querySelector('.novelties__title').classList.remove('visually-hidden');
		} else {}
		if(document.querySelector('.reviews__title')) {
			document.querySelector('.reviews__title').classList.remove('visually-hidden');
		} else {}
		if(document.querySelector('.partners__item-read-more-1')) {
			document.querySelector('.partners__item-read-more-1').classList.add('partners__item-read-more');
		} else {}
		if(document.querySelector('.partners__item-read-more-2')) {
			document.querySelector('.partners__item-read-more-2').classList.add('partners__item-read-more');
		} else {}
		if(document.querySelector('.partners__item-read-more-3')) {
			document.querySelector('.partners__item-read-more-3').classList.add('partners__item-read-more');
		} else {}
		if(document.querySelector('.partners__item-read-more-4')) {
			document.querySelector('.partners__item-read-more-4').classList.add('partners__item-read-more');
		} else {}
		if(document.querySelector('.partners__item-read-more-5')) {
			document.querySelector('.partners__item-read-more-5').classList.add('partners__item-read-more');
		} else {}
	} else {
		if(document.querySelector('.events__title')) {
			document.querySelector('.events__title').classList.add('visually-hidden');
		} else {}
		if(document.querySelector('.log__title')) {
			document.querySelector('.log__title').classList.add('visually-hidden');
		} else {}
		if(document.querySelector('.novelties__title')) {
			document.querySelector('.novelties__title').classList.add('visually-hidden');
		} else {}
		if(document.querySelector('.reviews__title')) {
			document.querySelector('.reviews__title').classList.add('visually-hidden');
		} else {}
	}
// Slider 
	new Swiper ('.reviews__swiper-container', {
		navigation: {
	    	nextEl: '.swiper-button-next',
	    	prevEl: '.swiper-button-prev',
	  	},
	  	pagination: {
	    	el: '.swiper-pagination',
	    	type: 'bullets',
	    	clickable: true,
	    	dynamicBullets: true,
	  	},
	  	keyboard: {
	    	enabled: true,
	    	onlyInViewport: false,
	  	},
	  	autoHeight: true,
	  	grabCursor:true,
		centeredSlides: true,
		initialSlide: 2,
		loop: true,
		breakpoints: {
	  		320: {
	  			slidesPerView: 1,
	  		},
	  		800: {
	  			slidesPerView: 2,
	  		},
	  		1250: {
	  			slidesPerView: 3,
	  		}
	  	}
	});
	new Swiper ('.paper__images', {
		autoHeight: true,
		spaceBetween: 50,
		grabCursor:true,
		navigation: {
	    	nextEl: '.swiper-button-next',
	    	prevEl: '.swiper-button-prev',
	  	},
	});
// Read more 
	const readMoreBtn = document.querySelector('.partners__read-more--btn');
	const item1 = document.querySelector('.partners__item-read-more-1');
	const item2 = document.querySelector('.partners__item-read-more-2');
	const item3 = document.querySelector('.partners__item-read-more-3');
	const item4 = document.querySelector('.partners__item-read-more-4');
	const item5 = document.querySelector('.partners__item-read-more-5');

	readMoreBtn.addEventListener('click', (e)=>{
		item1.classList.toggle('_show');
		item2.classList.toggle('_show');
		item3.classList.toggle('_show');
		item4.classList.toggle('_show');
		item5.classList.toggle('_show');
		if(readMoreBtn.innerText === 'Показати ще') {
			readMoreBtn.innerText = 'Згорнути';
		} else {
			readMoreBtn.innerText = 'Показати ще';
		}
	})



