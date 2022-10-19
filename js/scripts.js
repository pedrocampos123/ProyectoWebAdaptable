window.onscroll = function () {
	scrollFunction();
};

myButton = document.getElementById("myBtn");

function scrollFunction() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

$(document).ready(function() {
	var controller = $.superscrollorama();
	// Noticias
	controller.addTween('#header-noticia', TweenMax.from( $('#header-noticia'), .5, {css:{opacity: 0}}));
	controller.addTween('#row-noticia', TweenMax.from( $('#row-noticia'), .5, {css:{opacity: 0}}));
	
	// Informacion
	controller.addTween('#header-info', TweenMax.from( $('#header-info'), .5, {css:{opacity: 0}}));
	controller.addTween('#info-1', TweenMax.from( $('#info-1'), .5, {css:{opacity: 0}}));
	controller.addTween('#info-2', TweenMax.from( $('#info-2'), .5, {css:{opacity: 0}}));
	controller.addTween('#info-3', TweenMax.from( $('#info-3'), .5, {css:{opacity: 0}}));
	controller.addTween('#info-4', TweenMax.from( $('#info-4'), .5, {css:{opacity: 0}}));

	// Impacto
	controller.addTween('#header-impacto', TweenMax.from( $('#header-impacto'), .5, {css:{opacity: 0}}));
	controller.addTween('#impacto1', TweenMax.from( $('#impacto1'), .5, {css:{opacity: 0}}));
	controller.addTween('#impacto2', TweenMax.from( $('#impacto2'), .5, {css:{opacity: 0}}));
	controller.addTween('#impacto3', TweenMax.from( $('#impacto3'), .5, {css:{opacity: 0}}));
	controller.addTween('#impacto4', TweenMax.from( $('#impacto4'), .5, {css:{opacity: 0}}));

	// Contacto
	controller.addTween('#contacto', TweenMax.from( $('#contacto'), .5, {css:{opacity: 0}}));
});