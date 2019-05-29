$(document).ready(function(){
	
		$('.js--nav--section').waypoint(function(direction){

			if(direction === 'down'){
		
				$('nav').addClass('sticky');
			}
			else{
				$('nav').removeClass('sticky');

			}
		}, {
			offset: '220px;'
		});
	
	
	
	
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon ion-icon');


		$('.js--nav-icon').click(function() {


			nav.slideToggle(300);


		if ( icon.attr("name") === 'close') {

			icon.attr("name", 'menu');

		}

		else {

			icon.attr("name", 'close');
		}



	});



	$(window).resize(function(){

		if($(window).width() > 750){
			
			nav.css('display', 'block');


		}

		else{
			
			nav.css('display', 'none');
			icon.attr("name", 'menu');	

		}

	});

	
	
});