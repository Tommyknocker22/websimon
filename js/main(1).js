var $ventana = $(window),
    $mainNav = $(".mainNav"),
    $purgatoryCover = $(".purgatoryCover"),
	$conParallax = $(".conParallax") ,
    $whiteLogo = $(".whiteLogo")
	parallax = 0.3;

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

$ventana.on("scroll" , scrolleando) ;

function scrolleando() {
	
	var scrolleado = $ventana.scrollTop() ;
	
	if(scrolleado >= 550) {
        $purgatoryCover.addClass("purgatoryCoverFullColor");
  }      
    else {

     $purgatoryCover.removeClass("purgatoryCoverFullColor");
    }
        
}


// Controla el efecto parallax del logo en la sección hero

$ventana.on("scroll" , parallaxLogo ) ;

function parallaxLogo() {
	
	var scrolled = $ventana.scrollTop() ;
	
	var empujonParaArriba = scrolled * parallax ;
	
	$whiteLogo.css("transform" , "translateY(" + empujonParaArriba + "px)" );
	
}



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
