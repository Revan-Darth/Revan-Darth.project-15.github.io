document.querySelector('.menu__burger').addEventListener('click', function (e){
	e.preventDefault();
	
	if(this.classList.contains('active')) {
	   this.classList.remove('active');
	   document.body.classList.remove('lock');
	   document.querySelector('.header__menu').classList.remove('active');
	} else {
	   this.classList.add('active');
	   document.body.classList.add('lock');
	   document.querySelector('.header__menu').classList.add('active');
	}
});