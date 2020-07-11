window.addEventListener('scroll', function() {
	let menuArea = document.getElementById('navigation');

	if (window.pageYOffset > 0) {
		menuArea.classList.add('trans');
	} else {
		menuArea.classList.remove('trans');
	}
});

const menu = document.querySelector('.menu-btn');

const nav = document.querySelector('.menu-item');

const home = document.querySelector('#home');

const about = document.querySelector('#about');

const shop = document.querySelector('#shop');

const portfolio = document.querySelector('#portfolio');

const blog = document.querySelector('#blog');

const contact = document.querySelector('#contact');

const footer = document.querySelector('.footer');

let showMenu = false;

menu.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menu.classList.add('close');
		nav.classList.add('show');
		home.classList.add('opac');
		about.classList.add('opac');
		shop.classList.add('opac');
		portfolio.classList.add('opac');
		blog.classList.add('opac');
		contact.classList.add('opac');
		footer.classList.add('opac');
		// navLinks.forEach((item) => item.classList.add('show'));

		//set menu state
		showMenu = true;
	} else {
		menu.classList.remove('close');
		nav.classList.remove('show');
		home.classList.remove('opac');
		about.classList.remove('opac');
		shop.classList.remove('opac');
		portfolio.classList.remove('opac');
		blog.classList.remove('opac');
		contact.classList.remove('opac');
		footer.classList.remove('opac');
		// navLinks.forEach((item) => item.classList.remove('show'));

		//set menu state
		showMenu = false;
	}
}

// const links = document.querySelectorAll('link');

//let i;
//for (i = 0; i < links.length; i++) {
//addEventListener('click', toggleClass);
//}
//function toggleClass() {
//	if ((showMenu = true)) {
//		console.log('clicked');
//		menu.classList.remove('close');
//		nav.classList.remove('show');
//	}
//}
