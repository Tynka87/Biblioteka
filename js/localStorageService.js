//TODO: połączyć z localStorageContoler
var localStorageService = {

	init: function () {
		if (typeof localStorage.lib != 'undefined') {
			liblary.addBooks(JSON.parse(localStorage.lib));

		} else {

			$.getJSON("js/resource/liblary.json", function (data) {
				liblary.addBooks(data);
				var _JSON = JSON.stringify(data);
				localStorage.lib = _JSON;

			}).fail(function(){
				console.log("error while loading liblary.json")
			}); //Koniec getJSON

		}; //koniec else

	}, //Koniec init

	initAuthor: function () {
		if (typeof localStorage.author != 'undefined') {
			liblaryAuthor.addAuthors(JSON.parse(localStorage.author));

		} else {

			$.getJSON("js/resource/liblaryAuthor.json", function (data) {

				liblaryAuthor.addAuthors(data);
				var _JSON = JSON.stringify(data);
				localStorage.author = _JSON;

			}); //Koniec getJSON

		}; //koniec else

	}, //Koniec initAuthor


	addLiblarytoLocalStor: function (lib) {

		var _JSON = JSON.stringify(lib);
		localStorage.lib = _JSON;

	},


	addAuthortoLocalStor: function (thisliblaryAuthor) {

		var _JSON = JSON.stringify(thisliblaryAuthor);
		localStorage.author = _JSON;

	}

};