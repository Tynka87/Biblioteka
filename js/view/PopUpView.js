var popUpView = {

	renderEditBook: function (book,index) {
		$(".tooltip #titleInPopUp").val(book.getTitle());
		$(".tooltip #year").val(book.getYear());
		$(".tooltip #index").val(index);
		
	},
	showAuthorsInPopUp: function (authors, book) {
		$('.tooltip #authorlist').append(prepareOptionList(authors));
		$(".tooltip #authorlist option[value='" + book.getAuthor() + "']").attr("selected", "selected")
	}

};