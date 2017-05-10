//TODO: połączyć z localStorageContoler
var localStorageService = {

    init: function () {
        return new Promise(function (resolve, reject) {
            if (typeof localStorage.lib != 'undefined') {
                library.addBooks(JSON.parse(localStorage.lib));
                resolve();
            } else {

                $.getJSON("js/resource/library.json", function (data) {
                    library.addBooks(data);
                    var _JSON = JSON.stringify(data);
                    localStorage.lib = _JSON;
                    resolve();
                }).fail(function () {
                    console.log("error while loading library.json")
                    reject();
                }); //Koniec getJSON

            }; //koniec else
        }); //koniec Promise
    }, //Koniec init

    initAuthor: function () {
        return new Promise(function (resolve, reject) {
            if (typeof localStorage.author != 'undefined') {
                libraryAuthor.addAuthors(JSON.parse(localStorage.author));
                resolve();
            } else {

                $.getJSON("js/resource/libraryAuthor.json", function (data) {

                    libraryAuthor.addAuthors(data);
                    var _JSON = JSON.stringify(data);
                    localStorage.author = _JSON;
                    resolve();
                }); //Koniec getJSON

            }; //koniec else
        }); //koniec Promise
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
