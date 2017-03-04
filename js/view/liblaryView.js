var liblaryView = {
	liblaryView: [],

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
/*
	removeBook: function () {

		$('.removeBook').hide();
		console.log($('#library h4'));

		$('#library h4').toggle(function () {
				$(this).next('.removeBook').slideDown();
				console.log("test" + $(this).next('.removeBook'));
				$(this).addClass('close');
				$(this).removeClass('open');

			},
			function () {
				$(this).next('.removeBook').fadeOut();
				$(this).removeClass('close');
				$(this).addClass('open');
			}
		); // koniec funkcji toggle

	},
*/


};