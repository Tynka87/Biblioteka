var liblaryView = {
	liblaryView: [],

	clearView: function () {
		$('#library fieldset ul li').remove();
		$('#library fieldset ul button').remove();
	},

	showBooks: function (liblaryGetBooks) {

		for (var i = 0; i < liblaryGetBooks.length; i++) {

			$('#library fieldset ul').append("<li><h4 class='open'>Tytuł: " + liblaryGetBooks[i].getTitle() + "</h4>" + "<p>Autor: " + liblaryGetBooks[i].getAuthor() + "</p>" + "<p>Rok wydania: " + liblaryGetBooks[i].getYear() + "</p>" + "<div class='button_book'><button class='removeBook' value=" + i + ">Usuń książke</button>" + " <button class='editBook' value=" + i + ">Edytuj książke</button></div></li>");

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

	editBook: function (book) {
		var tooltip = $('#title').html();
		console.log('tooltip' + tooltip);
		$("#titleInPopUp").val(book.getTitle());
		$("#yearInPopUp").val(book.getYear());
		console.log("Moj autor: " + book.getAuthor());
		//$('li #title').append(" value ='" + book.getTitle() +"'" );
		
		

	}
};