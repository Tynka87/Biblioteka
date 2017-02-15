var liblaryView = {
	liblaryView : [],
	
	clearView : function() {
				 $('#library fieldset ul li').remove();
				},
	
	showBooks : function(liblaryGetBooks){

		
		for (var i = 0 ; i < liblaryGetBooks.length ; i++){
			
					
			$('#library fieldset ul').append("<li><h4>Tytuł: " + liblaryGetBooks[i].getTitle() + "</h4>" 
											 + "<p>Autor: " + liblaryGetBooks[i].getAuthor() + "</p>" 
											 + "<p>Rok wydania: " + liblaryGetBooks[i].getYear() + "</p></li>" );
		
		
		}
	}

	
};