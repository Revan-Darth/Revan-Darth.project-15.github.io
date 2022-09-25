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
// window.addEventListener('resize', function () {
// 	if (window.innerWidth <= 800) {
// 	    document.querySelector('.footer__social-text').classList.add('visually-hidden');
// 	} else {
// 	    document.querySelector('.footer__social-text').classList.remove('visually-hidden');
// 	}
// });

if (window.matchMedia("(max-width: 480px)").matches) {
	document.querySelector('.events__title').classList.remove('visually-hidden');
	document.querySelector('.log__title').classList.remove('visually-hidden');
	document.querySelector('.novelties__title').classList.remove('visually-hidden');
} else {
	document.querySelector('.events__title').classList.add('visually-hidden');
	document.querySelector('.log__title').classList.add('visually-hidden');
	document.querySelector('.novelties__title').classList.add('visually-hidden');
}

// function DynamicAdapt(type) {
// 	this.type = type;
// }

// DynamicAdapt.prototype.init = function () {
// 	const _this = this;
// 	this.оbjects = [];
// 	this.daClassname = "_dynamic_adapt_";
// 	this.nodes = document.querySelectorAll("[data-da]");

// 	for (let i = 0; i < this.nodes.length; i++) {
// 		const node = this.nodes[i];
// 		const data = node.dataset.da.trim();
// 		const dataArray = data.split(",");
// 		const оbject = {};
// 		оbject.element = node;
// 		оbject.parent = node.parentNode;
// 		оbject.destination = document.querySelector(dataArray[0].trim());
// 		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
// 		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
// 		оbject.index = this.indexInParent(оbject.parent, оbject.element);
// 		this.оbjects.push(оbject);
// 	}

// 	this.arraySort(this.оbjects);

// 	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
// 		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
// 	}, this);
// 	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
// 		return Array.prototype.indexOf.call(self, item) === index;
// 	});

// 	for (let i = 0; i < this.mediaQueries.length; i++) {
// 		const media = this.mediaQueries[i];
// 		const mediaSplit = String.prototype.split.call(media, ',');
// 		const matchMedia = window.matchMedia(mediaSplit[0]);
// 		const mediaBreakpoint = mediaSplit[1];

// 		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
// 			return item.breakpoint === mediaBreakpoint;
// 		});
// 		matchMedia.addListener(function () {
// 			_this.mediaHandler(matchMedia, оbjectsFilter);
// 		});
// 		this.mediaHandler(matchMedia, оbjectsFilter);
// 	}
// };

// DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
// 	if (matchMedia.matches) {
// 		for (let i = 0; i < оbjects.length; i++) {
// 			const оbject = оbjects[i];
// 			оbject.index = this.indexInParent(оbject.parent, оbject.element);
// 			this.moveTo(оbject.place, оbject.element, оbject.destination);
// 		}
// 	} else {
// 		for (let i = 0; i < оbjects.length; i++) {
// 			const оbject = оbjects[i];
// 			if (оbject.element.classList.contains(this.daClassname)) {
// 				this.moveBack(оbject.parent, оbject.element, оbject.index);
// 			}
// 		}
// 	}
// };

// DynamicAdapt.prototype.moveTo = function (place, element, destination) {
// 	element.classList.add(this.daClassname);
// 	if (place === 'last' || place >= destination.children.length) {
// 		destination.insertAdjacentElement('beforeend', element);
// 		return;
// 	}
// 	if (place === 'first') {
// 		destination.insertAdjacentElement('afterbegin', element);
// 		return;
// 	}
// 	destination.children[place].insertAdjacentElement('beforebegin', element);
// }

// DynamicAdapt.prototype.moveBack = function (parent, element, index) {
// 	element.classList.remove(this.daClassname);
// 	if (parent.children[index] !== undefined) {
// 		parent.children[index].insertAdjacentElement('beforebegin', element);
// 	} else {
// 		parent.insertAdjacentElement('beforeend', element);
// 	}
// }

// DynamicAdapt.prototype.indexInParent = function (parent, element) {
// 	const array = Array.prototype.slice.call(parent.children);
// 	return Array.prototype.indexOf.call(array, element);
// };

// DynamicAdapt.prototype.arraySort = function (arr) {
// 	if (this.type === "min") {
// 		Array.prototype.sort.call(arr, function (a, b) {
// 			if (a.breakpoint === b.breakpoint) {
// 				if (a.place === b.place) {
// 					return 0;
// 				}

// 				if (a.place === "first" || b.place === "last") {
// 					return -1;
// 				}

// 				if (a.place === "last" || b.place === "first") {
// 					return 1;
// 				}

// 				return a.place - b.place;
// 			}

// 			return a.breakpoint - b.breakpoint;
// 		});
// 	} else {
// 		Array.prototype.sort.call(arr, function (a, b) {
// 			if (a.breakpoint === b.breakpoint) {
// 				if (a.place === b.place) {
// 					return 0;
// 				}

// 				if (a.place === "first" || b.place === "last") {
// 					return 1;
// 				}

// 				if (a.place === "last" || b.place === "first") {
// 					return -1;
// 				}

// 				return b.place - a.place;
// 			}

// 			return b.breakpoint - a.breakpoint;
// 		});
// 		return;
// 	}
// };

// const daAdapt = new DynamicAdapt("max");
// daAdapt.init();
// data-da=".content__column-garden,992,2"