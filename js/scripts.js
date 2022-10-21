// Variable global
var myButton = document.getElementById("myBtn");

// Funcion scroll
window.onscroll = function () {
	scrollFunction();
};

// Muestra el boton cuando bajen 200px
function scrollFunction() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// LLeva al inicio de la pagina
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


// Validaciones del formulario
function showAlert(){
    if(validarCajasVacias() > 0){
        Swal.fire(
            'Ha habido un error en los datos!',
            'Favor corregir los campos marcados',
            'error'
          )
    }else{
        Swal.fire(
            'Gracias por escribirnos',
            'Ten en cuenta que nuestro equipo va a revisar tus comentarios para detectar alguna anomalía',
            'success'
          )
        removeError();
        limpiar();
    }
}

function validarCajasVacias(){
    var cont = 0;
    var nombre = document.getElementById("txtNombre");
    var correo = document.getElementById("txtCorreo");
    var telefono = document.getElementById("txtTelefono");
	var comentario = document.getElementById("txtComentario");


	if(nombre.value === ""){
        nombre.className += " is-invalid"
        cont++;
    }

    if(correo.value === ""){
        correo.className += " is-invalid";
        cont++;
    }

    if(telefono.value === ""){
        telefono.className += " is-invalid"
        cont++;
    }

    if(comentario.value === ""){
        comentario.className += " is-invalid";
        cont++;
    }

    return cont;

}

function removeError(){
    document.getElementById("txtNombre").classList.remove("is-invalid");
    document.getElementById("txtCorreo").classList.remove("is-invalid");
    document.getElementById("txtTelefono").classList.remove("is-invalid");
    document.getElementById("txtComentario").classList.remove("is-invalid");

    document.getElementById("txtNombre").classList.remove("is-valid");
    document.getElementById("txtCorreo").classList.remove("is-valid");
    document.getElementById("txtTelefono").classList.remove("is-valid");
    document.getElementById("txtComentario").classList.remove("is-valid");
}

function limpiar(){
	var nombre = document.getElementById("txtNombre");
    var correo = document.getElementById("txtCorreo");
    var telefono = document.getElementById("txtTelefono");
    var comentario = document.getElementById("txtComentario");

    nombre.value = "";
    correo.value = "";
    telefono.value = "";
	comentario.value = "";
}

$(document).ready(function(){

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

	$("#txtNombre").keyup(function(){
		var nombre = $(this).val();
		var arraynombre = nombre.split(" ");
		
		if(arraynombre.length === 4){
            if(arraynombre[3].length > 0){
                $(this).removeClass("is-invalid");
                $(this).addClass("is-valid");
            }            
		}else{
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
        }

        if(nombre === ""){
            $(this).removeClass("is-valid");
            $(this).removeClass("is-invalid");
        }
	});

    $("#txtCorreo").keyup(function(){
        var correo = $("#txtCorreo").val();

        if(correo.indexOf("@") > -1 && correo.indexOf(".com") > -1){
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
        }else{
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
        }

        if(correo === ""){
            $(this).removeClass("is-valid");
            $(this).removeClass("is-invalid");
        }

    });

    $("#txtTelefono").keyup(function(){
        var telefono = $("#txtTelefono").val();

        if(telefono.length > 8){
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
        }else{
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
        }

        if(telefono === ""){
            $(this).removeClass("is-valid");
            $(this).removeClass("is-invalid");
        }
    });

    $("#txtComentario").keyup(function(){
        var comentario = $("#txtComentario").val();

        if(comentario.length >= 30){
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
            $("#textComentario").fadeOut();
        }else{
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
            $("#textComentario").fadeIn();
            $("#txtCaracteres").text(30-(comentario.length));
        }

        if(comentario === ""){
            $(this).removeClass("is-valid");
            $(this).removeClass("is-invalid");
        }

    });
});


