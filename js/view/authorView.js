var authorView = {


	clearViewAuthor: function () {
		$('#authorlist option').remove();
	},




	showAuthors: function (authors) {

		$('#authorlist').append(prepareOptionList(authors));
	},

	showAuthorsInPopUp: function (authors, book) {
		$('#authorlistInPopUp').append(prepareOptionList(authors));
		$("#authorlistInPopUp option[value='" + book.getAuthor() + "']").attr("selected", "selected")
	}


};