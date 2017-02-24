var authorView = {


	clearViewAuthor: function () {
		$('#authorlist option').remove();
	},


	showAuthors: function (authors) {

		$('#authorlist').append(prepareOptionList(authors));
	},


};