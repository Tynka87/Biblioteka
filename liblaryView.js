var liblaryView = {
	liblaryView : [],
	
	clearView : function() {
				 $('#library fieldset ul li').remove();
				$('#library fieldset ul button').remove();
				},
	
	showBooks : function(liblaryGetBooks){

		
		for (var i = 0 ; i < liblaryGetBooks.length ; i++){
			
					
			$('#library fieldset ul').append("<li><h4 class='open'>Tytuł: " + liblaryGetBooks[i].getTitle() + "</h4>" 
											 + "<p>Autor: " + liblaryGetBooks[i].getAuthor() + "</p>" 
											 + "<p>Rok wydania: " + liblaryGetBooks[i].getYear() + "</p></li>" );
			$('#library fieldset ul').append("<button class='removeBook' value="+ i +">Usuń książke</button>");
		
		
		}
	},
	removeBook : function(){
			
		$('.removeBook').hide();
 		$('#library h4').toggle(
		function() {
	       $(this).next('.removeBook').slideDown();
		   $(this).addClass('close');
			$(this).removeClass('open');
			
		},
		function() {
		   $(this).next('.removeBook').fadeOut();
		   $(this).removeClass('close');
			$(this).addClass('open');
	  }
	); // koniec funkcji toggle
	
	}

	
};