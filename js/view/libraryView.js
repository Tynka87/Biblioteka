var libraryView = {
    libraryView: [],

    clearView: function () {
        $('#library fieldset ul .col-md-4').remove();
    },

    showBooks: function (books, authors) {
        let nr = "";
        $.get('html/tile.html', (tile) => {

            for (var i = 0; i < books.length; i++) {

                nr = libraryAuthor.getAuthorInBookWithId(books[i].getAuthor(), libraryAuthor.getAuthors());
                console.log(JSON.stringify(books[i]));
                a = libraryAuthor.getAuthor(parseInt(books[i].getAuthor()));
                console.log(a);
//                console.log('nr: ' + nr);
                let newTile = tile;
                newTile = newTile.replace(/{{title}}/g, books[i].getTitle())
                    .replace("{{name}}", a.getName())
                    .replace("{{surname}}", a.getSurname())
                    .replace("{{year}}", books[i].getYear())
                    .replace("{{i}}", i)
                    .replace("{{i}}", i);

                $('#library fieldset ul').append(newTile);
            }

        }, 'text');

    },

    showAuthorsInBook: function (authors) {

        $('.form-group #authorlist').append(prepareOptionList(authors));
    },

};
