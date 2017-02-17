var authorView = {


	clearViewAuthor: function () {
		$('#authorlist option').remove();
	},




	showAuthors: function (liblaryGetAuthors) {


		for (var i = 0; i < liblaryGetAuthors.length; i++) {


			$('#authorlist').append("<option value =" + liblaryGetAuthors[i].getId() + ">" + liblaryGetAuthors[i].getName() + " " + liblaryGetAuthors[i].getSurname() + "</option>");



		}
	}


};