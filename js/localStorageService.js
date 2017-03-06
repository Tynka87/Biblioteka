//TODO: połączyć z localStorageContoler
var localStorageService = {

	init: function () {
		if (typeof localStorage.lib != 'undefined') {
			library.addBooks(JSON.parse(localStorage.lib));

		} else {

			$.getJSON("js/resource/library.json", function (data) {
				library.addBooks(data);
				var _JSON = JSON.stringify(data);
				localStorage.lib = _JSON;

			}).fail(function(){
				console.log("error while loading library.json")
			}); //Koniec getJSON

		}; //koniec else

	}, //Koniec init

	initAuthor: function () {
		if (typeof localStorage.author != 'undefined') {
			libraryAuthor.addAuthors(JSON.parse(localStorage.author));

		} else {

			$.getJSON("js/resource/libraryAuthor.json", function (data) {

				libraryAuthor.addAuthors(data);
				var _JSON = JSON.stringify(data);
				localStorage.author = _JSON;

			}); //Koniec getJSON

		}; //koniec else

	}, //Koniec initAuthor


	addlibrarytoLocalStor: function (lib) {

		var _JSON = JSON.stringify(lib);
		localStorage.lib = _JSON;

	},


	addAuthortoLocalStor: function (thislibraryAuthor) {

		var _JSON = JSON.stringify(thislibraryAuthor);
		localStorage.author = _JSON;

	}

};