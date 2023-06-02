var $ventana = $(window),
    $mainNav = $(".mainNav"),
    $purgatoryCover = $(".purgatoryCover"),
	$conParallax = $(".conParallax") ,
    $whiteLogo = $(".whiteLogo"),
    $welcome = $(".welcome"),
	parallax = 0.6,
    fadeStart=400,
    fadeUntil=1500,
    fadeStartWelcome=850,
    fadeUntilWelcome=3000,
    fadeEffect=0.1;

// Controla el color de fondo del menu al hacer scroll

$ventana.on("scroll" , navDarkBackground ) ;

function navDarkBackground() {
	
	var scrolleado = $ventana.scrollTop() ;
	console.log(scrolleado) ;
	
	if(scrolleado >= 140) {
		$mainNav.addClass("mainNavScroll") ;
       
  }      
    else {
        $mainNav.removeClass("mainNavScroll");
    
    }
        
}





// Controla el cambio de opacidad del fondo del hero al hacer scroll

//var $opacity = 0;
//
//$ventana.on("scroll" , scrolleando) ;
//
//function scrolleando() {
//	
//	var scrolleado = $ventana.scrollTop() ;
//	
//	if(scrolleado >= 550) {
//        $purgatoryCover.addClass("purgatoryCoverFullColor");
//  }      
//    else {
//
//     $purgatoryCover.removeClass("purgatoryCoverFullColor");
//    }
//        
//}


// Controla el efecto parallax del logo en la sección hero

$ventana.on("scroll" , parallaxLogo ) ;

function parallaxLogo() {
	
	var scrolled = $ventana.scrollTop() ;
	
	var empujonParaArriba = scrolled * parallax ;
	
	$whiteLogo.css("transform" , "translateY(" + empujonParaArriba + "px)" );
	
}

// Quita opacidad a logo



// Oscurecer Hero en scroll

$ventana.on("scroll" , oscurecerFondo ) ;

function oscurecerFondo() {
	
	var scrolled = $ventana.scrollTop(),
    opacity=1;
	
	if (scrolled<=fadeStart) {
        opacity=0.7;
    }
    
    else if (scrolled<=fadeUntil) {
    opacity=1-scrolled/fadeUntil;    
        
    }
    
     else if (scrolled>fadeUntil) {
    opacity=0;    
        
    }
//	$purgatoryCover.css('opacity',opacity).html(opacity);
    $purgatoryCover.css('opacity',opacity);
}

// Controla los anchor en página Music

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// Mostrar Welcome en scroll
//
//$ventana.on("scroll" , mostrarWelcome ) ;
//
//function mostrarWelcome() {
//	
//	var scrolled = $ventana.scrollTop(),
//    opacity=1;
//	
//	if (scrolled<=fadeStartWelcome) {
//        opacity=0.9;
//    }
//    
//    else if (scrolled<=fadeUntil) {
//    opacity=scrolled/fadeUntil-0.5;      
//    }
//    
//	$welcome.css('opacity',opacity);
//}


//var $btnPanel = $(".btnPanel") ,
//	$panel = $(".panel") ,
//	panelCerrado = true ;
//
//
//$btnPanel.on("click" , abrirCerrarPanel) ;
//
//
//
//
//
//function abrirCerrarPanel() {
//	$panel.toggleClass("abierto") ;
//	
//	
//	if(panelCerrado === true) {
//		$btnPanel.text("Cerrar") ; // A
//		panelCerrado = false ;	
//	}
//	else{
//		$btnPanel.text("Abrir") ;  // B
//		panelCerrado = true ;
//	}
//}
