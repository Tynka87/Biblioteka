var authorView = {

	clearViewAuthor: function () {
		$('#authorlist option').remove();
		$('#library fieldset ul .col-md-4').remove();		
	},


	showAuthors: function (authors) {
		
		for (var i = 0; i < authors.length; i++) {
			
			$('#authors fieldset ul').append("<div class='col-md-4'><li><button class='btn' value=" + i + ">ID: " + authors[i].getId() + "</button>" + "<p>Imię: " + authors[i].getName() + "</p>" + "<p>Rok wydania: " +authors[i].getSurname() + "</p>");

		}
	},

};