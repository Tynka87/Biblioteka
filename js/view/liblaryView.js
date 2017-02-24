var liblaryView = {
	liblaryView: [],

	clearView: function () {
		$('#library fieldset ul li').remove();
		$('#library fieldset ul button').remove();
	},

	showBooks: function (books, authors) {
		var nr = "";
		for (var i = 0; i < books.length; i++) {

			nr = books[i].getAuthor() - 1
			$('#library fieldset ul').append("<li><h4 class='open'>Tytuł: " + books[i].getTitle() + "</h4>" + "<p>Autor: " + authors[nr].getName() + " " + authors[nr].getSurname() + "</p>" + "<p>Rok wydania: " + books[i].getYear() + "</p>" + "<div class='button_book'><button class='removeBook' value=" + i + ">Usuń książke</button>" + " <button class='editBook' value=" + i + ">Edytuj książke</button></div></li>");

		}
	},
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


};