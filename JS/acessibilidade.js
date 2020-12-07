$(document).ready(
	function() {
		/*Contraste*/
		var recuperaContraste = window.localStorage.getItem("contraste");

		if(recuperaContraste == "on"){
			$("html").addClass('acContraste');
		}
		else if(recuperaContraste == "off"){
			$("html").removeClass('acContraste');
		}
	
		/*Acessibilidade Fontes*/
		var fonteRecupera = '14';

		var fonteRecuperaDefine = fonteRecupera + "px";
		$('body').css('font-size', fonteRecuperaDefine);

		if (fonteRecupera > 14){
			$("body").addClass('fontMa'); 
		}
		else {
			$("body").addClass('fontMe'); 
		}

		if(fonteRecupera == 17){
			$(".zoom_mais").addClass('btnAOff');
		}
		else if(fonteRecupera == 11){
			$(".zoom_mais").addClass('btnAOff');
		}	


		$(".zoom_menos").click(function() {

			var size = $("body").css('font-size');

			size = size.replace('px', '');
			size = parseInt(size) - 1;

			if(size >= 11){

				if(size == 11){
					$(".zoom_menos").addClass('btnAOff');
				}
				else{
					$(".zoom_menos").removeClass('btnAOff');
				}

				window.localStorage.setItem("tamanhoFonte", size);

				$("body").animate({'font-size' : size + 'px'});

				$("body").removeClass('fontMa'); 
				$("body").addClass('fontMe'); 
				
			}
			return false;

		});	


		$(".zoom_normal").click(function() {

			$(".btnAcessibilidade ul li").removeClass('btnAOff');

			$("body").animate({'font-size' : '14px'});
			window.localStorage.setItem("tamanhoFonte", "14");

			$("body").removeClass('fontMe'); 
			$("body").removeClass('fontMa'); 			
		});	




		$(".zoom_mais").click(function() {

			var size = $("body").css('font-size');

			size = size.replace('px', '');
			size = parseInt(size) + 1;

			if(size <= 19){

				if(size == 19){
					$(".zoom_mais").addClass('btnAOff');
				}
				else{
					$(".zoom_mais").removeClass('btnAOff');
				}

				window.localStorage.setItem("tamanhoFonte", size);

				$("body").animate({'font-size' : size + 'px'});

				$("body").removeClass('fontMe'); 
				$("body").addClass('fontMa');
			}
			return false;		

		});	
	
		//Acessibilidade Contraste
		$(".ico-contraste").click(function() {

			$("html").toggleClass('acContraste');
		});

	}
);
		