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
		if(document.querySelector('.partners__item-read-more-1')) {
			document.querySelector('.partners__item-read-more-1').classList.remove('partners__item-read-more');
		} else {}
		if(document.querySelector('.partners__item-read-more-2')) {
			document.querySelector('.partners__item-read-more-2').classList.remove('partners__item-read-more');
		} else {}
		if(document.querySelector('.partners__item-read-more-3')) {
			document.querySelector('.partners__item-read-more-3').classList.remove('partners__item-read-more');
		} else {}
		if(document.querySelector('.partners__item-read-more-4')) {
			document.querySelector('.partners__item-read-more-4').classList.remove('partners__item-read-more');
		} else {}
		if(document.querySelector('.partners__item-read-more-5')) {
			document.querySelector('.partners__item-read-more-5').classList.remove('partners__item-read-more');
		} else {}
	}
	if (window.matchMedia("(max-width: 600px)").matches) {
		if(document.querySelector('.occasion__item-read-more-1')) {
			document.querySelector('.occasion__item-read-more-1').classList.add('occasion__item-read-more');
		} else {}
		if(document.querySelector('.occasion__item-read-more-2')) {
			document.querySelector('.occasion__item-read-more-2').classList.add('occasion__item-read-more');
		} else {}
		if(document.querySelector('.occasion__item-read-more-3')) {
			document.querySelector('.occasion__item-read-more-3').classList.add('occasion__item-read-more');
		} else {}
		if(document.querySelector('.occasion__item-read-more-4')) {
			document.querySelector('.occasion__item-read-more-4').classList.add('occasion__item-read-more');
		} else {}
		if(document.querySelector('.occasion__item-read-more-5')) {
			document.querySelector('.occasion__item-read-more-5').classList.add('occasion__item-read-more');
		} else {}

	} else {
		if(document.querySelector('.occasion__item-read-more-1')) {
			document.querySelector('.occasion__item-read-more-1').classList.remove('occasion__item-read-more');
		} else {}
		if(document.querySelector('.occasion__item-read-more-2')) {
			document.querySelector('.occasion__item-read-more-2').classList.remove('occasion__item-read-more');
		} else {}
		if(document.querySelector('.occasion__item-read-more-3')) {
			document.querySelector('.occasion__item-read-more-3').classList.remove('occasion__item-read-more');
		} else {}
		if(document.querySelector('.occasion__item-read-more-4')) {
			document.querySelector('.occasion__item-read-more-4').classList.remove('occasion__item-read-more');
		} else {}
		if(document.querySelector('.occasion__item-read-more-5')) {
			document.querySelector('.occasion__item-read-more-5').classList.remove('occasion__item-read-more');
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

	if (readMoreBtn) {
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
	}

	const readMoreBtn2 = document.querySelector('.occasion__read-more--btn');

	if (readMoreBtn2) {
		const item1 = document.querySelector('.occasion__item-read-more-1');
		const item2 = document.querySelector('.occasion__item-read-more-2');
		const item3 = document.querySelector('.occasion__item-read-more-3');
		const item4 = document.querySelector('.occasion__item-read-more-4');
		const item5 = document.querySelector('.occasion__item-read-more-5');
		readMoreBtn2.addEventListener('click', (e)=>{
			item1.classList.toggle('_show');
			item2.classList.toggle('_show');
			item3.classList.toggle('_show');
			item4.classList.toggle('_show');
			item5.classList.toggle('_show');
			if(readMoreBtn2.innerText === 'Показати ще') {
				readMoreBtn2.innerText = 'Згорнути';
			} else {
				readMoreBtn2.innerText = 'Показати ще';
			}
		})
	}

// Popup
	const popupLinks = document.querySelectorAll('.popup-link');
	const body = document.querySelector('body');
	const lockPadding = document.querySelectorAll('.lock-padding'); // Добавлять элементу, который багается при Lock'е

	let unlock = true;
	const timeout = 200; // Время выполнения transition, как и в CSS

	if (popupLinks.length > 0) {
		for (let index = 0; index < popupLinks.length; index++){
			const popupLink = popupLinks[index];
			popupLink.addEventListener('click', function (e){
				const popupName = popupLink.getAttribute('href').replace('#', '');
				const curentPopup = document.getElementById(popupName);
				popupOpen(curentPopup);
				e.preventDefault();
			});
		}
	}
	const popupCloseIcon = document.querySelectorAll('.popup__close');
	if (popupCloseIcon.length > 0){
		for (let index = 0; index < popupCloseIcon.length; index++){
			const el = popupCloseIcon[index];
			el.addEventListener('click', function (e) {
				popupClose(el.closest('.popup'));
				e.preventDefault();
			});
		}
	}
	function popupOpen(curentPopup) {
		if (curentPopup && unlock){
			const popupActive = document.querySelector('.popup.open');
			if (popupActive) {
				popupClose(popupActive, false);
			} else {
				bodyLock();
			}
			curentPopup.classList.add('open');
			curentPopup.addEventListener('click', function (e) {
				if (!e.target.closest('.popup__content')) {
					popupClose(e.target.closest('.popup'));
				}
			});
		}
	}
	function popupClose(popupActive, doUnlock = true) {
		if (unlock) {
			popupActive.classList.remove('open');
			if (doUnlock){
				bodyUnLock();
			}
		}
	}
	function bodyLock() {
		const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
		if (lockPadding.length > 0){
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = lockPaddingValue;
			}
		}
		body.style.paddingRight = lockPaddingValue;
		body.classList.add('lock');
		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}
	function bodyUnLock() {
		setTimeout(function () {
			if (lockPadding.length > 0) {
				for (let index = 0; index < lockPadding.length; index++) {
					const el = lockPadding[index];
					el.style.paddingRight = '0px';
				}
			}
			body.style.paddingRight = '0px';
			body.classList.remove('lock');
		}, timeout);
		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}
	document.addEventListener('keydown', function (e) {
		if (e.which === 27) {
			const popupActive = document.querySelector('.popup.open');
			popupClose(popupActive);
		}
	});

	(function () {
		if (!Element.prototype.closest) {
			Element.prototype.closest = function (css) {
				var node = this;
				while (node) {
					if (node.matches(css)) return node;
					else node = node.parentElement;
				}
				return null;
			};
		}
	})();
	(function () {
		if (!Element.prototype.matches) {
			Element.prototype.matches = Element.prototype.matchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector;
		}
	})();


