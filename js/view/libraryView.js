var libraryView = {
	libraryView: [],

	clearView: function () {
		$('#library fieldset ul .col-md-4').remove();
	},

	showBooks: function (books, authors) {
		var nr = "";
		for (var i = 0; i < books.length; i++) {

			nr = books[i].getAuthor() - 1
			console.log("Numer autora: " + nr);
			$('#library fieldset ul').append("<div class='col-md-4'><li><button class='btn' value=" + i + ">Tytuł: " + books[i].getTitle() + "</button>" + "<p>Autor: " + authors[nr].getName() + " " + authors[nr].getSurname() + "</p>" + "<p>Rok wydania: " + books[i].getYear() + "</p>");

		}
	},

	showAuthorsInBook: function (authors) {

		$('#authorlist').append(prepareOptionList(authors));
	},

};