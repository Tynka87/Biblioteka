var popUpView = {

	editBook: function (book) {
		var tooltip = $('#title').html();
		console.log('tooltip' + tooltip);
		$("#titleInPopUp").val(book.getTitle());
		$("#yearInPopUp").val(book.getYear());
		console.log("Moj autor: " + book.getAuthor());
		//$('li #title').append(" value ='" + book.getTitle() +"'" );
	},
	showAuthorsInPopUp: function (authors, book) {
		$('#authorlistInPopUp').append(prepareOptionList(authors));
		$("#authorlistInPopUp option[value='" + book.getAuthor() + "']").attr("selected", "selected")
	}

};